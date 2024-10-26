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
// import { ModeToggle } from "../ui/ToggleDarkMode";

type SectionsType = {
  title: string;
  catalog?: {
    subTitle: string;
    href: string;
  }[];
}[];

const sections: SectionsType = [
  {
    title: "Home",
  },
  {
    title: "About Us",
    catalog: [
      {
        subTitle: "Presentation",
        href: "/",
      },
      {
        subTitle: "History",
        href: "/",
      },
      {
        subTitle: "Authorities",
        href: "/",
      },
      {
        subTitle: "Ideary",
        href: "/",
      },
      {
        subTitle: "Chaplaincy",
        href: "/",
      },
      {
        subTitle: "Pedagogical Proposal",
        href: "/",
      },
      {
        subTitle: "Dr. Albert Scheweitzer",
        href: "/",
      },
    ],
  },
  {
    title: "Contact",
    catalog: [
      {
        subTitle: "High School",
        href: "/",
      },
      {
        subTitle: "Administration",
        href: "/",
      },
      {
        subTitle: "Facebook",
        href: "/",
      },
      {
        subTitle: "Solidarity community",
        href: "/",
      },
    ],
  },
  {
    title: "Inscriptions",
    catalog: [
      {
        subTitle: "New applicants",
        href: "/",
      },
      {
        subTitle: "School students",
        href: "/",
      },
      {
        subTitle: "Educational contract",
        href: "/",
      },
    ],
  },
  {
    title: "Levels of education",
    catalog: [
      {
        subTitle: "Initial level",
        href: "",
      },
      {
        subTitle: "Elementary level",
        href: "",
      },
      {
        subTitle: "High school level",
        href: "",
      },
    ],
  },
  {
    title: "Learning platform",
  },
];

export function NavItem() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Container */}
        <NavigationMenu className="w-full flex gap-2 justify-between p-2">
          {sections.map((sec, i) => (
            <NavigationMenuItem
              key={i}
              className="bg-sky-200 dark:bg-blue-900 focus:text-[#5d9cff] transition-colors duration-75 ease-out rounded-lg"
            >
              <NavigationMenuTrigger>
                <Link href={"/"} className="uppercase text-xs">
                  {sec.title}
                </Link>
              </NavigationMenuTrigger>
              {sec.catalog && (
                <NavigationMenuContent className="w-full p-2 bg-gray-50 dark:bg-[#151825]">
                  {sec.catalog.map((cat, i) => (
                    <ul
                      key={i}
                      className="grid gap-1 p-1 w-[400px] md:w-[500px] lg:w-[600px]"
                    >
                      <ListItem
                        key={cat.subTitle}
                        title={cat.subTitle}
                        href={cat.href}
                        className="
                        transition-colors duration-200 ease-in-out
                        hover:text-sky-900 hover:bg-sky-200 
                        dark:hover:text-sky-400 dark:hover:bg-niceGray
                         font-bold uppercase text-base"
                      />
                    </ul>
                  ))}
                </NavigationMenuContent>
              )}
            </NavigationMenuItem>
          ))}
          {/* <ModeToggle /> */}
        </NavigationMenu>
        {/*  */}

        {/*  */}
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
