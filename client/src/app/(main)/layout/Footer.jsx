"use client";

import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/app/(main)/components/ui/button";

export default function Footer() {
  const links = {
    "Help & Support": [
      {
        icon: MapPin,
        text: "685 Market Street, Las Vegas, LA 95820, United States.",
      },
      { icon: Phone, text: "(+099) 532-786-9843" },
      { icon: Mail, text: "support@example.com" },
    ],
    Account: ["Login / Register", "Cart", "Wishlist", "Shop"],
    "Quick Link": [
      "Privacy Policy",
      "Refund Policy",
      "Terms of Use",
      "FAQ's",
      "Contact",
    ],
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="pt-24 pb-12 border-t border-border mt-32 relative bg-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        <div>
          <h4 className="font-black text-lg mb-10 text-foreground tracking-wide">
            Help & Support
          </h4>
          <ul className="space-y-7">
            {links["Help & Support"].map((l, i) => (
              <li
                key={i}
                className="flex gap-5 text-muted-foreground text-sm group"
              >
                <l.icon
                  size={20}
                  className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform"
                />
                <span className="leading-relaxed hover:text-primary transition-colors cursor-default">
                  {l.text}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex gap-6 mt-12">
            <Facebook
              className="text-muted-foreground hover:text-primary transition-all hover:-translate-y-1 cursor-pointer"
              size={22}
            />
            <Twitter
              className="text-muted-foreground hover:text-primary transition-all hover:-translate-y-1 cursor-pointer"
              size={22}
            />
            <Instagram
              className="text-muted-foreground hover:text-primary transition-all hover:-translate-y-1 cursor-pointer"
              size={22}
            />
            <Linkedin
              className="text-muted-foreground hover:text-primary transition-all hover:-translate-y-1 cursor-pointer"
              size={22}
            />
          </div>
        </div>
        {["Account", "Quick Link"].map(cat => (
          <div key={cat}>
            <h4 className="font-black text-lg mb-10 text-foreground tracking-wide">
              {cat}
            </h4>
            <ul className="space-y-5">
              {links[cat].map(link => (
                <li
                  key={link}
                  className="text-muted-foreground hover:text-primary hover:pl-2 transition-all cursor-pointer text-sm font-medium"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h4 className="font-black text-lg mb-10 text-foreground tracking-wide">
            Download App
          </h4>
          <p className="text-muted-foreground text-[13px] mb-10 leading-relaxed font-medium">
            Get started in seconds - it's fast, free, and easy! Shop your
            favorites anywhere.
          </p>
          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full h-auto py-4 px-7 rounded-2xl flex justify-start gap-4 border-border hover:border-primary transition-all group"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                className="w-7 opacity-80 group-hover:opacity-100"
              />
              <div className="text-left">
                <p className="text-[10px] text-muted-foreground font-black uppercase tracking-tighter">
                  Download on the
                </p>
                <p className="text-base font-bold text-foreground">App Store</p>
              </div>
            </Button>
            <Button
              variant="outline"
              className="w-full h-auto py-4 px-7 rounded-2xl flex justify-start gap-4 border-border hover:border-primary transition-all group"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Google_Play_Store_badge_EN.svg"
                className="w-7 opacity-80 group-hover:opacity-100"
              />
              <div className="text-left">
                <p className="text-[10px] text-muted-foreground font-black uppercase tracking-tighter">
                  Get it On
                </p>
                <p className="text-base font-bold text-foreground">
                  Google Play
                </p>
              </div>
            </Button>
          </div>
        </div>
      </div>
      <div className="border-t border-border pt-10 max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[13px] text-muted-foreground font-semibold">
          © 2025. All rights reserved by Pimjo.
        </p>
        <div className="flex flex-wrap justify-center gap-8 items-center opacity-40 hover:opacity-100 transition-opacity">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            className="h-4"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
            className="h-5"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg"
            className="h-5"
          />
        </div>
      </div>
    </footer>
  );
}
