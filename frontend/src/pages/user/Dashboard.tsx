import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";
import { CircleUser } from "lucide-react";
import NotificationBell from "@/components/NotificationBell";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <div className="flex justify-between items-center gap-4 flex-wrap">
        <Link to="/" className="text-2xl font-bold">
          PERN Stack
        </Link>
        <div className="flex gap-3">
          <NotificationBell types="user,system" />
          <Link to="/account">
            <Button size={"icon"} variant="outline" aria-label="Account">
              <CircleUser />
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-semibold">Hellow, {user?.name}!</h1>
        <p>Welcome to your dashboard!</p>
      </div>
    </div>
  );
}
