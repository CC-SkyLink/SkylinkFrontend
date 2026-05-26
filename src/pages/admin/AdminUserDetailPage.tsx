import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { getUserById, toggleUserStatus, type UserDetail } from "@/api/users.api";
import AdminLayout from "./_components/AdminLayout";
import StatusBadge from "@/pages/_shared/components/ui/StatusBadge";
import DataTable, { type TableColumn } from "@/pages/_shared/components/ui/DataTable";
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

const AdminUserDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<UserDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = async () => {
    if (!id) return;
    setIsLoading(true);
    try {
      const data = await getUserById(id);
      setUser(data);
    } catch (err) {
      console.error("Failed to fetch user", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  const handleToggleStatus = async () => {
    if (!user) return;
    try {
      await toggleUserStatus(user.id, !user.is_active);
      fetchUser();
    } catch (err) {
      console.error("Failed to toggle status", err);
    }
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
      cell: (row) => <span className="text-slate-700 font-medium">{row.origin} → {row.destination}</span>,
    },
    {
      key: "flight",
      header: "FLIGHT",
      cell: (row) => <span className="text-slate-600">{row.flight_number}</span>,
    },
    {
      key: "date",
      header: "DATE",
      cell: (row) => <span className="text-slate-500 whitespace-nowrap">{row.date}</span>,
    },
    {
      key: "amount",
      header: "AMOUNT",
      cell: (row) => <span className="font-bold text-slate-900">{row.amount}</span>,
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

  // Mock data for UI demonstration until real history API is ready
  const mockBookings = [
    { id: "1", pnr: "AB1234", origin: "MNL", destination: "CEB", flight_number: "PR 2191", date: "2026-04-12", amount: "₱3,150", status: "confirmed" },
    { id: "2", pnr: "CD5678", origin: "CEB", destination: "MNL", flight_number: "PR 2192", date: "2026-04-12", amount: "₱3,150", status: "confirmed" },
    { id: "3", pnr: "EF9012", origin: "MNL", destination: "DVO", flight_number: "5J 800", date: "2026-04-12", amount: "₱2,250", status: "boarded" },
    { id: "4", pnr: "GH3456", origin: "MNL", destination: "KUL", flight_number: "2P 301", date: "2026-04-12", amount: "₱6,200", status: "confirmed" },
  ];

  const mockTimeline = [
    { icon: LogIn, title: "Successful login", time: "2026-04-11 09:22", color: "bg-blue-50 text-blue-600" },
    { icon: UserCog, title: "Profile updated (phone number changed)", time: "2026-04-08 14:35", color: "bg-sky-50 text-sky-600" },
    { icon: Ticket, title: "Booking AB1234 created", time: "2026-04-03 11:10", color: "bg-emerald-50 text-emerald-600" },
    { icon: History, title: "Failed login attempt", time: "2026-03-28 22:45", color: "bg-rose-50 text-rose-600" },
  ];

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex min-h-[400px] items-center justify-center">
          <div className="animate-spin size-10 border-4 border-[#496B92] border-t-transparent rounded-full" />
        </div>
      </AdminLayout>
    );
  }

  if (!user) {
    return (
      <AdminLayout>
        <div className="text-center py-20">
          <p className="text-slate-500">User not found.</p>
          <button onClick={() => navigate(ROUTES.ADMIN_USERS)} className="text-blue-600 font-bold mt-4">Back to Users</button>
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
            <button onClick={() => navigate(ROUTES.ADMIN_USERS)} className="hover:text-[#496B92] transition-colors">Users</button>
            <ChevronLeft size={14} className="rotate-180" />
            <span className="text-[#496B92]">{user.first_name} {user.last_name}</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">User Detail</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <section className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden p-8 text-center">
              <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-[#496B92] text-white font-bold text-2xl mb-4">
                {user.first_name[0]}{user.last_name[0]}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{user.first_name} {user.last_name}</h3>
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
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Email</p>
                    <p className="text-sm font-medium text-slate-700 mt-1">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="size-4 text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Phone</p>
                    <p className="text-sm font-medium text-slate-700 mt-1">{user.phone_number || "—"}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="size-4 text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Registered</p>
                    <p className="text-sm font-medium text-slate-700 mt-1">{new Date(user.created_at).toISOString().split('T')[0]}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Ticket className="size-4 text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Total Bookings</p>
                    <p className="text-sm font-medium text-slate-700 mt-1">{user.total_bookings || 0}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <UserCircle className="size-4 text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Role</p>
                    <p className="text-sm font-medium text-slate-700 mt-1">{user.role_id === 1 ? "Administrator" : "Passenger"}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Admin Actions Card */}
            <section className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden p-6">
              <h4 className="text-sm font-bold text-slate-900 mb-4">Admin Actions</h4>
              <div className="space-y-3">
                <button 
                  onClick={handleToggleStatus}
                  className={cn(
                    "w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold border transition-all",
                    user.is_active 
                      ? "text-rose-600 border-rose-100 hover:bg-rose-50" 
                      : "text-emerald-600 border-emerald-100 hover:bg-emerald-50"
                  )}
                >
                  {user.is_active ? <Ban size={18} /> : <CheckCircle size={18} />}
                  {user.is_active ? "Suspend Account" : "Reactivate Account"}
                </button>
                <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold border border-blue-100 text-blue-600 hover:bg-blue-50 transition-all">
                  <Key size={18} />
                  Reset Password
                </button>
              </div>
            </section>

            {/* Activity Timeline */}
            <section className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden p-6">
              <h4 className="text-sm font-bold text-slate-900 mb-6">Activity Timeline</h4>
              <div className="space-y-6">
                {mockTimeline.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className={cn("size-10 shrink-0 rounded-xl flex items-center justify-center shadow-sm", item.color)}>
                      <item.icon size={20} />
                    </div>
                    <div className="min-w-0 text-left">
                      <p className="text-[13px] font-bold text-slate-700 leading-snug">{item.title}</p>
                      <p className="text-[11px] font-medium text-slate-400 mt-0.5">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Booking History */}
          <div className="lg:col-span-2">
            <section className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden min-h-full">
              <div className="px-8 py-6 border-b border-slate-50 bg-slate-50/30 flex justify-between items-center">
                <h3 className="text-lg font-bold text-slate-900">Booking History</h3>
              </div>
              <div className="p-2">
                <DataTable
                  columns={bookingColumns}
                  rows={mockBookings}
                  rowKey={(row) => row.pnr}
                  emptyState={
                    <div className="py-20 text-center">
                      <p className="text-slate-500 font-medium">No bookings found for this user.</p>
                    </div>
                  }
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminUserDetailPage;
