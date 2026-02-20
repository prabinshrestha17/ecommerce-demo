"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/app/(main)/components/ui/button";
import { Card } from "@/app/(main)/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/(main)/components/ui/carousel";

const reviews = [
  {
    name: "Davis Dorwart",
    role: "Serial Entrepreneur",
    text: "Lorem ipsum dolor sit amet, adipiscing elit. Donec malesuada justo vitaeaugue suscipit beautiful vehicula",
    img: "https://i.pravatar.cc/150?u=1",
  },
  {
    name: "Wilson Dias",
    role: "Backend Developer",
    text: "Lorem ipsum dolor sit amet, adipiscing elit. Donec malesuada justo vitaeaugue suscipit beautiful vehicula",
    img: "https://i.pravatar.cc/150?u=2",
  },
  {
    name: "Davis Dorwart",
    role: "Serial Entrepreneur",
    text: "Lorem ipsum dolor sit amet, adipiscing elit. Donec malesuada justo vitaeaugue suscipit beautiful vehicula",
    img: "https://i.pravatar.cc/150?u=3",
  },
  {
    name: "Alex Rivera",
    role: "UI/UX Designer",
    text: "Lorem ipsum dolor sit amet, adipiscing elit. Donec malesuada justo vitaeaugue suscipit beautiful vehicula",
    img: "https://i.pravatar.cc/150?u=4",
  },
  {
    name: "Sarah Jenkins",
    role: "Product Manager",
    text: "Lorem ipsum dolor sit amet, adipiscing elit. Donec malesuada justo vitaeaugue suscipit beautiful vehicula",
    img: "https://i.pravatar.cc/150?u=5",
  },
];

export default function Testimonials() {
  const [api, setApi] = useState();

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-16 py-20">
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true }}
        className="w-full"
      >
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-bold text-foreground tracking-tight">
            User Feedbacks
          </h2>
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-md border-border bg-background hover:bg-primary hover:text-white transition-all shadow-sm"
              onClick={() => api?.scrollPrev()}
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-md border-border bg-background hover:bg-primary hover:text-white transition-all shadow-sm"
              onClick={() => api?.scrollNext()}
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>

        <CarouselContent className="-ml-8">
          {reviews.map((r, i) => (
            <CarouselItem
              key={i}
              className="pl-8 basis-1/1 md:basis-1/2 lg:basis-1/3"
            >
              <Card className="border-none rounded-md p-10 bg-[#f8fafc] h-full flex flex-col justify-between transition-all hover:shadow-xl hover:shadow-slate-200">
                <div>
                  <div className="flex gap-1 mb-8 text-[#fbbf24]">
                    {Array(5).fill(
                      <Star
                        size={16}
                        fill="currentColor"
                        key={Math.random()}
                      />,
                    )}
                  </div>
                  <p className="text-[#1e293b] text-base leading-relaxed mb-10 font-medium italic opacity-80">
                    "{r.text}"
                  </p>
                </div>
                <div className="flex items-center gap-5">
                  <img
                    src={r.img}
                    className="w-14 h-14 rounded-full object-cover border-4 border-white shadow-md"
                    alt={r.name}
                  />
                  <div>
                    <h5 className="font-bold text-[#1e293b] text-lg leading-tight">
                      {r.name}
                    </h5>
                    <p className="text-[#64748b] text-xs font-bold uppercase tracking-widest mt-1">
                      {r.role}
                    </p>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
