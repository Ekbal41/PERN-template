import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent } from "@/components/ui/card";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <Card>
        <CardContent>
          <h1 className="text-2xl font-semibold">Hi, {user?.name}!</h1>
          <p>Welcome to your dashboard!</p>
        </CardContent>
      </Card>
    </div>
  );
}
