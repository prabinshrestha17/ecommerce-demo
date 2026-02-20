"use client";

import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/(main)/components/ui/carousel";

const categories = [
  {
    name: "Laptop & PC",
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=200",
  },
  {
    name: "Watches",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=200",
  },
  {
    name: "Mobile & Tablets",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=200",
  },
  {
    name: "Health & Sports",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=200",
  },
  {
    name: "Home Appliances",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200",
  },
  {
    name: "Games & Videos",
    img: "https://images.unsplash.com/photo-1605895767120-237fe737985f?q=80&w=200",
  },
];

export default function CategorySection() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-16 py-12">
      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold text-foreground">
            Browse by Category
          </h2>
          <div className="flex gap-2">
            <CarouselPrevious className="static translate-y-0 h-10 w-10 border-border bg-background hover:bg-muted" />
            <CarouselNext className="static translate-y-0 h-10 w-10 border-border bg-background hover:bg-muted" />
          </div>
        </div>
        <CarouselContent className="-ml-4">
          {categories.map((cat, i) => (
            <CarouselItem
              key={i}
              className="pl-4 basis-1/2 md:basis-1/4 lg:basis-1/6"
            >
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-40 h-40 rounded-full bg-muted flex items-center justify-center mb-4 transition-transform group-hover:scale-105 overflow-hidden">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-24 h-24 object-contain mix-blend-multiply"
                  />
                </div>
                <span className="font-semibold text-foreground text-sm text-center">
                  {cat.name}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="mt-16 border-t border-border opacity-50"></div>
    </section>
  );
}
