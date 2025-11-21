import { Routes, Route } from "react-router";
import LandingPage from "@/pages/root/LandingPage";
import Dashboard from "@/pages/user/Dashboard";
import Account from "@/pages/user/Account";
import ProtectedRoutes from "./utils/ProtectedRoutes";

export default function RootRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/account" element={<Account />} />
      </Route>
    </Routes>
  );
}
