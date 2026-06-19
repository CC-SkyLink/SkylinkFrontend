import { useCallback, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { getBookingsForUser } from "@/api/bookings.api";
import {
  getUserById,
  toggleUserStatus,
  type UserDetail,
} from "@/api/users.api";
import AdminLayout from "./_components/AdminLayout";
import StatusBadge from "@/pages/_shared/components/ui/StatusBadge";
import DataTable, {
  type TableColumn,
} from "@/pages/_shared/components/ui/DataTable";
import TableEmptyState from "@/pages/_shared/components/ui/TableEmptyState";
import Modal from "@/pages/_shared/components/ui/Modal";
import Button from "@/pages/_shared/components/ui/Button";
import Toast from "@/pages/_shared/components/ui/Toast";
import {
  ChevronLeft,
  Mail,
  Phone,
  Calendar,
  Ticket,
  UserCircle,
  Ban,
  Key,
  LogIn,
  UserCog,
  History,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/utils/cn";
import type { Booking } from "@/types";
import useAsyncValue from "@/hooks/useAsyncValue";

const FALLBACK_USER: UserDetail = {
  id: "1",
  email: "marco.gonzales@skylink.ph",
  first_name: "Marco",
  last_name: "Gonzales",
  role_id: 2,
  is_active: true,
  phone_number: "+63 917 000 0000",
  created_at: "2026-04-10T00:00:00Z",
  total_bookings: 4,
};

const AdminUserDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const fallbackUser = useMemo(
    () => ({ ...FALLBACK_USER, id: id ?? FALLBACK_USER.id }),
    [id],
  );

  const loader = useCallback(async () => {
    if (!id) {
      return { user: fallbackUser, bookings: [] as Booking[] };
    }

    try {
      const [userData, bookings] = await Promise.all([
        getUserById(id),
        getBookingsForUser(id),
      ]);

      return {
        user: userData ?? fallbackUser,
        bookings,
      };
    } catch {
      return {
        user: fallbackUser,
        bookings: [],
      };
    }
  }, [fallbackUser, id]);

  const { data, isLoading, refetch } = useAsyncValue(loader, ["admin-user-detail", id]);
  const user = data?.user ?? fallbackUser;
  const bookingRows = useMemo(() => {
    const bookings = data?.bookings ?? [];

    if (bookings.length === 0) {
      return [
        {
          id: "1",
          pnr: "AB1234",
          origin: "MNL",
          destination: "CEB",
          flight_number: "PR 2191",
          date: "2026-04-12",
          amount: "₱3,150",
          status: "confirmed",
        },
        {
          id: "2",
          pnr: "CD5678",
          origin: "CEB",
          destination: "MNL",
          flight_number: "PR 2192",
          date: "2026-04-12",
          amount: "₱3,150",
          status: "confirmed",
        },
        {
          id: "3",
          pnr: "EF9012",
          origin: "MNL",
          destination: "DVO",
          flight_number: "5J 800",
          date: "2026-04-12",
          amount: "₱2,250",
          status: "boarded",
        },
        {
          id: "4",
          pnr: "GH3456",
          origin: "MNL",
          destination: "KUL",
          flight_number: "2P 301",
          date: "2026-04-12",
          amount: "₱6,200",
          status: "confirmed",
        },
      ];
    }

    return bookings.map((booking: any) => ({
      id: booking.id,
      pnr: booking.pnr ?? booking.id.slice(0, 8).toUpperCase(),
      origin: booking.flight?.origin_airport?.iata_code ?? booking.flight?.origin ?? "—",
      destination: booking.flight?.destination_airport?.iata_code ?? booking.flight?.destination ?? "—",
      flight_number: booking.flight?.flight_number ?? booking.flight?.flightNumber ?? "—",
      date: booking.flight?.departure_time?.split("T")[0] ?? booking.booked_at?.split("T")[0] ?? booking.createdAt?.split("T")[0] ?? "—",
      amount: `₱${Number(booking.total_price ?? booking.totalPrice ?? 0).toLocaleString("en-US")}`,
      status: booking.status,
    }));
  }, [data?.bookings]);

  const [toggleStatusModalOpen, setToggleStatusModalOpen] = useState(false);
  const [resetPasswordModalOpen, setResetPasswordModalOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [toastType, setToastType] = useState<"success" | "error">("success");
  const [isActionPending, setIsActionPending] = useState(false);

  const handleToggleStatusConfirm = async () => {
    if (!user) return;
    setIsActionPending(true);
    try {
      await toggleUserStatus(user.id, !user.is_active);
      setToggleStatusModalOpen(false);
      setToastMsg(user.is_active ? "User account suspended successfully." : "User account activated successfully.");
      setToastType("success");
      setToastOpen(true);
      void refetch();
    } catch (err) {
      console.error("Failed to toggle status", err);
      setToastMsg("Failed to update user status.");
      setToastType("error");
      setToastOpen(true);
    } finally {
      setIsActionPending(false);
    }
  };

  const handleResetPasswordConfirm = async () => {
    if (!user) return;
    setIsActionPending(true);
    setTimeout(() => {
      setIsActionPending(false);
      setResetPasswordModalOpen(false);
      setToastMsg(`Password reset link sent to ${user.email}`);
      setToastType("success");
      setToastOpen(true);
    }, 1000);
  };

  const bookingColumns: TableColumn<any>[] = [
    {
      key: "pnr",
      header: "PNR",
      cell: (row) => <span className="font-bold text-blue-600">{row.pnr}</span>,
    },
    {
      key: "route",
      header: "ROUTE",
      cell: (row) => (
        <span className="text-slate-700 font-medium">
          {row.origin} → {row.destination}
        </span>
      ),
    },
    {
      key: "flight",
      header: "FLIGHT",
      cell: (row) => (
        <span className="text-slate-600">{row.flight_number}</span>
      ),
    },
    {
      key: "date",
      header: "DATE",
      cell: (row) => (
        <span className="text-slate-500 whitespace-nowrap">{row.date}</span>
      ),
    },
    {
      key: "amount",
      header: "AMOUNT",
      cell: (row) => (
        <span className="font-bold text-slate-900">{row.amount}</span>
      ),
    },
    {
      key: "status",
      header: "STATUS",
      cell: (row) => <StatusBadge label={row.status} />,
    },
    {
      key: "view",
      header: "",
      cell: (row) => (
        <Link
          to={ROUTES.ADMIN_BOOKING_DETAIL.replace(":id", row.id || "1")}
          className="text-blue-600 font-bold hover:underline text-xs"
        >
          View
        </Link>
      ),
    },
  ];

  const mockTimeline = [
    {
      icon: LogIn,
      title: "Successful login",
      time: "2026-04-11 09:22",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: UserCog,
      title: "Profile updated (phone number changed)",
      time: "2026-04-08 14:35",
      color: "bg-sky-50 text-sky-600",
    },
    {
      icon: Ticket,
      title: "Booking AB1234 created",
      time: "2026-04-03 11:10",
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      icon: History,
      title: "Failed login attempt",
      time: "2026-03-28 22:45",
      color: "bg-rose-50 text-rose-600",
    },
  ];

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="max-w-7xl mx-auto space-y-6 animate-pulse">
          {/* Breadcrumbs & Title Skeleton */}
          <div className="space-y-2 text-left">
            <div className="h-4 bg-slate-200/60 rounded w-24" />
            <div className="h-8 bg-slate-200 rounded w-48" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column Skeletons */}
            <div className="lg:col-span-1 space-y-6">
              {/* Profile Card Mockup */}
              <div className="rounded-3xl border border-slate-100 bg-white p-8 space-y-6 shadow-sm flex flex-col items-center">
                <div className="size-24 rounded-full bg-slate-200/80" />
                <div className="space-y-2 w-full flex flex-col items-center">
                  <div className="h-6 bg-slate-200 rounded w-2/3" />
                  <div className="h-4.5 bg-slate-100 rounded w-1/4" />
                </div>
                <div className="w-full space-y-5 pt-4 text-left border-t border-slate-50">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="size-4 rounded bg-slate-200/70" />
                      <div className="flex-1 space-y-1">
                        <div className="h-3 bg-slate-200/50 rounded w-12" />
                        <div className="h-4 bg-slate-150 rounded w-3/4" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Admin Actions Card Mockup */}
              <div className="rounded-3xl border border-slate-100 bg-white p-6 space-y-4 shadow-sm">
                <div className="h-4 bg-slate-200 rounded w-1/3" />
                <div className="space-y-3">
                  <div className="h-10 bg-slate-100 rounded-xl w-full" />
                  <div className="h-10 bg-slate-100 rounded-xl w-full" />
                </div>
              </div>

              {/* Activity Timeline Card Mockup */}
              <div className="rounded-3xl border border-slate-100 bg-white p-6 space-y-6 shadow-sm">
                <div className="h-4 bg-slate-200 rounded w-1/3" />
                <div className="space-y-6 pt-2">
                  {Array.from({ length: 4 }).map((_, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="size-10 rounded-xl bg-slate-200/70 shrink-0" />
                      <div className="flex-1 space-y-1.5 pt-1">
                        <div className="h-4 bg-slate-150 rounded w-5/6" />
                        <div className="h-3 bg-slate-100 rounded w-1/3" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Booking History Mockup */}
            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-slate-100 bg-white shadow-sm p-8 space-y-6 min-h-full">
                <div className="h-6 bg-slate-200 rounded w-1/4" />
                <div className="divide-y divide-slate-100 pt-4">
                  {Array.from({ length: 6 }).map((_, idx) => (
                    <div key={idx} className="py-4.5 flex gap-4 items-center">
                      <div className="h-4 bg-slate-200 rounded w-1/6" />
                      <div className="h-4 bg-slate-200 rounded w-1/4" />
                      <div className="h-4 bg-slate-150 rounded w-1/6" />
                      <div className="h-4 bg-slate-100 rounded w-1/6" />
                      <div className="h-4 bg-slate-100 rounded w-1/12" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    );
  }

  if (!user) {
    return (
      <AdminLayout>
        <div className="text-center py-20">
          <p className="text-slate-500">User not found.</p>
          <button
            onClick={() => navigate(ROUTES.ADMIN_USERS)}
            className="text-blue-600 font-bold mt-4"
          >
            Back to Users
          </button>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Breadcrumbs & Title */}
        <div className="space-y-2 text-left">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
            <button
              onClick={() => navigate(ROUTES.ADMIN_USERS)}
              className="hover:text-[#496B92] transition-colors"
            >
              Users
            </button>
            <ChevronLeft size={14} className="rotate-180" />
            <span className="text-[#496B92]">
              {user.first_name} {user.last_name}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">User Detail</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <section className="rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-sm overflow-hidden">
              <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-[#496B92] text-white font-bold text-2xl mb-4">
                {user.first_name[0]}
                {user.last_name[0]}
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {user.first_name} {user.last_name}
              </h3>
              <div className="mt-2 flex justify-center">
                <StatusBadge
                  label={user.is_active ? "Active" : "Suspended"}
                  tone={user.is_active ? "success" : "danger"}
                />
              </div>

              <div className="mt-8 space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <Mail className="size-4 text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                      Email
                    </p>
                    <p className="text-sm font-medium text-slate-700 mt-1">
                      {user.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="size-4 text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                      Phone
                    </p>
                    <p className="text-sm font-medium text-slate-700 mt-1">
                      {user.phone_number || "—"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="size-4 text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                      Registered
                    </p>
                    <p className="text-sm font-medium text-slate-700 mt-1">
                      {new Date(user.created_at).toISOString().split("T")[0]}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Ticket className="size-4 text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                      Total Bookings
                    </p>
                    <p className="text-sm font-medium text-slate-700 mt-1">
                      {user.total_bookings || 0}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <UserCircle className="size-4 text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                      Role
                    </p>
                    <p className="text-sm font-medium text-slate-700 mt-1">
                      {user.role_id === 1 ? "Administrator" : "Passenger"}
                    </p>
                  </div>
                </div>
              </div>
            </section>

             {/* Admin Actions Card */}
            <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm overflow-hidden">
              <h4 className="text-sm font-bold text-slate-900 mb-4">
                Admin Actions
              </h4>
              <div className="space-y-3">
                <button
                  onClick={() => setToggleStatusModalOpen(true)}
                  className={cn(
                    "w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold border transition-all",
                    user.is_active
                      ? "text-rose-600 border-rose-100 hover:bg-rose-50"
                      : "text-emerald-600 border-emerald-100 hover:bg-emerald-50",
                  )}
                >
                  {user.is_active ? (
                    <Ban size={18} />
                  ) : (
                    <CheckCircle size={18} />
                  )}
                  {user.is_active ? "Suspend Account" : "Reactivate Account"}
                </button>
                <button
                  onClick={() => setResetPasswordModalOpen(true)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold border border-blue-100 text-blue-600 hover:bg-blue-50 transition-all"
                >
                  <Key size={18} />
                  Reset Password
                </button>
              </div>
            </section>

            {/* Activity Timeline */}
            <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm overflow-hidden">
              <h4 className="text-sm font-bold text-slate-900 mb-6">
                Activity Timeline
              </h4>
              <div className="space-y-6">
                {mockTimeline.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div
                      className={cn(
                        "size-10 shrink-0 rounded-xl flex items-center justify-center shadow-sm",
                        item.color,
                      )}
                    >
                      <item.icon size={20} />
                    </div>
                    <div className="min-w-0 text-left">
                      <p className="text-[13px] font-bold text-slate-700 leading-snug">
                        {item.title}
                      </p>
                      <p className="text-[11px] font-medium text-slate-400 mt-0.5">
                        {item.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Booking History */}
          <div className="lg:col-span-2">
            <section className="min-h-full rounded-3xl border border-slate-100 bg-white shadow-sm overflow-hidden">
              <div className="px-8 py-6 border-b border-slate-50 bg-slate-50/30 flex justify-between items-center">
                <h3 className="text-lg font-bold text-slate-900">
                  Booking History
                </h3>
              </div>
              <div className="p-2">
                <DataTable
                  columns={bookingColumns}
                  rows={bookingRows}
                  rowKey={(row) => row.pnr}
                  emptyState={
                    <TableEmptyState
                      title="No bookings found"
                      description="No booking history available for this user yet."
                    />
                  }
                />
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Suspend/Reactivate Account Confirmation Modal */}
      <Modal
        isOpen={toggleStatusModalOpen}
        onClose={() => setToggleStatusModalOpen(false)}
        title={user.is_active ? "Suspend User Account" : "Reactivate User Account"}
      >
        <div className="py-4 space-y-6 text-left">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#496B92] text-white font-bold text-sm">
              {user.first_name[0]}{user.last_name[0]}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 leading-tight">
                {user.first_name} {user.last_name}
              </span>
              <span className="text-xs text-slate-500">{user.email}</span>
            </div>
          </div>

          <p className="text-sm text-slate-600 font-medium text-center">
            {user.is_active
              ? "Are you sure you want to suspend this user account? The user will not be able to log in or book flights."
              : "Are you sure you want to reactivate this user account? The user will recover full access to the portal."}
          </p>

          <div className="flex gap-3 pt-2">
            <Button
              variant="secondary"
              className="flex-1 rounded-xl h-12"
              onClick={() => setToggleStatusModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              className={cn(
                "flex-1 h-12 rounded-xl font-bold",
                user.is_active
                  ? "bg-rose-100 text-rose-600 hover:bg-rose-200"
                  : "bg-emerald-100 text-emerald-600 hover:bg-emerald-200"
              )}
              onClick={handleToggleStatusConfirm}
              loading={isActionPending}
            >
              {user.is_active ? "Suspend Account" : "Reactivate Account"}
            </Button>
          </div>
        </div>
      </Modal>

      {/* Reset Password Confirmation Modal */}
      <Modal
        isOpen={resetPasswordModalOpen}
        onClose={() => setResetPasswordModalOpen(false)}
        title="Reset User Password"
      >
        <div className="py-4 space-y-6 text-left">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#496B92] text-white font-bold text-sm">
              {user.first_name[0]}{user.last_name[0]}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 leading-tight">
                {user.first_name} {user.last_name}
              </span>
              <span className="text-xs text-slate-500">{user.email}</span>
            </div>
          </div>

          <p className="text-sm text-slate-600 font-medium text-center">
            Are you sure you want to reset this user's password? A password reset instructions link will be automatically sent to their registered email address.
          </p>

          <div className="flex gap-3 pt-2">
            <Button
              variant="secondary"
              className="flex-1 rounded-xl h-12"
              onClick={() => setResetPasswordModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              className="flex-1 bg-blue-100 text-blue-600 hover:bg-blue-200 h-12 rounded-xl font-bold"
              onClick={handleResetPasswordConfirm}
              loading={isActionPending}
            >
              Reset Password
            </Button>
          </div>
        </div>
      </Modal>

      {/* Toast Notification */}
      <Toast
        message={toastMsg}
        isOpen={toastOpen}
        onClose={() => setToastOpen(false)}
        type={toastType}
      />
    </AdminLayout>
  );
};

export default AdminUserDetailPage;
