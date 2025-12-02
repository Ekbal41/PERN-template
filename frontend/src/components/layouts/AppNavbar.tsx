import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";
import NotificationBell from "../NotificationBell";
import { Button } from "../ui/button";
import { CircleUser } from "lucide-react";
import ProjectLogo from "../ProjectLogo";

export default function Navbar() {
  return (
    <div className="border-b h-16 flex items-center bg-muted px-4">
      <nav className="max-w-4xl w-full mx-auto flex items-center justify-between">
        <ProjectLogo />
        <div className="flex gap-3">
          <NotificationBell types="user,system" />
          <ModeToggle />
          <Link to="/account">
            <Button size={"icon"} variant="outline" aria-label="Account">
              <CircleUser />
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
