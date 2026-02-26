"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Github,
  Chrome,
  Mail,
  Lock,
  User,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import { Button } from "../../button";
import { Input } from "../../input";

export default function AuthForm({ type }) {
  const isLogin = type === "login";

  return (
    <section className="min-h-screen flex items-center justify-center bg-background p-4 md:p-10">
      <div className="max-w-[1200px] w-full bg-background rounded-md overflow-hidden shadow-2xl flex flex-col md:flex-row border border-border">
        {/* Form Side */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          <Link href="/" className="flex items-center gap-2 mb-12 group w-fit">
            <div className="bg-primary p-2.5 rounded-md text-primary-foreground group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
              <ShoppingBag size={22} />
            </div>
            <span className="font-bold text-2xl tracking-tighter text-foreground uppercase tracking-widest">
              Mero pasal
            </span>
          </Link>

          <div className="mb-10">
            <h1 className="text-4xl font-black text-foreground mb-3 leading-none tracking-tight">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h1>
            <p className="text-muted-foreground text-sm font-medium">
              {isLogin
                ? "Enter your details to access your account."
                : "Fill in the details to join our premium community."}
            </p>
          </div>

          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="rounded-md h-14 gap-3 border-border font-bold hover:bg-muted transition-all"
              >
                <Chrome size={20} /> Google
              </Button>
              <Button
                variant="outline"
                className="rounded-md h-14 gap-3 border-border font-bold hover:bg-muted transition-all"
              >
                <Github size={20} /> Github
              </Button>
            </div>

            <div className="relative py-4 flex items-center">
              <div className="flex-grow border-t border-border"></div>
              <span className="flex-shrink mx-4 text-muted-foreground text-[10px] font-bold uppercase tracking-[0.2em]">
                Or use email
              </span>
              <div className="flex-grow border-t border-border"></div>
            </div>

            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              {!isLogin && (
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/60"
                    size={20}
                  />
                  <Input
                    placeholder="Full Name"
                    className="pl-12 h-15 rounded-md border-border bg-muted/20 focus:bg-background transition-all shadow-inner"
                  />
                </div>
              )}
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/60"
                  size={20}
                />
                <Input
                  placeholder="Email Address"
                  type="email"
                  className="pl-12 h-15 rounded-md border-border bg-muted/20 focus:bg-background transition-all shadow-inner"
                />
              </div>
              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/60"
                  size={20}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  className="pl-12 h-15 rounded-md border-border bg-muted/20 focus:bg-background transition-all shadow-inner"
                />
              </div>

              <Button className="w-full h-15 rounded-md bg-primary text-primary-foreground font-bold shadow-2xl shadow-primary/20 hover:opacity-90 transition-all mt-6 group">
                {isLogin ? "Sign In" : "Register Now"}
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </form>

            <p className="text-center text-sm font-medium text-muted-foreground pt-6">
              {isLogin ? "Don't have an account?" : "Already a member?"}
              <Link
                href={isLogin ? "/register" : "/login"}
                className="ml-2 text-primary font-bold hover:underline underline-offset-4"
              >
                {isLogin ? "Sign Up" : "Log In"}
              </Link>
            </p>
          </div>
        </div>

        {/* Image Side */}
        <div className="hidden md:block w-1/2 relative bg-primary">
          <Image
            src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=1000"
            alt="Auth Cover"
            fill
            className="object-cover opacity-90 mix-blend-soft-light"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-primary via-transparent to-black/20"></div>

          <div className="absolute bottom-16 left-16 right-16 text-white space-y-6">
            <div className="w-16 h-1 bg-white/40 rounded-full"></div>
            <h2 className="text-5xl font-bold leading-[1.1] tracking-tight">
              Experience tech and style redefined.
            </h2>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-primary overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?u=${i + 50}`}
                      alt="user"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold text-white/90">
                20k+ members joined
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
