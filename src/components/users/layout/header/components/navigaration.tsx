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
import Link from "next/link";

const menuData = [
  {
    title: "About",
    items: [
      { title: "About PAIS", href: "/about" },
      {
        title: "Accreditation & Membership",
        href: "/accreditation-membership",
      },
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
      { title: "Open House & School Tour", href: "/open-house-school-tour" },
    ],
  },
  {
    title: "Student Life",
    items: [
      {
        title: "Student Development & Counselling",
        href: "/student-development-counselling",
      },
      {
        title: "Student Leadership & Engagement",
        href: "/student-leadership-engagement",
      },
      {
        title: "Parents & Faculty Community",
        href: "/parents-faculty-community",
      },
      { title: "Alumni Network", href: "/alumni-network" },
      { title: "Summer Programs", href: "/pais-in-wonderland-summer-camp" },
      { title: "Sports", href: "/sports" },
    ],
  },
  {
    title: "News & Events",
    items: [
      { title: "Latest News & Updates", href: "/latest-news-updates" },
      {
        title: "Academic & Activity Calendar",
        href: "/academic-activity-calendar",
      },
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
                    <Link
                      href={item.href}
                      className="block px-3 py-2 rounded-none hover:bg-main-primary hover:text-white"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
        <Link
          href={"/contact"}
          className="block px-10 py-[18px] rounded-none hover:bg-[#FFE8D1] hover:text-main-primary"
        >
          Contact
        </Link>
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
