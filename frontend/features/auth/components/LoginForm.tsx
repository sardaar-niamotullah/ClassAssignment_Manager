"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight, GraduationCap, ShieldCheck, Sparkles } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, LoginFormData } from "../schemas/auth.schema";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    <div className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-5xl items-center">
      <div className="grid w-full gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.12)] lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.15),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.15),_transparent_24%)]" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
              <Sparkles className="size-3.5 text-slate-900" />
              Smart classroom operations
            </div>
            <h1 className="mt-5 max-w-md text-4xl font-semibold tracking-tight text-slate-950">
              Class Assignment Manager
            </h1>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">
              A focused workspace for role-based classroom management, submissions, and grading.
            </p>
            <div className="mt-8 grid gap-3">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <div className="rounded-xl bg-white p-2 shadow-sm">
                  <ShieldCheck className="size-4 text-slate-900" />
                </div>
                <div>
                  <p className="font-medium text-slate-900">Admin control</p>
                  <p className="text-sm text-slate-600">Manage users, classes, and marks.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <div className="rounded-xl bg-white p-2 shadow-sm">
                  <GraduationCap className="size-4 text-slate-900" />
                </div>
                <div>
                  <p className="font-medium text-slate-900">Teacher workflow</p>
                  <p className="text-sm text-slate-600">Publish assignments and review submissions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Card className="border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.12)]">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl">Sign in</CardTitle>
            <CardDescription className="text-sm">
              Welcome back. Enter your account details to continue.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-1">
                <Input placeholder="Email" type="email" {...register("email")} />
                <p className="min-h-4 text-xs text-red-500">
                  {errors.email?.message}
                </p>
              </div>
              <div className="space-y-1">
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
                <p className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-900">
                  {loginError}
                </p>
              ) : null}
              <Button type="submit" className="w-full justify-center">
                Continue
                <ArrowRight className="size-4" />
              </Button>
              <p className="text-center text-sm text-slate-600">
                Don&apos;t have an account?{" "}
                <Link
                  href="/signup"
                  className="font-medium text-slate-950 underline underline-offset-4"
                >
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
