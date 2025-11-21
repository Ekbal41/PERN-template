import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";
import { Link } from "react-router";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-4">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="flex justify-center">
          <Terminal className="h-16 w-16 text-primary" />
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
          PERN Stack Template
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Production-ready boilerplate with PostgreSQL, Express, React, and
          Node.js. Authentication, database setup, and best practices included.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <Link to="/auth">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 group"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          <Button size="lg" variant="outline">
            View on GitHub
          </Button>
        </div>

        <div className="flex justify-center gap-6 text-sm text-muted-foreground pt-8">
          <span>PostgreSQL</span>
          <span>•</span>
          <span>Express</span>
          <span>•</span>
          <span>React</span>
          <span>•</span>
          <span>Node.js</span>
        </div>
      </div>
    </div>
  );
}
