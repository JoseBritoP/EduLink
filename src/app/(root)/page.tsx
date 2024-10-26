import { CarouselComponent } from "@/components/landing/Carousel";
import Inscriptions from "@/components/landing/Inscriptions";
import LearningPlatform from "@/components/landing/LearningPlatform";
import LevelsOfEducation from "@/components/landing/LevelsOfEducation";
import Solidary from "@/components/landing/Solidary";
import React from "react";

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center items-center flex-1 py-5 dark:bg-darkGray gap-y-10">
      <CarouselComponent />
      <LevelsOfEducation/>
      <Inscriptions/>
      <Solidary/>
      <LearningPlatform/>
    </main>
  );
}
