import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

const carouselItems = [
  {
    title: "A project focused on inclusion",
    label: "Learn about our educational proposal",
    href: "/",
  },
  {
    title: "Respecting and valuing differences",
    label: "Learn about our educational proposal",
    href: "/",
  },
  {
    title: "Education and Collaborative Work",
    label: "Request a registration appointment",
    href: "/",
  },
];

export function CarouselComponent() {
  // TODO:Images
  return (
    <section className="flex flex-col w-full justify-center items-center p-4">
      <h1 className="text-4xl uppercase font-bold text-gray-800 dark:text-gray-200 pb-2">Rules</h1>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full max-w-[420px] bg-sky-500"
      >
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} className="w-full rounded-full bg-sky-400 dark:bg-sky-200">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col gap-y-5 aspect-square items-center justify-center p-6">
                    <span className="text-xl font-semibold uppercase">
                      {item.title}
                    </span>
                    <Link
                      href={item.href}
                      className="px-2 py-4 bg-sky-500 hover:bg-sky-700 dark:bg-sky-700 dark:hover:bg-sky-600 transition-colors duration-200 ease-in cursor-pointer rounded-lg text-gray-200"
                    >
                      {item.label}
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
