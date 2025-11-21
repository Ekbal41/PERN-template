import { useAuth } from "@/hooks/useAuth";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-center items-center mt-20">
        <h1 className="text-2xl font-semibold">Hi, {user?.name}!</h1>
        <p>Welcome to your dashboard!</p>
      </div>
    </div>
  );
}
