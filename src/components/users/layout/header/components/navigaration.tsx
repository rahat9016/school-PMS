"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const menuData = [
  {
    title: "Components",
    items: [
      { title: "Button", href: "/components/button" },
      { title: "Card", href: "/components/card" },
      { title: "Modal", href: "/components/modal" },
    ],
  },
  {
    title: "Utilities",
    items: [
      { title: "Hooks", href: "/utilities/hooks" },
      { title: "Helpers", href: "/utilities/helpers" },
    ],
  },
  {
    title: "Documentation",
    items: [
      { title: "Getting Started", href: "/docs/getting-started" },
      { title: "API Reference", href: "/docs/api" },
    ],
  },
];
export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuData.map((menu) => (
          <NavigationMenuItem key={menu.title}>
            <NavigationMenuTrigger className="bg-white hover:bg-[#FFE8D1] active:bg-[#FFE8D1] focus:bg-[#FFE8D1] py-[30px] px-6">
              {menu.title}              
            </NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="w-[256px]">
                  {menu.items.map((item) => (
                    <li key={item.title}>
                      <a
                        href={item.href}
                        className="block px-3 py-2 rounded-none hover:bg-main-primary"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
