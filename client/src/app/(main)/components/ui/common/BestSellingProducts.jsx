"use client";

import React from "react";
import { Eye, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/app/(main)/components/ui/button";
import { Card, CardContent } from "@/app/(main)/components/ui/card";

const products = [
  {
    name: "iPhone 16 Pro - 8/128GB",
    price: "$600",
    old: "$898",
    img: "/iphone.webp",
  },
  {
    name: "Rangs 43 Inch Frameless FHD",
    price: "$700",
    old: "$799",
    img: "/mouse.webp",
  },
  {
    name: "Apple Watch Ultra",
    price: "$89",
    old: "$99",
    img: "/mac.webp",
  },
  {
    name: "Indoor Steel Adjustable Treadmill",
    price: "$888",
    old: "$999",
    img: "/mac.webp",
  },
  {
    name: "Macbook Pro - 512/16GB",
    price: "$500",
    old: "",
    img: "/ipad.webp",
  },
  {
    name: "MacBook Air M4 chip",
    price: "$600",
    old: "$699",
    img: "/mixture.webp",
  },
];

export default function BestSellingProducts() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-16 py-20">
      <div className="text-center mb-16 space-y-3">
        <h2 className="text-4xl font-bold text-foreground">
          Best Selling Products
        </h2>
        <p className="text-muted-foreground text-sm font-medium">
          These top picks are flying off the shelves! Find out what everyone's
          loving right now.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <Card
            key={i}
            className="border-none bg-muted rounded-md overflow-hidden group transition-all hover:shadow-2xl hover:shadow-slate-200/50"
          >
            <CardContent className="p-8 flex flex-col items-center relative h-full">
              <div className="absolute right-6 top-[60%] -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 z-10">
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full bg-white h-11 w-11 shadow-sm hover:bg-primary hover:text-white border-none"
                >
                  <Eye size={20} />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full bg-white h-11 w-11 shadow-sm hover:bg-primary hover:text-white border-none"
                >
                  <ShoppingCart size={20} />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full bg-white h-11 w-11 shadow-sm hover:bg-primary hover:text-white border-none"
                >
                  <Heart size={20} />
                </Button>
              </div>
              <div className="text-center mb-10 w-full">
                <h4 className="font-bold text-lg mb-2 text-foreground line-clamp-1">
                  {p.name}
                </h4>
                <div className="flex items-center justify-center gap-3">
                  <span className="font-bold text-xl text-foreground">
                    {p.price}
                  </span>
                  {p.old && (
                    <span className="text-muted-foreground line-through text-sm font-medium">
                      {p.old}
                    </span>
                  )}
                </div>
              </div>
              <div className="h-56 w-full flex items-center justify-center">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
