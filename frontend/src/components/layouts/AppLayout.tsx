import { Outlet } from "react-router";
import Navbar from "./AppNavbar";

export default function AppLayout() {
  return (
    <div>
      <Navbar />
      <div className="mx-4">
        <div className="max-w-4xl mx-auto py-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
