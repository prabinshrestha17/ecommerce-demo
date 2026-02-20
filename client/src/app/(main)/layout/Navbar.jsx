"use client";

import React from "react";
import Link from "next/link";
import { Search, User, Heart, ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/app/(main)/components/ui/button";
import { Badge } from "@/app/(main)/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/app/(main)/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/app/(main)/components/ui/navigation-menu";

const pagesItems = [
  { title: "Dashboard", href: "/dashboard" },
  { title: "Analytics", href: "/analytics" },
  { title: "Settings", href: "/settings" },
];

export default function Navbar() {
  return (
    <header className="w-full bg-background sticky top-0 left-0 right-0 z-50">
      <div className="bg-primary text-primary-foreground py-2 px-6 md:px-16 flex justify-between items-center text-[11px] font-medium">
        <p>Get free delivery on orders over $80</p>
        <div className="hidden sm:flex items-center gap-6">
          <Link href="/register" className="hover:opacity-80">
            Create an account
          </Link>
          <span className="opacity-20">|</span>
          <Link href="/login" className="hover:opacity-80">
            Sign In
          </Link>
        </div>
      </div>

      <nav className="border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 h-20 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-primary p-2.5 rounded-xl text-primary-foreground transition-transform group-hover:scale-105">
              <ShoppingBag size={22} />
            </div>
            <div className="flex flex-col -space-y-1">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-2xl text-foreground tracking-tight">
                  Cozy
                </span>
                <Badge className="h-4 px-1 text-[9px] bg-primary text-white border-none font-bold uppercase">
                  Demo
                </Badge>
              </div>
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">
                Commerce
              </span>
            </div>
          </Link>

          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <Link href="/" passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} font-bold text-primary`}
                    >
                      Popular
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/shop" passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} font-bold text-foreground`}
                    >
                      Shop
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-bold text-foreground">
                    Pages
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-1 p-3 bg-popover rounded-lg border border-border">
                      {pagesItems.map(item => (
                        <li key={item.title}>
                          <Link href={item.href} passHref>
                            <NavigationMenuLink className="block rounded-md p-3 leading-none no-underline transition-colors hover:bg-muted font-medium text-foreground">
                              {item.title}
                            </NavigationMenuLink>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} font-bold text-foreground`}
                    >
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-foreground"
              >
                <Search size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-foreground"
              >
                <User size={20} />
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative cursor-pointer p-2">
                <Heart
                  size={21}
                  className="text-foreground hover:text-destructive transition-colors"
                />
                <Badge className="absolute top-0 right-0 h-4 w-4 p-0 flex items-center justify-center bg-destructive text-[9px] text-white">
                  0
                </Badge>
              </div>
              <div className="relative cursor-pointer p-2">
                <ShoppingBag
                  size={21}
                  className="text-foreground hover:text-primary transition-colors"
                />
                <Badge className="absolute top-0 right-0 h-4 w-4 p-0 flex items-center justify-center bg-primary text-[9px] text-primary-foreground">
                  3
                </Badge>
              </div>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu size={22} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 mt-12">
                  <Link href="/" className="text-2xl font-bold">
                    Popular
                  </Link>
                  <Link href="/shop" className="text-2xl font-bold">
                    Shop
                  </Link>
                  <Link href="/contact" className="text-2xl font-bold">
                    Contact
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
