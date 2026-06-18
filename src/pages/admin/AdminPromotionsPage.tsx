import { useMemo, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getPromotions, createPromotion, deletePromotion } from "@/api/promotions.api";
import AdminLayout from "./_components/AdminLayout";
import DataTable, { type TableColumn } from "@/pages/_shared/components/ui/DataTable";
import TableSkeleton from "@/pages/_shared/components/ui/TableSkeleton";
import Select from "@/pages/_shared/components/ui/Select";
import TableEmptyState from "@/pages/_shared/components/ui/TableEmptyState";
import Button from "@/pages/_shared/components/ui/Button";
import Modal from "@/pages/_shared/components/ui/Modal";
import Input from "@/pages/_shared/components/ui/Input";
import { Search, Plus, Trash2, Calendar, Image as ImageIcon, MapPin } from "lucide-react";
import type { Promotion, CreatePromotionPayload } from "@/types/promotion.types";
import { promotionSchema, type PromotionFormValues } from "@/validation/promotion.schemas";
import { cn } from "@/utils/cn";

const AdminPromotionsPage = () => {
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PromotionFormValues>({
    resolver: zodResolver(promotionSchema),
    defaultValues: {
      category: "promo",
      image_url: "",
      sale_price: 0,
      original_price: 0,
    },
  });

  // Query
  const { data: promotions = [], isLoading } = useQuery({
    queryKey: ["admin-promotions"],
    queryFn: async () => {
      const res = await getPromotions();
      return res as Promotion[];
    },
    staleTime: 5 * 60 * 1000,
  });

  // Mutations
  const createMutation = useMutation({
    mutationFn: createPromotion,
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["admin-promotions"] });
      setIsAddModalOpen(false);
      reset();
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deletePromotion,
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["admin-promotions"] });
    },
  });

  const onSubmit: SubmitHandler<PromotionFormValues> = (data) => {
    createMutation.mutate(data as CreatePromotionPayload);
  };

  const handleDelete = (id: string) => {
    if (!confirm("Are you sure you want to delete this promotion?")) return;
    deleteMutation.mutate(id);
  };

  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortBy, setSortBy] = useState("");

  const filteredPromotions = useMemo(() => {
    let result = promotions.filter((p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.destination_code ?? "").toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (categoryFilter === "domestic") {
      result = result.filter(p => ["MNL", "CEB", "DVO", "PPS", "MPH", "ILO"].includes(p.destination_code ?? ""));
    } else if (categoryFilter === "international") {
      result = result.filter(p => !["MNL", "CEB", "DVO", "PPS", "MPH", "ILO"].includes(p.destination_code ?? ""));
    }

    if (sortBy === "price") {
      result = [...result].sort((a, b) => a.sale_price - b.sale_price);
    } else if (sortBy === "date") {
      result = [...result].sort((a, b) => new Date(a.valid_until).getTime() - new Date(b.valid_until).getTime());
    }

    return result;
  }, [promotions, searchQuery, categoryFilter, sortBy]);

  const columns: TableColumn<Promotion>[] = useMemo(() => [
    {
      key: "title",
      header: "PROMOTION TITLE",
      cell: (row) => (
        <div className="flex items-center gap-3">
          {row.image_url ? (
            <img src={row.image_url} className="size-10 rounded-lg object-cover border border-slate-100" alt="" />
          ) : (
            <div className="size-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400">
              <ImageIcon size={16} />
            </div>
          )}
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 leading-tight">{row.title}</span>
            <span className="text-[11px] text-slate-500">{row.destination_city}</span>
          </div>
        </div>
      ),
    },
    {
      key: "destination",
      header: "DESTINATION",
      cell: (row) => (
        <div className="flex items-center gap-2 text-[#496B92] font-semibold uppercase">
          <MapPin size={14} />
          {row.destination_code}
        </div>
      ),
    },
    {
      key: "price",
      header: "PRICE",
      cell: (row) => (
        <div className="flex flex-col">
          <span className="text-blue-600 font-bold leading-tight">₱{row.sale_price.toLocaleString()}</span>
          <span className="text-xs text-slate-400 line-through">₱{row.original_price.toLocaleString()}</span>
        </div>
      ),
    },
    {
      key: "category",
      header: "CATEGORY",
      cell: (row) => (
        <span className={cn(
          "px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider",
          row.badge_type === "flash" ? "bg-amber-100 text-amber-700" :
          row.badge_type === "weekend" ? "bg-emerald-100 text-emerald-700" :
          row.badge_type === "hot" ? "bg-purple-100 text-purple-700" :
          row.badge_type === "promo" ? "bg-blue-100 text-blue-700" :
          "bg-slate-100 text-slate-600"
        )}>
          {row.badge_type ?? "promo"}
        </span>
      ),
    },
    {
      key: "valid_until",
      header: "VALID UNTIL",
      cell: (row) => (
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <Calendar size={14} />
          {new Date(row.valid_until).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
        </div>
      ),
    },
    {
      key: "actions",
      header: "ACTIONS",
      cell: (row) => (
        <button
          onClick={() => handleDelete(row.id)}
          disabled={deleteMutation.isPending}
          className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors border border-rose-100 disabled:opacity-50"
        >
          <Trash2 size={16} />
        </button>
      ),
    },
  ], [deleteMutation.isPending]);

  return (
    <AdminLayout>
      <div className="space-y-6 text-left">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Promotions</h2>
            <p className="text-sm font-medium text-slate-500">{filteredPromotions.length} active promotions</p>
          </div>
          <Button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-[#496B92] hover:bg-[#3B5470] text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-[#496B92]/10 flex items-center justify-center gap-2 self-start sm:self-auto"
          >
            <Plus size={18} />
            Create Promo
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search by title or destination..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-11 w-full rounded-xl bg-slate-50 pl-10 pr-4 text-sm outline-none border border-transparent focus:border-[#496B92]/20 focus:bg-white focus:ring-2 focus:ring-[#496B92]/10 transition-all placeholder:text-slate-400"
            />
          </div>
          <Select
            value={categoryFilter}
            onChange={(val) => setCategoryFilter(val)}
            options={[
              { value: "", label: "All Categories" },
              { value: "domestic", label: "Domestic" },
              { value: "international", label: "International" },
            ]}
            triggerClassName="h-11 bg-slate-50 text-slate-600 border-transparent text-sm font-medium hover:border-slate-200"
          />
          <Select
            value={sortBy}
            onChange={(val) => setSortBy(val)}
            options={[
              { value: "", label: "Sort By" },
              { value: "price", label: "Price" },
              { value: "date", label: "Date" },
            ]}
            triggerClassName="h-11 bg-slate-50 text-slate-600 border-transparent text-sm font-medium hover:border-slate-200"
          />
        </div>

        {isLoading ? (
          <TableSkeleton columns={6} rows={5} />
        ) : (
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden animate-fade-in">
            <DataTable
              columns={columns}
              rows={filteredPromotions}
              rowKey={(row) => row.id}
              emptyState={
                <TableEmptyState
                  title="No promotions found"
                  description="We couldn't find any promotions matching your search query or filters."
                />
              }
            />
            <div className="flex items-center justify-between px-6 py-4 border-t border-slate-50 bg-slate-50/30">
              <p className="text-sm font-medium text-slate-500">
                Showing 1-{filteredPromotions.length} of {filteredPromotions.length}
              </p>
              <div className="flex items-center gap-2">
                <button disabled className="p-2 rounded-lg border border-slate-200 text-slate-400 opacity-50 cursor-not-allowed">
                  <Plus size={16} className="rotate-45" />
                </button>
                <button className="size-9 rounded-lg bg-[#496B92] text-white font-bold text-sm">1</button>
                <button disabled className="p-2 rounded-lg border border-slate-200 text-slate-400 opacity-50 cursor-not-allowed">
                  <Plus size={16} className="-rotate-45" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="Create New Promotion">
        <form onSubmit={handleSubmit(onSubmit)} className="py-4 space-y-4">
          <Input
            label="Promotion Title *"
            placeholder="e.g. Flash Sale: Manila to Cebu"
            error={errors.title?.message}
            {...register("title")}
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Sale Price (₱) *"
              type="number"
              placeholder="0"
              error={errors.sale_price?.message}
              {...register("sale_price", { valueAsNumber: true })}
            />
            <Input
              label="Original Price (₱) *"
              type="number"
              placeholder="0"
              error={errors.original_price?.message}
              {...register("original_price", { valueAsNumber: true })}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[13px] font-bold text-slate-500 uppercase tracking-widest ml-1">Category *</label>
              <select
                className="w-full h-12 rounded-xl bg-slate-50 border border-slate-200 px-4 text-sm font-medium outline-none focus:ring-2 focus:ring-[#496B92]/10 focus:border-[#496B92]/20 transition-all"
                {...register("category")}
              >
                <option value="flash">Flash Sale</option>
                <option value="weekend">Weekend Escape</option>
                <option value="international">International</option>
                <option value="promo">Regular Promo</option>
              </select>
            </div>
            <Input
              label="Destination Code (IATA) *"
              placeholder="e.g. CEB"
              maxLength={3}
              error={errors.destination_code?.message}
              {...register("destination_code")}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Destination City *"
              placeholder="e.g. Cebu City"
              error={errors.destination_city?.message}
              {...register("destination_city")}
            />
            <Input
              label="Valid Until *"
              type="date"
              error={errors.valid_until?.message}
              {...register("valid_until")}
            />
          </div>
          <Input
            label="Background Image URL"
            placeholder="https://images.unsplash.com/..."
            error={errors.image_url?.message}
            {...register("image_url")}
          />
          <div className="flex gap-3 pt-4">
            <Button variant="secondary" className="flex-1 rounded-xl h-12" onClick={() => setIsAddModalOpen(false)} type="button">
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-[#496B92] hover:bg-[#3B5470] text-white h-12 rounded-xl font-bold"
              loading={isSubmitting || createMutation.isPending}
            >
              Create Promo
            </Button>
          </div>
        </form>
      </Modal>
    </AdminLayout>
  );
};

export default AdminPromotionsPage;