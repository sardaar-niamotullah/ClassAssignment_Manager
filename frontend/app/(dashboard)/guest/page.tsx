import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function GuestPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="max-w-xl rounded-3xl border bg-white p-8 text-center shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          Pending access
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900">
          You will be assigned a role by admin soon
        </h1>
        <p className="mt-3 text-sm text-slate-600">
          Your account is active, but you do not have a dashboard yet. Please visit again later after an admin sets your role to teacher or student.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/login">
            <Button>Back to login</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
