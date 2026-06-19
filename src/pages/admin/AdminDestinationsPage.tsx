import { useMemo, useState } from "react";
import AdminLayout from "./_components/AdminLayout";
import DataTable, { type TableColumn } from "@/pages/_shared/components/ui/DataTable";
import TableSkeleton from "@/pages/_shared/components/ui/TableSkeleton";
import TableEmptyState from "@/pages/_shared/components/ui/TableEmptyState";
import Button from "@/pages/_shared/components/ui/Button";
import Modal from "@/pages/_shared/components/ui/Modal";
import Select from "@/pages/_shared/components/ui/Select";
import { cn } from "@/utils/cn";
import { Search, Plus, Edit2, Trash2, MapPin, Plane, Tag } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getAirports, createAirport, updateAirport, deleteAirport,
  getAircraft, createAircraft, updateAircraft, deleteAircraft,
  getSeatClasses, createSeatClass, updateSeatClass, deleteSeatClass,
} from "@/api/destinations.api";
import type { Airport, Aircraft, SeatClass, SeatConfiguration } from "@/types/destinations.types";

type Tab = "airports" | "aircraft" | "seat-classes";

const COUNTRY_CITIES_MAP: Record<string, string[]> = {
  "Philippines": ["Manila", "Cebu", "Davao", "Iloilo", "Kalibo", "Puerto Princesa", "Bacolod", "Cagayan de Oro"],
  "Singapore": ["Singapore"],
  "Hong Kong": ["Hong Kong"],
  "Japan": ["Tokyo", "Osaka", "Kyoto", "Fukuoka", "Sapporo"],
  "South Korea": ["Seoul", "Busan", "Jeju", "Incheon"],
  "Malaysia": ["Kuala Lumpur", "Penang", "Kota Kinabalu", "Langkawi"],
  "Thailand": ["Bangkok", "Phuket", "Chiang Mai", "Krabi"],
  "United States": ["New York", "Los Angeles", "San Francisco", "Chicago", "Miami"],
  "Australia": ["Sydney", "Melbourne", "Brisbane", "Perth"],
  "United Kingdom": ["London", "Manchester", "Edinburgh"],
  "United Arab Emirates": ["Dubai", "Abu Dhabi"],
};

const COUNTRY_TIMEZONE_MAP: Record<string, string> = {
  "Philippines": "Asia/Manila",
  "Singapore": "Asia/Singapore",
  "Hong Kong": "Asia/Hong_Kong",
  "Japan": "Asia/Tokyo",
  "South Korea": "Asia/Seoul",
  "Malaysia": "Asia/Kuala_Lumpur",
  "Thailand": "Asia/Bangkok",
  "United States": "America/New_York",
  "Australia": "Australia/Sydney",
  "United Kingdom": "Europe/London",
  "United Arab Emirates": "Asia/Dubai",
};


