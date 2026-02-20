"use client";

import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Input } from "../input";
import { Button } from "../button";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-16 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 space-y-10">
          <div>
            <h1 className="text-5xl font-black text-foreground mb-4 tracking-tight">
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                icon: MapPin,
                title: "Our Location",
                detail: "Kathmandu, Nepal, 44600",
              },
              {
                icon: Phone,
                title: "Phone Number",
                detail: "(+977) 974-985-6214",
              },
              {
                icon: Mail,
                title: "Email Address",
                detail: "support@himalayancodeworks.com",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="bg-primary/10 p-4 rounded-md text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm font-medium">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 bg-muted/30 rounded-2xl p-8 md:p-12 border border-border">
          <form className="space-y-6" onSubmit={e => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                  Full Name
                </label>
                <Input
                  placeholder="Enter your name"
                  className="h-14 rounded-md border-border bg-background"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                  Email Address
                </label>
                <Input
                  placeholder="Enter your email"
                  type="email"
                  className="h-14 rounded-md border-border bg-background"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                Subject
              </label>
              <Input
                placeholder="How can we help?"
                className="h-14 rounded-md border-border bg-background"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                Message
              </label>
              <Textarea
                placeholder="Type your message here..."
                className="min-h-45 rounded-md border-border bg-background p-5"
              />
            </div>
            <Button className="w-full md:w-full px-12 h-15 rounded-md bg-primary text-primary-foreground font-bold shadow-xl shadow-primary/20 hover:opacity-90 transition-all gap-2">
              Send Message <Send size={18} />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
