import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Loader2, RotateCw } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { rescheduleBooking } from "@/api/bookings.api";
import type { Flight } from "@/types";

type ReschedulePickState = {
  bookingId: string;
  currentFlightId: string;
  newFlight: Flight;
};

const RescheduleSummaryPage = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as ReschedulePickState | null;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!state?.newFlight || !id) {
    return <Navigate to={ROUTES.MANAGE} replace />;
  }

  const { newFlight } = state;
  const backHref = ROUTES.RESCHEDULE_PICK.replace(":id", id);
  const detailHref = ROUTES.MANAGE_BOOKING_DETAIL.replace(":id", id);

  const dep = new Date(newFlight.departureTime);
  const arr = new Date(newFlight.arrivalTime);
  const diffMs = arr.getTime() - dep.getTime();
  const hours = Math.floor(diffMs / 3600000);
  const mins = Math.round((diffMs % 3600000) / 60000);

  const handleConfirm = async () => {
    setIsSubmitting(true);
    setError(null);
    try {
      await rescheduleBooking(id, {
        newFlightId: newFlight.id,
        reason: "Passenger requested reschedule",
      });
      navigate(detailHref, { replace: true });
    } catch (err: any) {
      setError(
        err?.response?.data?.detail ?? "Failed to reschedule. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-[calc(100vh-160px)] bg-[#F3F5F7]">
      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link
              to={backHref}
              className="inline-flex items-center gap-1 font-semibold text-[#5D7FA7] hover:text-[#4E6B8D]"
            >
              <ArrowLeft size={16} />
              Back
            </Link>
            <span>/</span>
            <span className="font-medium text-slate-400">Confirm Reschedule</span>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 py-8 space-y-6">
        {/* Title */}
        <div>
          <h1 className="text-xl font-bold text-slate-900">Confirm Reschedule</h1>
          <p className="mt-1 text-sm text-slate-500">
            Review your new flight before confirming the change.
          </p>
        </div>

        {/* Comparison */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto_1fr]">
          {/* Current flight placeholder */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Current Flight</p>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-slate-500">
                SK
              </div>
              <div>
                <p className="text-sm font-bold text-slate-700">Your existing flight</p>
                <p className="text-xs text-slate-400">Will be replaced</p>
              </div>
            </div>
            <div className="rounded-xl bg-slate-50 px-4 py-3 text-xs text-slate-500 text-center">
              This flight will be cancelled
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5D7FA7] text-white shadow-md">
              <ArrowRight size={16} />
            </div>
          </div>

          {/* New flight */}
          <div className="rounded-2xl border-2 border-[#5D7FA7] bg-white p-5 shadow-sm space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#5D7FA7]">New Flight</p>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#5D7FA7] text-xs font-bold text-white">
                SK
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">{newFlight.airline ?? "SkyLink"}</p>
                <p className="text-xs text-slate-500">{newFlight.flightNumber}</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm font-bold text-slate-900">
              <div className="text-center">
                <p className="text-lg">{dep.toISOString().slice(11, 16)}</p>
                <p className="text-xs font-normal text-slate-400">{newFlight.origin}</p>
              </div>
              <div className="flex flex-col items-center text-[11px] text-slate-400 font-normal">
                <span>{hours}h {String(mins).padStart(2, "0")}m</span>
                <span className="text-emerald-600 font-semibold">Non-stop</span>
              </div>
              <div className="text-center">
                <p className="text-lg">{arr.toISOString().slice(11, 16)}</p>
                <p className="text-xs font-normal text-slate-400">{newFlight.destination}</p>
              </div>
            </div>
            <div className="border-t border-slate-100 pt-3 flex items-center justify-between text-xs text-slate-500">
              <span>{dep.toLocaleDateString("en-PH", { month: "short", day: "numeric", year: "numeric" })}</span>
              <span className="font-bold text-[#5D7FA7]">
                ₱{Math.round(newFlight.price).toLocaleString("en-US")}
              </span>
            </div>
          </div>
        </div>

        {/* Notice */}
        <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-700 font-medium">
          By confirming, your current booking will be updated to the new flight. Seat availability is not guaranteed until confirmed.
        </div>

        {/* Error */}
        {error && (
          <p className="text-xs font-semibold text-rose-500">{error}</p>
        )}

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to={backHref}
            className="flex-1 rounded-lg border border-slate-200 bg-white px-4 py-3 text-center text-sm font-bold text-slate-600 transition hover:border-slate-300"
          >
            Go Back
          </Link>
          <button
            onClick={handleConfirm}
            disabled={isSubmitting}
            className="flex-1 rounded-lg bg-[#5D7FA7] px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-[#4E6B8D] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting && <Loader2 size={15} className="animate-spin" />}
            <RotateCw size={15} />
            {isSubmitting ? "Confirming..." : "Confirm Reschedule"}
          </button>
        </div>
      </section>
    </main>
  );
};

export default RescheduleSummaryPage;