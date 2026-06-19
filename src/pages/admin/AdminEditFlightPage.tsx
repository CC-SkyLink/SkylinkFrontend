import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getFlightById, updateFlight } from "@/api/flights.api";
import { ROUTES } from "@/constants/routes";
import AdminLayout from "./_components/AdminLayout";
import Input from "@/pages/_shared/components/ui/Input";
import Button from "@/pages/_shared/components/ui/Button";
import Select from "@/pages/_shared/components/ui/Select";
import { ChevronLeft, Save } from "lucide-react";
import { type FlightFormValues } from "@/validation/flight.schemas";
import type { Flight } from "@/types";
import { cn } from "@/utils/cn";
import { z } from "zod";

type EditFlightFormValues = FlightFormValues & {
  cabinClass?: string;
  totalSeats?: number;
  seatsAvailable?: number;
  price?: number;
};

const aircraftTypeOptions = [
  { value: "economy", label: "Economy Only" },
  { value: "business", label: "Business & Economy" },
  { value: "first", label: "First, Business & Economy" },
];

const statusOptions = [
  { value: "scheduled", label: "Scheduled" },
  { value: "boarding", label: "Boarding" },
  { value: "on_time", label: "On Time" },
  { value: "delayed", label: "Delayed" },
  { value: "cancelled", label: "Cancelled" },
  { value: "landed", label: "Landed" },
];

const editFlightSchema = z.object({
  flightNumber: z
    .string()
    .trim()
    .min(1, "Flight number is required")
    .max(10, "Flight number must be at most 10 characters")
    .regex(/^[A-Za-z0-9\s\-]+$/, "Only letters, numbers, spaces, and dashes are allowed"),
  airline: z
    .string()
    .trim()
    .min(1, "Airline is required")
    .max(100, "Airline must be at most 100 characters")
    .regex(/^[A-Za-z\s\-().]+$/, "Only letters and standard text characters are allowed"),
  origin: z
    .string()
    .trim()
    .length(3, "Origin airport code must be exactly 3 characters")
    .regex(/^[A-Za-z]+$/, "Only letters are allowed"),
  destination: z
    .string()
    .trim()
    .length(3, "Destination airport code must be exactly 3 characters")
    .regex(/^[A-Za-z]+$/, "Only letters are allowed"),
  departureTime: z.string().min(1, "Departure time is required"),
  arrivalTime: z.string().min(1, "Arrival time is required"),
  cabinClass: z.enum(["economy", "business", "first"]),
  totalSeats: z.coerce
    .number({ invalid_type_error: "Total seats must be a number" })
    .int("Total seats must be a whole number")
    .min(1, "At least 1 seat is required")
    .max(1000, "Maximum 1000 seats allowed"),
  seatsAvailable: z.coerce
    .number({ invalid_type_error: "Seats available must be a number" })
    .int("Seats available must be a whole number")
    .min(0, "Seats available cannot be negative"),
  price: z.coerce
    .number({ invalid_type_error: "Economy Fare must be a number" })
    .min(0, "Economy Fare cannot be negative"),
  status: z.enum(["scheduled", "boarding", "on_time", "delayed", "cancelled", "landed"]),
  aircraftId: z.number().optional(),
  seat_pricing: z.array(z.any()).optional(),
}).refine((data) => data.seatsAvailable <= data.totalSeats, {
  message: "Available seats cannot exceed total seats",
  path: ["seatsAvailable"],
}).refine((data) => data.origin.trim().toLowerCase() !== data.destination.trim().toLowerCase(), {
  message: "Origin and destination airports must be different",
  path: ["destination"],
});

const AdminEditFlightPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors, isSubmitting },
  } = useForm<EditFlightFormValues>({
    resolver: zodResolver(editFlightSchema) as any,
  });

  const selectedCabinClass = watch("cabinClass");
  const showBusinessFare = selectedCabinClass === "business" || selectedCabinClass === "first";

  const { data: flight, isLoading } = useQuery({
    queryKey: ["flight", id],
    queryFn: async () => {
      if (!id) return null;
      const flight = await getFlightById(id);
      if (!flight) {
        setServerError("Flight not found.");
        return null;
      }
      return flight;
    },
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    if (flight) {
      const departureTime = flight.departureTime ? new Date(flight.departureTime).toISOString().slice(0, 16) : "";
      const arrivalTime = flight.arrivalTime ? new Date(flight.arrivalTime).toISOString().slice(0, 16) : "";
      reset({ ...flight, departureTime, arrivalTime } as any);
    }
  }, [flight, reset]);
  const onSubmit = async (data: FlightFormValues) => {
    if (!id) return;
    setServerError(null);
    try {
      await updateFlight(id, data as Partial<Flight>);
      navigate(ROUTES.ADMIN_FLIGHTS);
    } catch (err: any) {
      // Show detailed error if available from backend (FastAPI style)
      const detail = err.details?.detail;
      const message = Array.isArray(detail) 
        ? detail.map((d: any) => `${d.loc.join('.')}: ${d.msg}`).join(' | ')
        : err.message || "Failed to update flight";
      setServerError(message);
    }
  };

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="max-w-4xl mx-auto space-y-6 animate-pulse">
          {/* Breadcrumbs & Title Mockup */}
          <div className="space-y-2">
            <div className="h-4 bg-slate-200/60 rounded w-24" />
            <div className="h-8 bg-slate-200 rounded w-48" />
          </div>

          {/* Form Sections Mockup (mimics flight information, aircraft capacity, fares/status) */}
          {Array.from({ length: 3 }).map((_, secIdx) => (
            <div key={secIdx} className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-50 bg-slate-50/30">
                <div className="h-5 bg-slate-200 rounded w-1/4" />
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="h-3.5 bg-slate-100 rounded w-24 ml-1" />
                  <div className="h-12 bg-slate-50 rounded-xl w-full" />
                </div>
                <div className="space-y-2">
                  <div className="h-3.5 bg-slate-100 rounded w-24 ml-1" />
                  <div className="h-12 bg-slate-50 rounded-xl w-full" />
                </div>
                <div className="space-y-2">
                  <div className="h-3.5 bg-slate-100 rounded w-24 ml-1" />
                  <div className="h-12 bg-slate-50 rounded-xl w-full" />
                </div>
                <div className="space-y-2">
                  <div className="h-3.5 bg-slate-100 rounded w-24 ml-1" />
                  <div className="h-12 bg-slate-50 rounded-xl w-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Breadcrumbs & Title */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
            <button onClick={() => navigate(ROUTES.ADMIN_FLIGHTS)} className="hover:text-[#496B92] transition-colors">Flights</button>
            <ChevronLeft size={14} className="rotate-180" />
            <span className="text-[#496B92]">Edit Flight</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Edit Flight — PR 2191</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 pb-20">
          {serverError && (
            <div className="p-4 bg-rose-50 text-rose-600 text-sm font-bold rounded-2xl border border-rose-100 flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <div className="size-2 rounded-full bg-rose-600" />
                <span>Error from Server:</span>
              </div>
              <p className="ml-5 font-medium opacity-90">{serverError}</p>
            </div>
          )}

          {/* Flight Information Section */}
          <section className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-50 bg-slate-50/30">
              <h3 className="font-bold text-slate-900">Flight Information</h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Flight Number *"
                placeholder="e.g. PR 2191"
                error={errors.flightNumber?.message}
                {...register("flightNumber", {
                  onChange: (e) => {
                    e.target.value = e.target.value.toUpperCase();
                  }
                })}
                onKeyPress={(e) => {
                  if (!/[A-Za-z0-9\s\-]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                maxLength={10}
                className="[&>input]:rounded-xl [&>input]:h-12"
              />
              <Input
                label="Airline *"
                placeholder="e.g. Philippine Airlines"
                error={errors.airline?.message}
                {...register("airline")}
                onKeyPress={(e) => {
                  if (!/[A-Za-z\s\-().]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                maxLength={100}
                className="[&>input]:rounded-xl [&>input]:h-12"
              />
              <Input
                label="Origin Airport (IATA) *"
                placeholder="e.g. MNL"
                error={errors.origin?.message}
                {...register("origin", {
                  onChange: (e) => {
                    e.target.value = e.target.value.toUpperCase();
                  }
                })}
                onKeyPress={(e) => {
                  if (!/[A-Za-z]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                maxLength={3}
                className="[&>input]:rounded-xl [&>input]:h-12"
              />
              <Input
                label="Destination Airport (IATA) *"
                placeholder="e.g. CEB"
                error={errors.destination?.message}
                {...register("destination", {
                  onChange: (e) => {
                    e.target.value = e.target.value.toUpperCase();
                  }
                })}
                onKeyPress={(e) => {
                  if (!/[A-Za-z]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                maxLength={3}
                className="[&>input]:rounded-xl [&>input]:h-12"
              />
              <Input
                label="Departure *"
                type="datetime-local"
                error={errors.departureTime?.message}
                {...register("departureTime")}
                className="[&>input]:rounded-xl [&>input]:h-12"
              />
              <Input
                label="Arrival *"
                type="datetime-local"
                error={errors.arrivalTime?.message}
                {...register("arrivalTime")}
                className="[&>input]:rounded-xl [&>input]:h-12"
              />
            </div>
          </section>

          {/* Aircraft & Capacity Section */}
          <section className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-50 bg-slate-50/30">
              <h3 className="font-bold text-slate-900">Aircraft & Capacity</h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 flex flex-col justify-start">
                <label className="text-[13px] font-bold text-slate-500 uppercase tracking-widest ml-1">Aircraft Type *</label>
                <Controller
                  control={control}
                  name="cabinClass"
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={value || ""}
                      onChange={onChange}
                      options={aircraftTypeOptions}
                      placeholder="Select aircraft type..."
                      className="w-full sm:w-full"
                      triggerClassName="h-12 rounded-xl text-sm font-medium border-slate-200 bg-slate-50 focus:bg-white transition-all focus:ring-2 focus:ring-[#496B92]/10 focus:border-[#496B92]/20 text-left justify-between"
                    />
                  )}
                />
                {errors.cabinClass?.message && (
                  <p className="text-xs text-rose-500 ml-1">{errors.cabinClass.message}</p>
                )}
              </div>
              <Input
                label="Total Seats *"
                type="number"
                placeholder="e.g. 180"
                error={errors.totalSeats?.message}
                {...register("totalSeats")}
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                maxLength={4}
                className="[&>input]:rounded-xl [&>input]:h-12"
              />
              <Input
                label="Seats Available *"
                type="number"
                placeholder="e.g. 150"
                error={errors.seatsAvailable?.message}
                {...register("seatsAvailable")}
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                maxLength={4}
                className="[&>input]:rounded-xl [&>input]:h-12"
              />
            </div>
          </section>

          {/* Fares & Status Section */}
          <section className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-50 bg-slate-50/30">
              <h3 className="font-bold text-slate-900">Fares & Status</h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Input
                label="Economy Fare (₱) *"
                type="number"
                placeholder="₱ 0"
                error={errors.price?.message}
                {...register("price")}
                onKeyPress={(e) => {
                  if (!/[0-9.]/.test(e.key) || (e.key === "." && e.currentTarget.value.includes("."))) {
                    e.preventDefault();
                  }
                }}
                maxLength={8}
                className="[&>input]:rounded-xl [&>input]:h-12"
              />
              <Input
                label="Business Fare (₱)"
                type="number"
                placeholder="₱ 0"
                className={cn("[&>input]:rounded-xl [&>input]:h-12", !showBusinessFare && "opacity-50")}
                disabled={!showBusinessFare}
              />
              <div className="space-y-2 flex flex-col justify-start">
                <label className="text-[13px] font-bold text-slate-500 uppercase tracking-widest ml-1">Status *</label>
                <Controller
                  control={control}
                  name="status"
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={value || ""}
                      onChange={onChange}
                      options={statusOptions}
                      placeholder="Select status..."
                      className="w-full sm:w-full"
                      triggerClassName="h-12 rounded-xl text-sm font-medium border-slate-200 bg-slate-50 focus:bg-white transition-all focus:ring-2 focus:ring-[#496B92]/10 focus:border-[#496B92]/20 text-left justify-between"
                    />
                  )}
                />
                {errors.status?.message && (
                  <p className="text-xs text-rose-500 ml-1">{errors.status.message}</p>
                )}
              </div>
            </div>
          </section>

          {/* Change Log Section */}
          <section className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden text-left">
            <div className="px-6 py-5 border-b border-slate-50 bg-slate-50/30">
              <h3 className="font-bold text-slate-900">Change Log</h3>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="size-2 rounded-full bg-blue-500 mt-1.5" />
                  <div className="w-px h-full bg-slate-100 min-h-[40px]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700">Departure time changed from 05:30 to 06:00</p>
                  <p className="text-xs text-slate-400 mt-0.5">Admin User · 2026-04-10 14:32</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="size-2 rounded-full bg-blue-500 mt-1.5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700">Total seats updated from 160 to 180</p>
                  <p className="text-xs text-slate-400 mt-0.5">Admin User · 2026-04-09 09:15</p>
                </div>
              </div>
            </div>
          </section>

          {/* Form Actions */}
          <div className="flex items-center justify-between pt-4">
            <button
              type="button"
              onClick={() => navigate(ROUTES.ADMIN_FLIGHTS)}
              className="flex items-center gap-2 text-slate-500 font-bold hover:text-slate-800 transition-colors"
            >
              <ChevronLeft size={20} />
              Cancel
            </button>
            <Button
              type="submit"
              loading={isSubmitting}
              className="bg-[#496B92] hover:bg-[#3B5470] text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-[#496B92]/20 flex items-center gap-2"
            >
              <Save size={20} />
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AdminEditFlightPage;
