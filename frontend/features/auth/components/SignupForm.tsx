"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signupSchema, SignupFormData } from "../schemas/auth.schema";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    <Card className="w-full max-w-md border-white/80 bg-white/90 shadow-[0_20px_70px_rgba(15,23,42,0.12)]">
      <CardHeader>
        <CardTitle>Create account</CardTitle>
        <CardDescription>
          New users will land on the pending screen until an admin assigns a role.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input placeholder="Full Name" type="text" {...register("fullName")} />
            <p className="min-h-4 text-xs text-red-500">
              {errors.fullName?.message}
            </p>
          </div>
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
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
          <p className="text-center text-sm text-slate-600">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-slate-900 underline">
              Login
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
