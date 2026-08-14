"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, LoginFormData } from "../schemas/auth.schema";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { mockUsers } from "@/lib/mock-data";

export default function LoginForm() {
  const router = useRouter();
  const [loginError, setLoginError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    const user = mockUsers.find(
      (item) =>
        item.email.toLowerCase() === data.email.toLowerCase() &&
        item.password === data.password
    );

    if (!user) {
      setLoginError("We could not find a matching demo account.");
      return;
    }

    setLoginError("");

    if (user.role === "admin") router.push("/admin");
    if (user.role === "teacher") router.push("/teacher");
    if (user.role === "student") router.push("/student");
    if (user.role === "pending") router.push("/guest");
  };

  return (
    <div className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-6xl items-center">
      <div className="grid w-full gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-[2rem] border border-white/70 bg-slate-950 px-6 py-8 text-white shadow-[0_20px_70px_rgba(15,23,42,0.25)] lg:px-10 lg:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
            Demo login
          </p>
          <h1 className="mt-4 max-w-xl text-4xl font-semibold leading-tight">
            A polished class workspace for admins, teachers, and students.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">
            Use the dummy credentials on the right to switch roles quickly and inspect the dedicated dashboards, actions, and permission states.
          </p>
          <div className="mt-8 grid gap-3 text-sm text-slate-200">
            <p>Admin: admin@classassign.test / Admin123!</p>
            <p>Teacher: teacher@classassign.test / Teacher123!</p>
            <p>Student: student@classassign.test / Student123!</p>
            <p>New user: newuser@classassign.test / Newuser123!</p>
          </div>
        </section>

        <Card className="border-white/80 bg-white/90 shadow-[0_20px_70px_rgba(15,23,42,0.12)]">
          <CardHeader>
            <CardTitle>Sign in</CardTitle>
            <CardDescription>
              Demo authentication is role-aware and local only.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Input placeholder="Email" type="email" {...register("email")} />
                <p className="min-h-4 text-xs text-red-500">{errors.email?.message}</p>
              </div>
              <div>
                <Input
                  placeholder="Password"
                  type="password"
                  {...register("password")}
                />
                <p className="min-h-4 text-xs text-red-500">
                  {errors.password?.message}
                </p>
              </div>
              {loginError ? (
                <p className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-900">
                  {loginError}
                </p>
              ) : null}
              <Button type="submit" className="w-full">
                Login
              </Button>
              <p className="text-center text-sm text-slate-600">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="font-medium text-slate-900 underline">
                  Sign Up
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
