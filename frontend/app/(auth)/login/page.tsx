import LoginForm from "@/features/auth/components/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_34%),linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] p-4">
      <LoginForm />
    </main>
  );
}