const AdminDestinationsPage = () => {
  const queryClient = useQueryClient();
  const [activeTab, setActiveTab] = useState<Tab>("airports");
  const [searchQuery, setSearchQuery] = useState("");
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Airport | Aircraft | SeatClass | null>(null);
  const [form, setForm] = useState<Record<string, string | number>>({});
  const [seatConfigs, setSeatConfigs] = useState<SeatConfiguration[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Queries
  const { data: airports = [], isLoading: loadingAirports } = useQuery({
    queryKey: ["admin-airports"],
    queryFn: getAirports,
    staleTime: 5 * 60 * 1000,
  });

  const { data: aircraft = [], isLoading: loadingAircraft } = useQuery({
    queryKey: ["admin-aircraft"],
    queryFn: getAircraft,
    staleTime: 5 * 60 * 1000,
  });

  const { data: seatClasses = [], isLoading: loadingSeatClasses } = useQuery({
    queryKey: ["admin-seat-classes"],
    queryFn: getSeatClasses,
    staleTime: 5 * 60 * 1000,
  });

  const isLoading = loadingAirports || loadingAircraft || loadingSeatClasses;

  // Mutations
  const invalidate = () => {
    queryClient.invalidateQueries({ queryKey: ["admin-airports"] });
    queryClient.invalidateQueries({ queryKey: ["admin-aircraft"] });
    queryClient.invalidateQueries({ queryKey: ["admin-seat-classes"] });
  };

  const addMutation = useMutation({
    mutationFn: async () => {
      if (activeTab === "airports") return createAirport(form as any);
      if (activeTab === "aircraft") {
        if (!form.model || !form.registration) throw new Error("Please fill in Model and Registration Number");
        return createAircraft({
          model: String(form.model),
          registration: String(form.registration),
          seat_configurations: seatConfigs.map(c => ({
            seat_class_id: Number(c.seat_class_id),
            quantity: Number(c.quantity),
          })),
        });
      }
      return createSeatClass(form as any);
    },
    onSuccess: () => { invalidate(); setAddModalOpen(false); },
    onError: (err: any) => {
      const detail = err.details?.detail;
      const msg = Array.isArray(detail)
        ? detail.map((d: any) => `${d.loc.join(".")}: ${d.msg}`).join(" | ")
        : typeof detail === "string" ? detail : (err.message || "Failed to add item");
      alert(`Error: ${msg}`);
    },
  });

  const editMutation = useMutation({
    mutationFn: async () => {
      if (!selectedItem) return;
      if (activeTab === "airports") return updateAirport(selectedItem.id, form as any);
      if (activeTab === "aircraft") return updateAircraft(selectedItem.id, { model: String(form.model), registration: String(form.registration) });
      return updateSeatClass(selectedItem.id, form as any);
    },
    onSuccess: () => { invalidate(); setEditModalOpen(false); },
    onError: (err) => console.error(err),
  });

  const deleteMutation = useMutation({
    mutationFn: async () => {
      if (!selectedItem) return;
      if (activeTab === "airports") return deleteAirport(selectedItem.id);
      if (activeTab === "aircraft") return deleteAircraft(selectedItem.id);
      return deleteSeatClass(selectedItem.id);
    },
    onSuccess: () => { invalidate(); setDeleteModalOpen(false); },
    onError: (err) => console.error(err),
  });

  // Modal openers
  const openAdd = () => {
    setForm({});
    setErrors({});
    setSeatConfigs([{ seat_class_id: seatClasses[0]?.id || 1, quantity: 150 }]);
    setAddModalOpen(true);
  };
  
  const openEdit = (item: Airport | Aircraft | SeatClass) => {
    setSelectedItem(item);
    setForm(item as any);
    setErrors({});
    setEditModalOpen(true);
  };
  
  const openDelete = (item: Airport | Aircraft | SeatClass) => {
    setSelectedItem(item);
    setDeleteModalOpen(true);
  };

  // Field helper
  const field = (key: string, label: string, type = "text", disabled = false) => (
    <div className="space-y-1.5">
      <label className="text-[13px] font-bold text-slate-500 uppercase tracking-widest ml-1">{label}</label>
      <input
        type={type}
        value={form[key] ?? ""}
        disabled={disabled}
        onChange={(e) => {
          let val = e.target.value;
          if (key === "iata_code") {
            val = val.replace(/[^A-Za-z]/g, "").toUpperCase();
          } else if (key === "registration") {
            val = val.replace(/[^A-Za-z0-9-]/g, "").toUpperCase();
          }
          setForm((f) => ({ ...f, [key]: val }));
          if (errors[key]) {
            setErrors((errs) => {
              const next = { ...errs };
              delete next[key];
              return next;
            });
          }
        }}
        maxLength={
          key === "iata_code" ? 3 :
          key === "name" ? 100 :
          key === "image_url" ? 255 :
          key === "best_time" ? 100 :
          key === "registration" ? 20 :
          key === "model" ? 50 :
          undefined
        }
        className={cn(
          "w-full h-12 rounded-xl border px-4 text-sm outline-none transition-all focus:ring-2",
          disabled
            ? "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed select-none"
            : "bg-slate-50 border-slate-200 focus:ring-[#496B92]/10 focus:border-[#496B92]/20",
          errors[key]
            ? "border-rose-400 focus:ring-rose-100 focus:border-rose-400 animate-shake"
            : ""
        )}
      />
      {errors[key] && <p className="text-xs text-rose-500 mt-1 ml-1">{errors[key]}</p>}
    </div>
  );

  // Validation functions
  const validateAirportForm = (isEdit: boolean = false) => {
    const newErrors: Record<string, string> = {};

    if (!isEdit) {
      const iata = String(form.iata_code || "").trim();
      if (!iata) {
        newErrors.iata_code = "IATA Code is required";
      } else if (!/^[A-Z]{3}$/.test(iata)) {
        newErrors.iata_code = "IATA Code must be exactly 3 uppercase letters";
      }
    }

    const name = String(form.name || "").trim();
    if (!name) {
      newErrors.name = "Airport Name is required";
    } else if (name.length < 3) {
      newErrors.name = "Airport Name must be at least 3 characters";
    }

    if (!form.country) {
      newErrors.country = "Country is required";
    }

    if (!form.city) {
      newErrors.city = "City is required";
    }

    const timezone = String(form.timezone || "").trim();
    if (!timezone) {
      newErrors.timezone = "Timezone is required";
    } else if (!/^[A-Za-z0-9_-]+\/[A-Za-z0-9_+-]+$/.test(timezone)) {
      newErrors.timezone = "Timezone must be in 'Area/Location' format (e.g., Asia/Manila)";
    }

    const imageUrl = String(form.image_url || "").trim();
    if (imageUrl && !/^https?:\/\/.+/.test(imageUrl)) {
      newErrors.image_url = "Image URL must start with http:// or https://";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Country and city options
  const countryOptions = useMemo(() => {
    return Object.keys(COUNTRY_CITIES_MAP).map((c) => ({ value: c, label: c }));
  }, []);

  const cityOptions = useMemo(() => {
    const selectedCountry = form.country as string;
    if (!selectedCountry) return [];
    return (COUNTRY_CITIES_MAP[selectedCountry] || []).map((c) => ({ value: c, label: c }));
  }, [form.country]);

  const handleCountryChange = (selectedCountry: string) => {
    const cities = COUNTRY_CITIES_MAP[selectedCountry] || [];
    const defaultCity = cities.length === 1 ? cities[0] : "";
    const defaultTimezone = COUNTRY_TIMEZONE_MAP[selectedCountry] || "";

    setForm((f) => ({
      ...f,
      country: selectedCountry,
      city: defaultCity,
      ...(defaultTimezone ? { timezone: defaultTimezone } : {}),
    }));

    setErrors((errs) => {
      const next = { ...errs };
      delete next.country;
      if (defaultCity) delete next.city;
      if (defaultTimezone) delete next.timezone;
      return next;
    });
  };

  // Columns
  const airportColumns: TableColumn<Airport>[] = [
    { key: "iata_code", header: "IATA", cell: (r) => <span className="font-bold text-[#496B92]">{r.iata_code}</span> },
    { key: "name", header: "AIRPORT NAME", cell: (r) => <span className="font-medium text-slate-900">{r.name}</span> },
    { key: "city", header: "CITY", cell: (r) => <span className="text-slate-600">{r.city}</span> },
    { key: "country", header: "COUNTRY", cell: (r) => <span className="text-slate-600">{r.country}</span> },
    { key: "timezone", header: "TIMEZONE", cell: (r) => <span className="text-slate-500 text-xs">{r.timezone}</span> },
    {
      key: "actions", header: "ACTIONS", cell: (r) => (
        <div className="flex gap-2">
          <button onClick={() => openEdit(r)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg border border-blue-100 transition-colors"><Edit2 size={15} /></button>
          <button onClick={() => openDelete(r)} className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg border border-rose-100 transition-colors"><Trash2 size={15} /></button>
        </div>
      ),
    },
  ];

  const aircraftColumns: TableColumn<Aircraft>[] = [
    { key: "registration", header: "REG. NO.", cell: (r) => <span className="font-bold text-[#496B92]">{r.registration}</span> },
    { key: "model", header: "MODEL", cell: (r) => <span className="font-medium text-slate-900">{r.model}</span> },
    { key: "total_seats", header: "TOTAL SEATS", cell: (r) => <span className="text-slate-600">{r.total_seats}</span> },
    {
      key: "actions", header: "ACTIONS", cell: (r) => (
        <div className="flex gap-2">
          <button onClick={() => openEdit(r)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg border border-blue-100 transition-colors"><Edit2 size={15} /></button>
          <button onClick={() => openDelete(r)} className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg border border-rose-100 transition-colors"><Trash2 size={15} /></button>
        </div>
      ),
    },
  ];

  const seatClassColumns: TableColumn<SeatClass>[] = [
    { key: "id", header: "ID", cell: (r) => <span className="text-slate-400 text-xs">#{r.id}</span> },
    { key: "name", header: "CLASS NAME", cell: (r) => <span className="font-bold text-slate-900 capitalize">{r.name}</span> },
    {
      key: "actions", header: "ACTIONS", cell: (r) => (
        <div className="flex gap-2">
          <button onClick={() => openEdit(r)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg border border-blue-100 transition-colors"><Edit2 size={15} /></button>
          <button onClick={() => openDelete(r)} className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg border border-rose-100 transition-colors"><Trash2 size={15} /></button>
        </div>
      ),
    },
  ];

  // Filtered data
  const filteredAirports = useMemo(() =>
    airports.filter((a) =>
      a.iata_code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.city.toLowerCase().includes(searchQuery.toLowerCase())
    ), [airports, searchQuery]);

  const filteredAircraft = useMemo(() =>
    aircraft.filter((a) =>
      a.registration.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.model.toLowerCase().includes(searchQuery.toLowerCase())
    ), [aircraft, searchQuery]);

  const filteredSeatClasses = useMemo(() =>
    seatClasses.filter((s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase())
    ), [seatClasses, searchQuery]);

  const tabLabel = activeTab === "airports" ? "Airport" : activeTab === "aircraft" ? "Aircraft" : "Seat Class";

  const addFormFields = () => {
    if (activeTab === "airports") return (
      <div className="space-y-4">
        {field("iata_code", "IATA Code *")}
        {field("name", "Airport Name *")}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[13px] font-bold text-slate-500 uppercase tracking-widest ml-1">Country *</label>
            <Select
              value={(form.country as string) ?? ""}
              onChange={handleCountryChange}
              options={countryOptions}
              placeholder="Select Country"
              className="w-full sm:w-full"
              triggerClassName={cn(
                "w-full h-12 bg-slate-50 font-normal text-slate-800 focus:ring-2 focus:ring-[#496B92]/10 focus:border-[#496B92]/20 rounded-xl shadow-none",
                errors.country
                  ? "border-rose-400 focus:ring-rose-100 focus:border-rose-400"
                  : "border-slate-200"
              )}
            />
            {errors.country && <p className="text-xs text-rose-500 mt-1 ml-1">{errors.country}</p>}
          </div>
          <div className="space-y-1.5">
            <label className="text-[13px] font-bold text-slate-500 uppercase tracking-widest ml-1">City *</label>
            <Select
              value={(form.city as string) ?? ""}
              onChange={(selectedCity) => {
                setForm((f) => ({ ...f, city: selectedCity }));
                setErrors((errs) => {
                  const next = { ...errs };
                  delete next.city;
                  return next;
                });
              }}
              options={cityOptions}
              placeholder={form.country ? "Select City" : "Select Country first"}
              className="w-full sm:w-full"
              triggerClassName={cn(
                "w-full h-12 bg-slate-50 font-normal text-slate-800 focus:ring-2 focus:ring-[#496B92]/10 focus:border-[#496B92]/20 rounded-xl shadow-none",
                errors.city
                  ? "border-rose-400 focus:ring-rose-100 focus:border-rose-400"
                  : "border-slate-200"
              )}
            />
            {errors.city && <p className="text-xs text-rose-500 mt-1 ml-1">{errors.city}</p>}
          </div>
        </div>
        {field("timezone", "Timezone *", "text", true)}
        {field("image_url", "Image URL")}
        {field("best_time", "Best Time to Visit")}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-slate-500 uppercase tracking-widest ml-1">About</label>
          <textarea
            value={(form["about"] as string) ?? ""}
            onChange={(e) => {
              setForm((f) => ({ ...f, about: e.target.value }));
              if (errors.about) {
                setErrors((errs) => {
                  const next = { ...errs };
                  delete next.about;
                  return next;
                });
              }
            }}
            rows={3}
            className={cn(
              "w-full rounded-xl bg-slate-50 border px-4 py-3 text-sm outline-none transition-all resize-none focus:ring-2",
              errors.about
                ? "border-rose-400 focus:ring-rose-100 focus:border-rose-400"
                : "border-slate-200 focus:ring-[#496B92]/10 focus:border-[#496B92]/20"
            )}
          />
          {errors.about && <p className="text-xs text-rose-500 mt-1 ml-1">{errors.about}</p>}
        </div>
      </div>
    );
    if (activeTab === "aircraft") return (
      <div className="space-y-4">
        {field("registration", "Registration No. *")}
        {field("model", "Model *")}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <label className="text-[13px] font-bold text-slate-500 uppercase tracking-widest ml-1">Configuration</label>
            <button
              type="button"
              onClick={() => setSeatConfigs([...seatConfigs, { seat_class_id: seatClasses[0]?.id || 1, quantity: 0 }])}
              className="text-xs font-bold text-[#496B92] hover:underline"
            >
              + Add Class
            </button>
          </div>
          {seatConfigs.map((config, idx) => (
            <div key={idx} className="flex gap-2 items-end bg-slate-50 p-3 rounded-xl border border-slate-100">
              <div className="flex-1 space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Class</label>
                <select
                  value={config.seat_class_id}
                  onChange={(e) => {
                    const updated = [...seatConfigs];
                    updated[idx].seat_class_id = Number(e.target.value);
                    setSeatConfigs(updated);
                  }}
                  className="w-full h-10 px-3 bg-white border border-slate-200 rounded-lg text-sm outline-none focus:border-[#496B92] capitalize"
                >
                  {seatClasses.map(sc => (
                    <option key={sc.id} value={sc.id} className="capitalize">{sc.name}</option>
                  ))}
                </select>
              </div>
              <div className="w-24 space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Qty</label>
                <input
                  type="number"
                  min={0}
                  value={config.quantity}
                  onChange={(e) => {
                    const updated = [...seatConfigs];
                    updated[idx].quantity = Math.max(0, Math.floor(Number(e.target.value) || 0));
                    setForm((f) => ({ ...f, _configDirty: Date.now() })); // Trigger re-render/dirty check
                    setSeatConfigs(updated);
                  }}
                  className="w-full h-10 px-3 bg-white border border-slate-200 rounded-lg text-sm outline-none focus:border-[#496B92]"
                />
              </div>
              <button
                type="button"
                onClick={() => setSeatConfigs(seatConfigs.filter((_, i) => i !== idx))}
                className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
    return <div className="space-y-4">{field("name", "Class Name *")}</div>;
  };

  const editFormFields = () => {
    if (activeTab === "airports") return (
      <div className="space-y-4">
        {field("name", "Airport Name")}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[13px] font-bold text-slate-500 uppercase tracking-widest ml-1">Country *</label>
            <Select
              value={(form.country as string) ?? ""}
              onChange={handleCountryChange}
              options={countryOptions}
              placeholder="Select Country"
              className="w-full sm:w-full"
              triggerClassName={cn(
                "w-full h-12 bg-slate-50 font-normal text-slate-800 focus:ring-2 focus:ring-[#496B92]/10 focus:border-[#496B92]/20 rounded-xl shadow-none",
                errors.country
                  ? "border-rose-400 focus:ring-rose-100 focus:border-rose-400"
                  : "border-slate-200"
              )}
            />
            {errors.country && <p className="text-xs text-rose-500 mt-1 ml-1">{errors.country}</p>}
          </div>
          <div className="space-y-1.5">
            <label className="text-[13px] font-bold text-slate-500 uppercase tracking-widest ml-1">City *</label>
            <Select
              value={(form.city as string) ?? ""}
              onChange={(selectedCity) => {
                setForm((f) => ({ ...f, city: selectedCity }));
                setErrors((errs) => {
                  const next = { ...errs };
                  delete next.city;
                  return next;
                });
              }}
              options={cityOptions}
              placeholder={form.country ? "Select City" : "Select Country first"}
              className="w-full sm:w-full"
              triggerClassName={cn(
                "w-full h-12 bg-slate-50 font-normal text-slate-800 focus:ring-2 focus:ring-[#496B92]/10 focus:border-[#496B92]/20 rounded-xl shadow-none",
                errors.city
                  ? "border-rose-400 focus:ring-rose-100 focus:border-rose-400"
                  : "border-slate-200"
              )}
            />
            {errors.city && <p className="text-xs text-rose-500 mt-1 ml-1">{errors.city}</p>}
          </div>
        </div>
        {field("timezone", "Timezone", "text", true)}
        {field("image_url", "Image URL")}
        {field("best_time", "Best Time to Visit")}
        <div className="space-y-1.5">
          <label className="text-[13px] font-bold text-slate-500 uppercase tracking-widest ml-1">About</label>
          <textarea
            value={(form["about"] as string) ?? ""}
            onChange={(e) => {
              setForm((f) => ({ ...f, about: e.target.value }));
              if (errors.about) {
                setErrors((errs) => {
                  const next = { ...errs };
                  delete next.about;
                  return next;
                });
              }
            }}
            rows={3}
            className={cn(
              "w-full rounded-xl bg-slate-50 border px-4 py-3 text-sm outline-none transition-all resize-none focus:ring-2",
              errors.about
                ? "border-rose-400 focus:ring-rose-100 focus:border-rose-400"
                : "border-slate-200 focus:ring-[#496B92]/10 focus:border-[#496B92]/20"
            )}
          />
          {errors.about && <p className="text-xs text-rose-500 mt-1 ml-1">{errors.about}</p>}
        </div>
      </div>
    );
    if (activeTab === "aircraft") return (
      <div className="space-y-4">
        {field("registration", "Registration No.")}
        {field("model", "Model")}
      </div>
    );
    return <div className="space-y-4">{field("name", "Class Name")}</div>;
  };

  const tabs: { key: Tab; label: string; icon: typeof MapPin }[] = [
    { key: "airports", label: "Airports", icon: MapPin },
    { key: "aircraft", label: "Aircraft", icon: Plane },
    { key: "seat-classes", label: "Seat Classes", icon: Tag },
  ];



  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Destinations & Fleet</h2>
            <p className="text-sm font-medium text-slate-500">Manage airports, aircraft, and seat classes</p>
          </div>
          <button
            onClick={openAdd}
            className="flex items-center justify-center gap-2 bg-[#496B92] text-white px-5 py-2.5 rounded-xl font-bold hover:bg-[#3B5470] transition-all shadow-lg shadow-[#496B92]/20"
          >
            <Plus size={20} />
            Add {tabLabel}
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 p-1 bg-white rounded-xl border border-slate-100 shadow-sm w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => { setActiveTab(tab.key); setSearchQuery(""); }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === tab.key ? "bg-[#496B92] text-white shadow-sm" : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder={`Search ${tabLabel.toLowerCase()}s...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-11 w-full rounded-xl bg-slate-50 pl-10 pr-4 text-sm outline-none border border-transparent focus:border-[#496B92]/20 focus:bg-white focus:ring-2 focus:ring-[#496B92]/10 transition-all"
            />
          </div>
        </div>

        {/* Table */}
        {isLoading ? (
          <TableSkeleton columns={activeTab === "airports" ? 6 : activeTab === "aircraft" ? 4 : 3} rows={5} />
        ) : (
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden animate-fade-in">
            {activeTab === "airports" && (
              <DataTable
                columns={airportColumns}
                rows={filteredAirports}
                rowKey={(r) => String(r.id)}
                emptyState={<TableEmptyState title="No airports found" description="We couldn't find any airports matching your search query." />}
              />
            )}
            {activeTab === "aircraft" && (
              <DataTable
                columns={aircraftColumns}
                rows={filteredAircraft}
                rowKey={(r) => String(r.id)}
                emptyState={<TableEmptyState title="No aircraft found" description="We couldn't find any aircraft matching your search query." />}
              />
            )}
            {activeTab === "seat-classes" && (
              <DataTable
                columns={seatClassColumns}
                rows={filteredSeatClasses}
                rowKey={(r) => String(r.id)}
                emptyState={<TableEmptyState title="No seat classes found" description="We couldn't find any seat classes matching your search query." />}
              />
            )}
            <div className="flex items-center justify-between px-6 py-4 border-t border-slate-50 bg-slate-50/30">
              <p className="text-sm font-medium text-slate-500">
                {activeTab === "airports" && `${filteredAirports.length} airports`}
                {activeTab === "aircraft" && `${filteredAircraft.length} aircraft`}
                {activeTab === "seat-classes" && `${filteredSeatClasses.length} seat classes`}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Add Modal */}
      <Modal isOpen={addModalOpen} onClose={() => setAddModalOpen(false)} title={`Add ${tabLabel}`}>
        <div className="py-4 space-y-4">
          {addFormFields()}
          <div className="flex gap-3 pt-2">
            <Button variant="secondary" className="flex-1 rounded-xl h-12" onClick={() => setAddModalOpen(false)} type="button">Cancel</Button>
            <Button
              className="flex-1 bg-[#496B92] hover:bg-[#3B5470] text-white h-12 rounded-xl font-bold"
              onClick={() => {
                if (activeTab === "airports") {
                  if (!validateAirportForm(false)) return;
                }
                addMutation.mutate();
              }}
              loading={addMutation.isPending}
            >
              Add {tabLabel}
            </Button>
          </div>
        </div>
      </Modal>

      {/* Edit Modal */}
      <Modal isOpen={editModalOpen} onClose={() => setEditModalOpen(false)} title={`Edit ${tabLabel}`}>
        <div className="py-4 space-y-4">
          {editFormFields()}
          <div className="flex gap-3 pt-2">
            <Button variant="secondary" className="flex-1 rounded-xl h-12" onClick={() => setEditModalOpen(false)} type="button">Cancel</Button>
            <Button
              className="flex-1 bg-[#496B92] hover:bg-[#3B5470] text-white h-12 rounded-xl font-bold"
              onClick={() => {
                if (activeTab === "airports") {
                  if (!validateAirportForm(true)) return;
                }
                editMutation.mutate();
              }}
              loading={editMutation.isPending}
            >
              Save Changes
            </Button>
          </div>
        </div>
      </Modal>

      {/* Delete Modal */}
      <Modal isOpen={deleteModalOpen} onClose={() => setDeleteModalOpen(false)} title={`Delete ${tabLabel}`}>
        <div className="py-4 space-y-6">
          <p className="text-sm text-slate-600 font-medium text-center">
            Are you sure you want to delete this {tabLabel.toLowerCase()}? This cannot be undone.
          </p>
          <div className="flex gap-3 pt-2">
            <Button variant="secondary" className="flex-1 rounded-xl h-12" onClick={() => setDeleteModalOpen(false)}>Cancel</Button>
            <Button
              className="flex-1 bg-white hover:bg-rose-50 border border-rose-200 text-rose-600 h-12 rounded-xl"
              onClick={() => deleteMutation.mutate()}
              loading={deleteMutation.isPending}
            >
              Confirm Delete
            </Button>
          </div>
        </div>
      </Modal>
    </AdminLayout>
  );
};

export default AdminDestinationsPage;