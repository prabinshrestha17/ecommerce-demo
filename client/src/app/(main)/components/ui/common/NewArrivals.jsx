"use client";

import React from "react";
import { Eye, Heart } from "lucide-react";
import { Button } from "@/app/(main)/components/ui/button";
import { Badge } from "@/app/(main)/components/ui/badge";

const products = [
  {
    name: "iPhone 16 Pro - 8/128GB",
    old: "$898",
    price: "$600",
    discount: "33% OFF",
    img: "/iphone.webp",
  },
  {
    name: "Indoor Steel Adjustable Silent...",
    old: "$999",
    price: "$888",
    discount: "11% OFF",
    img: "/mac.webp",
  },
  {
    name: "MacBook Air M1 chip, 8/256GB",
    old: "$930",
    price: "$899",
    discount: "3% OFF",
    img: "/watch.webp",
  },
  {
    name: "Rangs 43 Inch Frameless FHD Double...",
    old: "$799",
    price: "$700",
    discount: "12% OFF",
    img: "/ipad.webp",
  },
];

export default function NewArrivals() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-16 py-16">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-foreground">New Arrivals</h2>
        <Button
          variant="outline"
          className="rounded-md border-border px-6 py-3 h-auto text-sm font-bold bg-background hover:bg-muted"
        >
          View All
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="bg-[#f8fafc] dark:bg-slate-900 rounded-md p-8 aspect-square flex items-center justify-center relative mb-5 overflow-hidden border border-transparent transition-all group-hover:border-border group-hover:shadow-sm">
              {p.discount && (
                <Badge className="absolute top-4 right-4 bg-primary hover:bg-primary text-primary-foreground px-2 py-0.5 text-[10px] font-bold rounded-md">
                  {p.discount}
                </Badge>
              )}

              <img
                src={p.img}
                alt={p.name}
                className="h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute bottom-4 left-0 right-0 px-4 flex items-center justify-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-md bg-background border-border text-foreground"
                >
                  <Eye size={18} />
                </Button>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-4 h-10 rounded-md text-xs flex-1">
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-md bg-background border-border text-foreground"
                >
                  <Heart size={18} />
                </Button>
              </div>
            </div>

            <div className="space-y-1">
              <h4 className="font-bold text-foreground text-sm line-clamp-1">
                {p.name}
              </h4>
              <div className="flex items-center gap-2">
                {p.old && (
                  <span className="text-muted-foreground line-through text-xs font-medium">
                    {p.old}
                  </span>
                )}
                <span className="font-bold text-foreground text-sm">
                  {p.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
