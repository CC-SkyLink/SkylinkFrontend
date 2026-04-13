import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { useAuthStore } from "@/store/useAuthStore";

const Navbar = () => {
  const { isAuthenticated, user } = useAuthStore();
  const isAdmin = user?.role === "admin";

  return (
    <nav className="flex flex-wrap items-center gap-3 border-b border-slate-200 px-4 py-3 text-sm">
      <Link to={ROUTES.HOME}>Home</Link>
      <Link to={ROUTES.SEARCH_RESULTS}>Search</Link>
      <Link to={ROUTES.PNR_STATUS}>PNR Status</Link>

      {!isAuthenticated ? (
        <>
          <Link to={ROUTES.LOGIN}>Login</Link>
          <Link to={ROUTES.REGISTER}>Register</Link>
          <Link to={ROUTES.ADMIN_LOGIN}>Admin Login</Link>
        </>
      ) : null}

      {isAuthenticated ? (
        <>
          <Link to={ROUTES.USER_DASHBOARD}>Dashboard</Link>
          <Link to={ROUTES.BOOKING}>Booking</Link>
          <Link to={ROUTES.MY_BOOKINGS}>My Bookings</Link>
          <Link to={ROUTES.PAYMENT}>Payment</Link>
        </>
      ) : null}

      {isAdmin ? (
        <>
          <Link to={ROUTES.ADMIN_DASHBOARD}>Admin</Link>
          <Link to={ROUTES.ADMIN_FLIGHTS}>Flights</Link>
          <Link to={ROUTES.ADMIN_USERS}>Users</Link>
          <Link to={ROUTES.ADMIN_REPORTS}>Reports</Link>
        </>
      ) : null}
    </nav>
  );
};

export default Navbar;
