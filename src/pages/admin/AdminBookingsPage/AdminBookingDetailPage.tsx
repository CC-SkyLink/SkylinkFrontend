import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Plane, User, CreditCard, AlertTriangle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import axiosClient from "@/api/axiosClient";
import { getCancellationRisk } from "@/api/reports.api";
import StatusBadge from "@/pages/_shared/components/ui/StatusBadge";
import AdminLayout from "../_components/AdminLayout";
import { cn } from "@/utils/cn";

const AdminBookingDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: booking, isLoading: bookingLoading } = useQuery({
    queryKey: ["admin-booking-detail", id, "admin"],
    queryFn: async () => {
      const res = await axiosClient.get(`/bookings/admin/${id}`);
      return res.data;
    },
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });

  const { data: risk, isLoading: riskLoading } = useQuery({
    queryKey: ["cancellation-risk", id],
    queryFn: () => getCancellationRisk(id!),
    enabled: !!id && !bookingLoading && booking?.status !== "cancelled",
    staleTime: 5 * 60 * 1000,
  });

  const riskColor =
    risk?.risk_level === "high"
      ? "bg-rose-100 text-rose-700 border-rose-200"
      : risk?.risk_level === "medium"
        ? "bg-amber-100 text-amber-700 border-amber-200"
        : risk?.risk_level === "low"
          ? "bg-emerald-100 text-emerald-700 border-emerald-200"
          : "bg-slate-100 text-slate-500 border-slate-200";

  return (
    <AdminLayout>
      <div className="space-y-6 text-left">
        {/* Back and Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors border border-slate-200"
              title="Back"
            >
              <ArrowLeft size={16} />
            </button>
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-slate-900">
                  {booking?.pnr ? `Booking: ${booking.pnr}` : "Booking Details"}
                </h2>
                {booking && <StatusBadge label={booking.status} />}
              </div>
              <p className="text-xs text-slate-500 mt-1 font-medium">ID: {id}</p>
            </div>
          </div>
        </div>

        {bookingLoading ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-pulse">
            {/* Main Content Skeleton */}
            <div className="lg:col-span-2 space-y-6">
              {/* Flight Info Card Skeleton */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                <div className="h-4 bg-slate-200 rounded w-1/4" />
                <div className="flex items-center justify-between py-2 px-4 bg-slate-50/50 rounded-xl h-20">
                  <div className="space-y-2">
                    <div className="h-6 bg-slate-200 rounded w-16" />
                    <div className="h-3 bg-slate-200 rounded w-24" />
                  </div>
                  <div className="h-2 bg-slate-200 rounded w-16" />
                  <div className="space-y-2 text-right flex flex-col items-end">
                    <div className="h-6 bg-slate-200 rounded w-16" />
                    <div className="h-3 bg-slate-200 rounded w-24" />
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                  {[1, 2, 3, 4].map((n) => (
                    <div key={n} className="space-y-2">
                      <div className="h-3 bg-slate-200 rounded w-3/4" />
                      <div className="h-4 bg-slate-200 rounded w-1/2" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Passengers Card Skeleton */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                <div className="h-4 bg-slate-200 rounded w-1/4" />
                <div className="space-y-4">
                  {[1, 2].map((n) => (
                    <div key={n} className="p-4 bg-slate-50/50 rounded-xl border border-slate-100/50 grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {[1, 2, 3, 4].map((m) => (
                        <div key={m} className="space-y-2">
                          <div className="h-3 bg-slate-200 rounded w-1/2" />
                          <div className="h-4 bg-slate-200 rounded w-3/4" />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Details Skeleton */}
            <div className="space-y-6">
              {/* Payment Details Skeleton */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                <div className="h-4 bg-slate-200 rounded w-1/3" />
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="h-4 bg-slate-200 rounded w-1/3" />
                    <div className="h-4 bg-slate-200 rounded w-1/4" />
                  </div>
                  <div className="h-px bg-slate-100" />
                  <div className="flex justify-between items-center">
                    <div className="h-3 bg-slate-200 rounded w-1/4" />
                    <div className="h-3 bg-slate-200 rounded w-1/3" />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="h-3 bg-slate-200 rounded w-1/4" />
                    <div className="h-3 bg-slate-200 rounded w-1/3" />
                  </div>
                </div>
              </div>

              {/* Cancellation Risk Skeleton */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                <div className="h-4 bg-slate-200 rounded w-1/3" />
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="h-5 bg-slate-200 rounded-full w-20" />
                    <div className="h-6 bg-slate-200 rounded w-12" />
                  </div>
                  <div className="grid grid-cols-2 gap-2 bg-slate-50/50 p-3 rounded-xl border border-slate-100/50">
                    <div className="space-y-2">
                      <div className="h-2.5 bg-slate-200 rounded w-1/2" />
                      <div className="h-3.5 bg-slate-200 rounded w-2/3" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2.5 bg-slate-200 rounded w-1/2" />
                      <div className="h-3.5 bg-slate-200 rounded w-2/3" />
                    </div>
                  </div>
                  <div className="h-10 bg-slate-100 rounded-xl w-full" />
                </div>
              </div>
            </div>
          </div>
        ) : !booking ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 shadow-sm text-slate-400">
            Booking not found.
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Flight Info Card */}
              <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-50 pb-2">
                  <Plane size={14} className="text-[#496B92]" />
                  Flight Information
                </div>
                <div className="flex items-center justify-between py-2 px-4 bg-slate-50 rounded-xl">
                  <div className="text-left">
                    <span className="text-2xl font-black text-[#496B92]">
                      {booking.flight?.origin_airport?.iata_code ?? booking.flight?.origin ?? "—"}
                    </span>
                    <p className="text-[11px] font-bold text-slate-500 uppercase mt-0.5">
                      {booking.flight?.origin_airport?.city ?? booking.flight?.origin ?? "—"}
                    </p>
                  </div>
                  <span className="text-slate-400 text-lg font-bold">→</span>
                  <div className="text-right">
                    <span className="text-2xl font-black text-[#496B92]">
                      {booking.flight?.destination_airport?.iata_code ?? booking.flight?.destination ?? "—"}
                    </span>
                    <p className="text-[11px] font-bold text-slate-500 uppercase mt-0.5">
                      {booking.flight?.destination_airport?.city ?? booking.flight?.destination ?? "—"}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 text-sm">
                  <div>
                    <p className="font-semibold text-slate-400 text-xs uppercase tracking-wider">Flight Number</p>
                    <p className="font-bold text-slate-800 mt-1">{booking.flight?.flight_number ?? "—"}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-400 text-xs uppercase tracking-wider">Departure Date</p>
                    <p className="font-bold text-slate-800 mt-1">
                      {booking.flight?.departure_time
                        ? new Date(booking.flight.departure_time).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
                        : "—"}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-400 text-xs uppercase tracking-wider">Dep. Time</p>
                    <p className="font-bold text-slate-800 mt-1">
                      {booking.flight?.departure_time
                        ? new Date(booking.flight.departure_time).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
                        : "—"}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-400 text-xs uppercase tracking-wider">Arr. Time</p>
                    <p className="font-bold text-slate-800 mt-1">
                      {booking.flight?.arrival_time
                        ? new Date(booking.flight.arrival_time).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
                        : "—"}
                    </p>
                  </div>
                </div>
              </section>

              {/* Passengers Card */}
              <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-50 pb-2">
                  <User size={14} className="text-[#496B92]" />
                  Passengers ({booking.passengers?.length || 0})
                </div>
                <div className="space-y-4">
                  {booking.passengers?.map((p: any, i: number) => (
                    <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100/50 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="font-semibold text-slate-400 text-[10px] uppercase tracking-wider">Name</p>
                        <p className="font-bold text-slate-800 mt-0.5">{p.first_name} {p.last_name}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-400 text-[10px] uppercase tracking-wider">Nationality</p>
                        <p className="font-semibold text-slate-700 mt-0.5">{p.nationality ?? "—"}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-400 text-[10px] uppercase tracking-wider">Passport</p>
                        <p className="font-semibold text-slate-700 mt-0.5">{p.passport_number ?? "—"}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-400 text-[10px] uppercase tracking-wider">Seat Allocation</p>
                        <p className="font-bold text-blue-600 mt-0.5">
                          {booking.seat_number ?? "—"} · <span className="capitalize">{booking.seat_class?.name ?? "—"}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar Details */}
            <div className="space-y-6">
              {/* Payment Details */}
              <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-50 pb-2">
                  <CreditCard size={14} className="text-[#496B92]" />
                  Billing Details
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Ticket Price</span>
                    <span className="font-bold text-slate-800">
                      ₱{Number(booking.total_price ?? booking.totalPrice ?? 0).toLocaleString("en-US")}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-50 pt-2">
                    <span>Payment Method</span>
                    <span className="font-bold text-slate-700 uppercase">
                      {booking.payment?.payment_method_type ?? "—"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Booked At</span>
                    <span className="font-bold text-slate-700">
                      {booking.booked_at
                        ? new Date(booking.booked_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
                        : booking.createdAt
                          ? new Date(booking.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
                          : "—"}
                    </span>
                  </div>
                </div>
              </section>

              {/* Cancellation Risk */}
              {booking.status !== "cancelled" && (
                <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-50 pb-2">
                    <AlertTriangle size={14} className="text-[#496B92]" />
                    Cancellation Risk
                  </div>
                  {riskLoading ? (
                    <div className="flex justify-center py-4">
                      <div className="animate-spin size-5 border-2 border-[#496B92] border-t-transparent rounded-full" />
                    </div>
                  ) : !risk || risk.risk_level === "unknown" ? (
                    <p className="text-xs text-slate-400">No risk evaluation data available.</p>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span
                          className={cn(
                            "text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border tracking-wide",
                            riskColor
                          )}
                        >
                          {risk.risk_level} risk
                        </span>
                        {risk.risk_score !== null && (
                          <span className="text-base font-black text-slate-800">
                            {risk.risk_score}%
                          </span>
                        )}
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100/50">
                        <div>
                          <p className="font-semibold text-slate-400 text-[10px] uppercase">Confidence</p>
                          <p className="font-bold text-slate-700 mt-0.5">{risk.confidence ?? "—"}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-400 text-[10px] uppercase">Lead Time</p>
                          <p className="font-bold text-slate-700 mt-0.5">{risk.lead_time_days != null ? `${risk.lead_time_days} days` : "—"}</p>
                        </div>
                      </div>
                      {risk.message && (
                        <p className="text-[11px] text-slate-500 italic bg-amber-50/50 border border-amber-100/50 p-3 rounded-xl leading-relaxed">
                          "{risk.message}"
                        </p>
                      )}
                    </div>
                  )}
                </section>
              )}
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminBookingDetailPage;
