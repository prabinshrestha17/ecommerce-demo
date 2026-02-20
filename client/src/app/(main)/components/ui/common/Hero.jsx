"use client";

import React from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { Button } from "@/app/(main)/components/ui/button";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();
  return (
    <section className="relative w-full bg-background pt-24 pb-20 overflow-hidden min-h-screen flex flex-col items-center">
      {/* Grid Pattern using your --border variable */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      ></div>

      {/* Top Badge */}
      <div className="z-10 mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-[12px] font-semibold text-foreground backdrop-blur-md shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
          We&apos;ve raised $69M seed funding
          <MoveRight size={14} className="opacity-40" />
        </div>
      </div>

      {/* Main Content */}
      <div className="z-10 text-center px-6 max-w-4xl mx-auto space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.05]">
          Generate Images, Text <br /> and Videos with AI
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
          Everything AI seamlessly integrated all the modern AI generation tools
          into one platform so that you can generate content with a single
          click.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button className="rounded-full bg-primary text-primary-foreground hover:opacity-90 px-10 py-7 text-base font-bold shadow-xl shadow-primary/10 transition-all">
            Get started
          </Button>
          <button
            onClick={() => {
              router.push("/contact");
            }}
            variant="outline"
            className="rounded-full flex items-center justify-center gap-1 border-none bg-background text-foreground hover:bg-muted px-10 py-4  cursor-pointer text-base font-bold shadow-xl shadow-primary/10 transition-all"
          >
            Contact us <MoveRight size={20} />
          </button>
        </div>
      </div>

      {/* Hero Image Container with Bold Border and Fade */}
      <div className="relative z-10 w-full max-w-[1100px] mt-24 px-6 group">
        <div className="relative rounded-3xl border-[12px] border-border bg-background shadow-[0_30px_60px_rgba(0,0,0,0.08)] overflow-hidden">
          <Image
            src="/header.webp"
            alt="Dashboard Preview"
            width={1200}
            height={800}
            className="w-full h-auto object-cover opacity-95"
            priority
          />

          {/* Bottom-to-Top Fade Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/5 to-transparent"></div>
        </div>

        {/* Depth Glow */}
        <div className="absolute -inset-10 bg-primary/5 rounded-[4rem] blur-[100px] z-[-1] pointer-events-none"></div>
      </div>
    </section>
  );
}
