"use client";

import React from "react";
import { Button } from "@/app/(main)/components/ui/button";

const timer = [
  { label: "Days", val: "06" },
  { label: "Hours", val: "12" },
  { label: "Minutes", val: "22" },
  { label: "Seconds", val: "03" },
];

export default function CountdownSection() {
  return (
    <section className="max-w-360 mx-auto px-6 md:px-16 py-12">
      <div className="bg-muted rounded-md p-12 md:p-12 flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
        <div className="space-y-8 z-10">
          <p className="font-bold text-primary">Don't Miss!!</p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight max-w-lg tracking-tight">
            Enhance Your Music Experience
          </h2>
          <p className="text-muted-foreground font-medium">
            Macbook Air M1 chip, 8/256GB
          </p>
          <div className="flex gap-4">
            {timer.map((t, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="bg-white w-18 h-18 rounded-md flex items-center justify-center text-3xl font-black text-foreground shadow-sm">
                  {t.val}
                </div>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-3">
                  {t.label}
                </span>
              </div>
            ))}
          </div>
          <Button className="bg-primary hover:opacity-90 rounded-md px-12 py-5 h-auto font-bold text-white shadow-2xl shadow-primary/20 transition-all active:scale-95">
            Check it Out!
          </Button>
        </div>
        <div className="mt-16 md:mt-0 relative group">
          <img
            src="/speaker.webp"
            className="max-w-md w-full object-contain mix-blend-multiply drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
}
