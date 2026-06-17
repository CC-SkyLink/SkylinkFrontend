import { Menu, Search } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

type AdminTopHeaderProps = {
  onMenuClick: () => void;
};

const FEATURES_INDEX = [
  {
    title: "Dashboard / Analytics",
    description: "Admin home dashboard overview and statistics",
    path: ROUTES.ADMIN_DASHBOARD,
    keywords: ["home", "dashboard", "stats", "overview", "analytics", "income", "revenue"],
  },
  {
    title: "Flights Management",
    description: "View, edit, search, and manage airline flights",
    path: ROUTES.ADMIN_FLIGHTS,
    keywords: ["flights", "schedule", "airline", "stops", "departures", "arrivals", "price"],
  },
  {
    title: "Add New Flight",
    description: "Schedule a new flight to the system",
    path: ROUTES.ADMIN_ADD_FLIGHT,
    keywords: ["add flight", "create flight", "new flight", "schedule"],
  },
  {
    title: "Edit Flight Status",
    description: "Modify scheduled flights and status details",
    path: ROUTES.ADMIN_EDIT_FLIGHT,
    keywords: ["edit flight", "update flight", "status", "delay", "cancel"],
  },
  {
    title: "Destinations Management",
    description: "Manage travel airports and target locations",
    path: ROUTES.ADMIN_DESTINATIONS,
    keywords: ["destinations", "airports", "cities", "locations", "routes"],
  },
  {
    title: "Promotions & Discounts",
    description: "Manage seasonal escapes and promo campaigns",
    path: ROUTES.ADMIN_PROMOTIONS,
    keywords: ["promotions", "discounts", "codes", "seasonal escapes", "campaigns", "deals"],
  },
  {
    title: "Users / Accounts Management",
    description: "Manage passenger accounts, staff list, roles, and status",
    path: ROUTES.ADMIN_USERS,
    keywords: ["users", "accounts", "passengers", "suspend", "reactivate"],
  },
  {
    title: "Bookings List & Tickets",
    description: "View booking list, PNR logs, and ticket issues",
    path: ROUTES.ADMIN_BOOKINGS,
    keywords: ["bookings", "reservations", "pnr", "tickets", "passenger history"],
  },
  {
    title: "Reports Page",
    description: "Access booking summaries and financial reports",
    path: ROUTES.ADMIN_REPORTS,
    keywords: ["reports", "revenue", "analytics", "excel", "pdf", "export"],
  },
  {
    title: "System Activity Log",
    description: "View system audit logs and administrator actions",
    path: "/admin/activity-log",
    keywords: ["activity log", "audit logs", "history", "admin actions", "events"],
  },
  {
    title: "General Settings",
    description: "Configure airline name, logo, contact, and email details",
    path: "/admin/settings?tab=general",
    keywords: ["settings", "general", "airline name", "logo upload", "phone", "email"],
  },
  {
    title: "Regional Settings",
    description: "Set system currency and base timezones",
    path: "/admin/settings?tab=regional",
    keywords: ["settings", "regional", "currency", "timezone", "peso", "usd"],
  },
  {
    title: "Booking Rules Configuration",
    description: "Manage cancellation and rescheduling window limits",
    path: "/admin/settings?tab=booking-rules",
    keywords: ["settings", "booking rules", "cancellation window", "reschedule window"],
  },
  {
    title: "Payment Settings",
    description: "Configure API credentials and test payment gateway connection",
    path: "/admin/settings?tab=payment",
    keywords: ["settings", "payment", "stripe", "gcash", "api key", "test connection"],
  },
  {
    title: "Email Settings",
    description: "Set email sender name, reply-to, and template previews",
    path: "/admin/settings?tab=email",
    keywords: ["settings", "email config", "reply-to", "template preview", "sender"],
  },
  {
    title: "Admin Accounts Management",
    description: "Register new admin accounts and view active admin list",
    path: "/admin/settings?tab=admin-accounts",
    keywords: ["settings", "admin accounts", "register admin", "create admin"],
  },
];

const AdminTopHeader = ({ onMenuClick }: AdminTopHeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredResults = searchQuery
    ? FEATURES_INDEX.filter(
        (f) =>
          f.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          f.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          f.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6">
      <div className="flex flex-1 items-center gap-4">
        <button
          className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
          onClick={onMenuClick}
        >
          <Menu size={24} />
        </button>

        {/* Search Bar */}
        <div ref={dropdownRef} className="relative hidden max-w-md flex-1 md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search pages or features (e.g. settings, flights, logs)..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            className="h-11 w-full rounded-xl bg-slate-50 pl-10 pr-4 text-sm outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#5E83AE]/10 border border-transparent focus:border-[#5E83AE]/20"
          />

          {isOpen && searchQuery && (
            <div className="absolute top-full left-0 right-0 mt-2 max-h-[380px] overflow-y-auto rounded-2xl bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.15)] py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
              {filteredResults.length === 0 ? (
                <div className="px-4 py-6 text-center text-sm text-slate-400 font-medium">
                  No pages or features match "{searchQuery}"
                </div>
              ) : (
                <>
                  <div className="px-4 pb-2 mb-1 border-b border-slate-50 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Pages &amp; Features Found
                  </div>
                  {filteredResults.map((result) => (
                    <Link
                      key={result.title}
                      to={result.path}
                      onClick={() => {
                        setSearchQuery("");
                        setIsOpen(false);
                      }}
                      className="flex flex-col gap-0.5 px-4 py-2.5 hover:bg-slate-50 transition-colors cursor-pointer text-left"
                    >
                      <span className="text-sm font-bold text-slate-700">
                        {result.title}
                      </span>
                      <span className="text-xs text-slate-400 line-clamp-1">
                        {result.description}
                      </span>
                    </Link>
                  ))}
                </>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-5">
        {/* User Profile */}
        <div className="flex items-center gap-3 border-l border-slate-200 pl-5">
          <div className="hidden text-right lg:block">
            <p className="text-sm font-bold text-slate-900 leading-none">Admin User</p>
            <p className="mt-1 text-[11px] text-slate-500 font-medium uppercase tracking-wider">Administrator</p>
          </div>
          <div className="flex size-10 items-center justify-center rounded-lg bg-blue-500 text-white font-bold shadow-lg shadow-blue-500/20">
            A
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminTopHeader;
