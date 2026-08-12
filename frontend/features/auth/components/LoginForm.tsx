"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, LoginFormData } from "../schemas/auth.schema";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("LOGIN CLICKED");
    console.log(data);

    router.push("/home");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-sm space-y-4"
    >
      <Input placeholder="Email" type="email" {...register("email")} />

      {errors.email && (
        <p className="text-sm text-red-500">{errors.email.message}</p>
      )}

      <Input placeholder="Password" type="password" {...register("password")} />

      {errors.password && (
        <p className="text-sm text-red-500">{errors.password.message}</p>
      )}

      <Button type="submit" className="w-full">
        Login
      </Button>

      <p className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="underline">
          Sign Up
        </Link>
      </p>
    </form>
  );
}
