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
    title: "About",
    items: [
      { title: "About PAIS", href: "/about" },
      { title: "Accreditation & Membership", href: "/accreditation-membership" },
      { title: "School Board", href: "/school-board" },
      { title: "Facilities & Safety", href: "/facilities-safety" },
      { title: "ESLRs", href: "/ESLRs" },
    ],
  },
  {
    title: "Academic & Admission",
    items: [
      { title: "Curriculum Overview", href: "/curriculumOverview" },
      { title: "Kindergarten & Primary", href: "/kindergarten-primary" },
      { title: "Secondary & IB Programs", href: "/secondary-ib-programs" },
      { title: "Exams & Assessments", href: "/exams-assessments" },
      { title: "After-School & Enrichment", href: "/after-school-enrichment" }, 
      { title: "School Lunch", href: "/school-lunch" },
      { title: "Admissions Overview", href: "/admission-overview" },
      { title: "Enrollment & Scholarship", href: "/enrollment-scholarship" },
    ],
  },
  {
    title: "Student Life",
    items: [
      { title: "Getting Started", href: "/docs/getting-started" },
      { title: "API Reference", href: "/docs/api" },
    ],
  },
  {
    title: "News & Events",
    items: [
      { title: "Getting Started", href: "/docs/getting-started" },
      { title: "API Reference", href: "/docs/api" },
    ],
  },
];
export function HeaderNavigationMenu() {
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
