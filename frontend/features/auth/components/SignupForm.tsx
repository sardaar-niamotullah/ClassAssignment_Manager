"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signupSchema, SignupFormData } from "../schemas/auth.schema";

import { Button } from "@/components/ui/button";
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
    console.log("SIGNUP CLICKED");
    console.log(data);

    router.push("/admin");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-sm space-y-0.5"
    >
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
      <p className="text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="underline">
          Login
        </Link>
      </p>
    </form>
  );
}
