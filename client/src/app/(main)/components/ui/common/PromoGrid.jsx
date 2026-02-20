"use client";

import React from "react";
import { Button } from "@/app/(main)/components/ui/button";

export default function PromoGrid() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-16 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="md:col-span-2 bg-muted rounded-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between min-h-[400px]">
        <div className="space-y-4 max-w-md">
          <p className="font-bold text-primary">Apple iPhone 14 Plus</p>
          <h2 className="text-5xl font-black text-foreground">UP TO 30% OFF</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            iPhone 14 has the same superspeedy chip that's in iPhone 13 Pro, A15
            Bionic, with a 5-core GPU, powers all the latest features.
          </p>
          <Button className="bg-primary hover:opacity-90 rounded-md px-8 py-6 h-auto font-bold text-white shadow-lg shadow-primary/20 transition-all">
            Purchase Now
          </Button>
        </div>
        <div className="mt-8 md:mt-0">
          <img
            src="/discount.webp"
            className="h-72 object-contain mix-blend-multiply drop-shadow-2xl"
          />
        </div>
      </div>

      <div className="bg-muted rounded-md p-10 flex items-center justify-between min-h-[320px]">
        <div className="space-y-4">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            Foldable Motorised Treadmill
          </p>
          <h3 className="text-2xl font-bold text-foreground">
            Workout At Home
          </h3>
          <p className="text-primary font-bold">Flat 20% off</p>
          <Button className="bg-foreground text-background rounded-md px-6 py-5 h-auto font-bold hover:opacity-90">
            Grab the deal
          </Button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=200"
          className="h-32 object-contain mix-blend-multiply"
        />
      </div>

      <div className="bg-muted rounded-md p-10 flex items-center justify-between min-h-[320px]">
        <div className="space-y-4">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            Apple Watch Ultra
          </p>
          <h3 className="text-3xl font-bold text-foreground leading-tight">
            Up to 40% off
          </h3>
          <p className="text-muted-foreground text-xs max-w-[180px]">
            The aerospace-grade titanium case strikes the perfect balance of
            everything.
          </p>
          <Button className="bg-foreground text-background rounded-md px-6 py-5 h-auto font-bold hover:opacity-90">
            Grab the deal
          </Button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=200"
          className="h-32 object-contain mix-blend-multiply"
        />
      </div>
    </section>
  );
}
