"use client";

import React from "react";
import { Rocket, RefreshCcw, ShieldCheck, Headphones } from "lucide-react";
import { Button } from "@/app/(main)/components/ui/button";
import { Input } from "@/app/(main)/components/ui/input";

export default function NewsletterFeatures() {
  const features = [
    { icon: Rocket, title: "Free Shipping", desc: "For all orders $200" },
    {
      icon: RefreshCcw,
      title: "1 & 1 Returns",
      desc: "Cancellation after 1 day",
    },
    {
      icon: ShieldCheck,
      title: "100% Secure Payments",
      desc: "Gurantee secure payments",
    },
    {
      icon: Headphones,
      title: "24/7 Dedicated Support",
      desc: "Anywhere & anytime",
    },
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-16 py-12">
      <div className="bg-gradient-to-br from-[#1a4cd1] to-[#4c7ef3] rounded-md p-12 md:p-20 flex flex-col md:flex-row items-center justify-between mb-24 shadow-2xl shadow-blue-500/20">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-4xl font-bold text-white tracking-tight leading-tight">
            Don't Miss Out Latest
            <br />
            Trends & Offers
          </h2>
          <p className="text-blue-100/80 font-medium">
            Register to receive news about the latest offers & discount codes
          </p>
        </div>
        <div className="flex w-full md:w-auto mt-10 md:mt-0 gap-3 p-2 rounded-2xl ">
          <Input
            placeholder="Enter your email"
            className="bg-white border-none rounded-md py-7 md:w-80 shadow-inner"
          />
          <Button className="bg-primary hover:bg-blue-800 text-white rounded-md px-10  h-auto font-bold shadow-lg transition-transform active:scale-95">
            Subscribe
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-4">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-5 group cursor-default">
            <div className="p-4 rounded-md bg-muted group-hover:bg-primary group-hover:text-white transition-colors duration-500">
              <f.icon className="w-8 h-8" />
            </div>
            <div>
              <h5 className="font-bold text-foreground text-sm mb-1">
                {f.title}
              </h5>
              <p className="text-muted-foreground text-xs font-medium">
                {f.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
