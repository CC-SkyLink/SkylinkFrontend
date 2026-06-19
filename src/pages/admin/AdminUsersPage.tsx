import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ROUTES } from "@/constants/routes";
import { getUsers, toggleUserStatus, type UserListItem } from "@/api/users.api";
import AdminLayout from "./_components/AdminLayout";
import DataTable, { type TableColumn } from "@/pages/_shared/components/ui/DataTable";
import TableSkeleton from "@/pages/_shared/components/ui/TableSkeleton";
import TableEmptyState from "@/pages/_shared/components/ui/TableEmptyState";
import StatusBadge from "@/pages/_shared/components/ui/StatusBadge";
import Modal from "@/pages/_shared/components/ui/Modal";
import Button from "@/pages/_shared/components/ui/Button";
import { Search, Eye, Ban, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/utils/cn";

const AdminUsersPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState("");
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [userToToggle, setUserToToggle] = useState<UserListItem | null>(null);

  // Query
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["admin-users"],
    queryFn: getUsers,
    staleTime: 5 * 60 * 1000,
  });

  // Mutation
  const toggleMutation = useMutation({
    mutationFn: ({ id, is_active }: { id: string; is_active: boolean }) =>
      toggleUserStatus(id, is_active),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["admin-users"] });
    },
    onError: (err) => console.error("Failed to toggle status", err),
  });

  const handleToggleStatusClick = (user: UserListItem) => {
    setUserToToggle(user);
    setConfirmModalOpen(true);
  };

  const handleToggleStatusConfirm = () => {
    if (!userToToggle) return;
    toggleMutation.mutate(
      { id: userToToggle.id, is_active: !userToToggle.is_active },
      {
        onSuccess: () => {
          setConfirmModalOpen(false);
          setUserToToggle(null);
        },
      }
    );
  };

  const filteredUsers = useMemo(() =>
    users.filter((user) => {
      if (user.role_id === 1) return false;
      const full_name = `${user.first_name} ${user.last_name}`.toLowerCase();
      const query = searchQuery.toLowerCase();
      return (
        full_name.includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.id.toLowerCase().includes(query)
      );
    }), [users, searchQuery]);

  const columns: TableColumn<UserListItem>[] = [
    {
      key: "id",
      header: "ID",
      cell: (row) => <span className="text-slate-400 font-medium text-xs uppercase">U{row.id.slice(0, 4)}</span>,
    },
    {
      key: "name",
      header: "FULL NAME",
      cell: (row) => (
        <div className="flex items-center gap-3">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#496B92]/10 text-[#496B92] font-bold text-xs">
            {row.first_name[0]}{row.last_name[0]}
          </div>
          <span className="font-bold text-slate-900">{row.first_name} {row.last_name}</span>
        </div>
      ),
    },
    {
      key: "email",
      header: "EMAIL",
      cell: (row) => <span className="text-slate-600 font-medium">{row.email}</span>,
    },
    {
      key: "registered",
      header: "REGISTERED",
      cell: (row) => <span className="text-slate-500">{new Date(row.created_at).toISOString().split("T")[0]}</span>,
    },
    {
      key: "bookings",
      header: "BOOKINGS",
      cell: (row) => <span className="text-slate-700 font-bold ml-4">{row.bookings_count || 0}</span>,
    },
    {
      key: "status",
      header: "STATUS",
      cell: (row) => (
        <StatusBadge
          label={row.is_active ? "Active" : "Suspended"}
          tone={row.is_active ? "success" : "danger"}
        />
      ),
    },
    {
      key: "actions",
      header: "ACTIONS",
      cell: (row) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(ROUTES.ADMIN_USER_PROFILE.replace(":id", row.id))}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-blue-100"
            title="View Detail"
          >
            <Eye size={16} />
          </button>
          <button
            onClick={() => handleToggleStatusClick(row)}
            disabled={toggleMutation.isPending}
            className={cn(
              "p-2 rounded-lg transition-colors border disabled:opacity-50",
              row.is_active
                ? "text-rose-600 hover:bg-rose-50 border-rose-100"
                : "text-emerald-600 hover:bg-emerald-50 border-emerald-100"
            )}
            title={row.is_active ? "Suspend User" : "Activate User"}
          >
            {row.is_active ? <Ban size={16} /> : <CheckCircle size={16} />}
          </button>
        </div>
      ),
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Users</h2>
          <p className="text-sm font-medium text-slate-500">{filteredUsers.length} users found</p>
        </div>

        <div className="relative max-w-2xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-11 w-full rounded-xl bg-white border border-slate-100 pl-10 pr-4 text-sm outline-none focus:border-[#496B92]/20 focus:ring-2 focus:ring-[#496B92]/10 transition-all shadow-sm"
          />
        </div>

        {isLoading ? (
          <TableSkeleton columns={7} rows={5} />
        ) : (
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden animate-fade-in">
            <DataTable
              columns={columns}
              rows={filteredUsers}
              rowKey={(row) => row.id}
              emptyState={
                <TableEmptyState
                  title="No users found"
                  description="We couldn't find any users matching your search query or filters."
                />
              }
            />
            <div className="flex items-center justify-between px-6 py-4 border-t border-slate-50 bg-slate-50/30">
              <p className="text-sm font-medium text-slate-500">
                Showing 1-{filteredUsers.length} of {filteredUsers.length}
              </p>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg border border-slate-200 text-slate-400 hover:bg-white transition-colors" disabled>
                  <ChevronLeft size={18} />
                </button>
                <button className="size-9 rounded-lg bg-[#496B92] text-white font-bold text-sm">1</button>
                <button className="p-2 rounded-lg border border-slate-200 text-slate-400 hover:bg-white transition-colors" disabled>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Status Toggle Confirmation Modal */}
      <Modal
        isOpen={confirmModalOpen}
        onClose={() => {
          setConfirmModalOpen(false);
          setUserToToggle(null);
        }}
        title={userToToggle?.is_active ? "Suspend User Account" : "Activate User Account"}
      >
        <div className="py-4 space-y-6 text-left">
          {userToToggle && (
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#496B92]/10 text-[#496B92] font-bold text-sm">
                {userToToggle.first_name[0]}{userToToggle.last_name[0]}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-900 leading-tight">
                  {userToToggle.first_name} {userToToggle.last_name}
                </span>
                <span className="text-xs text-slate-500">{userToToggle.email}</span>
              </div>
            </div>
          )}

          <p className="text-sm text-slate-600 font-medium text-center">
            {userToToggle?.is_active
              ? "Are you sure you want to suspend this user account? The user will not be able to log in or book flights."
              : "Are you sure you want to reactivate this user account? The user will recover full access to the portal."}
          </p>

          <div className="flex gap-3 pt-2">
            <Button
              variant="secondary"
              className="flex-1 rounded-xl h-12"
              onClick={() => {
                setConfirmModalOpen(false);
                setUserToToggle(null);
              }}
            >
              Cancel
            </Button>
            <Button
              className={cn(
                "flex-1 h-12 rounded-xl font-bold",
                userToToggle?.is_active
                  ? "bg-rose-100 text-rose-600 hover:bg-rose-200"
                  : "bg-emerald-100 text-emerald-600 hover:bg-emerald-200"
              )}
              onClick={handleToggleStatusConfirm}
              loading={toggleMutation.isPending}
            >
              {userToToggle?.is_active ? "Suspend Account" : "Activate Account"}
            </Button>
          </div>
        </div>
      </Modal>
    </AdminLayout>
  );
};

export default AdminUsersPage;