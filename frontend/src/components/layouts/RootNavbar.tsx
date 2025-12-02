import { ModeToggle } from "../mode-toggle";
import ProjectLogo from "../ProjectLogo";

export default function Navbar() {
  return (
    <div className="border-b h-16 flex items-center bg-muted px-4">
      <nav className="max-w-4xl w-full mx-auto flex items-center justify-between">
        <ProjectLogo />
        <div>
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
}
