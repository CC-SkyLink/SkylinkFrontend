import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFlight } from "@/api/flights.api";
import { getAircraft } from "@/api/destinations.api";
import { ROUTES } from "@/constants/routes";
import AdminLayout from "./_components/AdminLayout";
import Input from "@/pages/_shared/components/ui/Input";
import Button from "@/pages/_shared/components/ui/Button";
import Select from "@/pages/_shared/components/ui/Select";
import { ChevronLeft, Save, Plane, Tag } from "lucide-react";
import { type FlightFormValues } from "@/validation/flight.schemas";
import { z } from "zod";

const statusOptions = [
  { value: "scheduled", label: "Scheduled" },
  { value: "boarding", label: "Boarding" },
  { value: "on_time", label: "On Time" },
  { value: "delayed", label: "Delayed" },
  { value: "cancelled", label: "Cancelled" },
  { value: "landed", label: "Landed" },
];

const addFlightSchema = z.object({
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
  aircraftId: z.coerce
    .number({ invalid_type_error: "Aircraft is required" })
    .min(1, "Aircraft is required"),
  status: z.enum(["scheduled", "boarding", "on_time", "delayed", "cancelled", "landed"]),
  stops: z.coerce
    .number({ invalid_type_error: "Stops must be a number" })
    .int("Stops must be a whole number")
    .min(0, "Stops cannot be negative"),
  seat_pricing: z
    .array(
      z.object({
        seat_class_id: z.number(),
        price: z.coerce
          .number({ invalid_type_error: "Price must be a number" })
          .min(0, "Price must be non-negative"),
      })
    )
    .min(1, "At least one price configuration is required"),
}).refine((data) => data.origin.trim().toLowerCase() !== data.destination.trim().toLowerCase(), {
  message: "Origin and destination airports must be different",
  path: ["destination"],
});

const AdminAddFlightPage = () => {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FlightFormValues>({
    resolver: zodResolver(addFlightSchema) as any,
    defaultValues: {
      status: "scheduled",
      stops: 0,
      seat_pricing: [],
    },
  });

  const { fields, replace } = useFieldArray({
    control,
    name: "seat_pricing",
  });

  const { data: aircraftList = [], isLoading: isLoadingAircraft } = useQuery({
    queryKey: ["aircraft"],
    queryFn: () => getAircraft(),
    staleTime: 30 * 60 * 1000,
  });
  const selectedAircraftId = watch("aircraftId");
  useEffect(() => {
    if (selectedAircraftId) {
      const aircraft = aircraftList.find(a => a.id === Number(selectedAircraftId));
      if (aircraft && aircraft.seats) {
        const uniqueClasses = Array.from(new Set(aircraft.seats.map(s => s.seat_class_id)));
        replace(uniqueClasses.map(classId => ({ seat_class_id: classId, price: 0 })));
      }
    }
  }, [selectedAircraftId, aircraftList, replace]);


  const onSubmit = async (data: FlightFormValues) => {
    setServerError(null);
    try {
      await createFlight(data as any);
      navigate(ROUTES.ADMIN_FLIGHTS);
    } catch (err: any) {
      const detail = err.details?.detail;
      const message = Array.isArray(detail) 
        ? detail.map((d: any) => `${d.loc.join('.')}: ${d.msg}`).join(' | ')
        : err.message || "Failed to create flight";
      setServerError(message);
    }
  };

  const getClassName = (classId: number) => {
    const aircraft = aircraftList.find(a => a.id === Number(selectedAircraftId));
    const seat = aircraft?.seats?.find(s => s.seat_class_id === classId);
    return seat?.seat_class?.name || (classId === 1 ? "Economy" : "Business");
  };

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
            <button onClick={() => navigate(ROUTES.ADMIN_FLIGHTS)} className="hover:text-[#496B92] transition-colors">Flights</button>
            <ChevronLeft size={14} className="rotate-180" />
            <span className="text-[#496B92]">Add Flight</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Add New Flight</h2>
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

          {/* Flight Information */}
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

          {/* Aircraft Selection */}
          <section className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-50 bg-slate-50/30">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <Plane size={18} className="text-[#496B92]" />
                Select Aircraft
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-2 flex flex-col justify-start">
                <label className="text-[13px] font-bold text-slate-500 uppercase tracking-widest ml-1">Aircraft *</label>
                <Controller
                  control={control}
                  name="aircraftId"
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={value ? String(value) : ""}
                      onChange={(val) => onChange(val ? Number(val) : "")}
                      options={aircraftList.map(a => ({
                        value: String(a.id),
                        label: `${a.model} (${a.registration}) - ${a.total_seats} seats`
                      }))}
                      disabled={isLoadingAircraft}
                      placeholder="Select an aircraft..."
                      className="w-full sm:w-full"
                      triggerClassName="h-12 rounded-xl text-sm font-medium border-slate-200 bg-slate-50 focus:bg-white transition-all focus:ring-2 focus:ring-[#496B92]/10 focus:border-[#496B92]/20 text-left justify-between"
                    />
                  )}
                />
                {errors.aircraftId?.message && <p className="text-xs text-rose-500 ml-1">{errors.aircraftId.message}</p>}
              </div>
            </div>
          </section>

          {/* Dynamic Fares Section */}
          <section className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-50 bg-slate-50/30">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <Tag size={18} className="text-[#496B92]" />
                Fare Configurations
              </h3>
            </div>
            <div className="p-6">
              {!selectedAircraftId ? (
                <div className="py-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                  <p className="text-slate-500 text-sm">Please select an aircraft first to configure pricing.</p>
                </div>
              ) : fields.length === 0 ? (
                 <div className="py-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                  <p className="text-slate-500 text-sm">No seat classes found for this aircraft. Please check Aircraft settings.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {fields.map((field, index) => (
                    <div key={field.id} className="space-y-2">
                      <label className="text-[13px] font-bold text-slate-500 uppercase tracking-widest ml-1">
                        {getClassName(field.seat_class_id)} Fare (₱) *
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₱</span>
                        <input
                          type="number"
                          placeholder="0.00"
                          className="w-full h-12 rounded-xl bg-slate-50 border border-slate-200 pl-8 pr-4 text-sm font-medium outline-none focus:ring-2 focus:ring-[#496B92]/10 focus:border-[#496B92]/20 transition-all"
                          {...register(`seat_pricing.${index}.price` as const)}
                          onKeyPress={(e) => {
                            if (!/[0-9.]/.test(e.key) || (e.key === "." && e.currentTarget.value.includes("."))) {
                              e.preventDefault();
                            }
                          }}
                          maxLength={8}
                        />
                      </div>
                      {errors.seat_pricing?.[index]?.price?.message && (
                        <p className="text-xs text-rose-500 ml-1">{errors.seat_pricing[index].price.message}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Status & Options */}
          <section className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-50 bg-slate-50/30">
              <h3 className="font-bold text-slate-900">Status & Options</h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <Input
                label="Stops *"
                type="number"
                error={errors.stops?.message}
                {...register("stops")}
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                maxLength={2}
                className="[&>input]:rounded-xl [&>input]:h-12"
              />
            </div>
          </section>

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
              Save Flight
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AdminAddFlightPage;