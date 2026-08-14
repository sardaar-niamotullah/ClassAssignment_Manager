"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Sparkles } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signupSchema, SignupFormData } from "../schemas/auth.schema";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function SignupForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupFormData) => {
    console.log("SIGNUP CLICKED", data);
    router.push("/guest");
  };

  return (
    <Card className="w-full max-w-lg border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.12)]">
      <CardHeader className="pb-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
          <Sparkles className="size-3.5 text-slate-900" />
          Class Assignment Manager
        </div>
        <CardTitle className="pt-3 text-2xl">Create account</CardTitle>
        <CardDescription className="text-sm">
          Join the platform and wait for an admin to assign your role.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1">
            <Input placeholder="Full Name" type="text" {...register("fullName")} />
            <p className="min-h-4 text-xs text-red-500">
              {errors.fullName?.message}
            </p>
          </div>
          <div className="space-y-1">
            <Input placeholder="Email" type="email" {...register("email")} />
            <p className="min-h-4 text-xs text-red-500">{errors.email?.message}</p>
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
          <Button type="submit" className="w-full justify-center">
            Sign Up
            <ArrowRight className="size-4" />
          </Button>
          <p className="text-center text-sm text-slate-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-slate-950 underline underline-offset-4"
            >
              Login
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
