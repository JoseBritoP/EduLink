import React from "react";
import LandingButton from "./LandingButton";

export default function LearningPlatform() {
  return (
    <section className="flex flex-col items-center justify-center px-2 gap-y-2">
      <h1 className="text-2xl uppercase font-bold text-center">Learning Platform</h1>
      <p className="text-lg font-medium text-gray-800 dark:text-gray-300">
        We want everyone to be able to participate in the teaching proposals.
      </p>
      <p className="text-xl font-medium text-gray-700 dark:text-gray-300">
        For this reason, we have created an educational platform that
        strengthens and enriches the learning and participation of students.
      </p>
      <LandingButton title="Check Learning Platform" href={'/virtual'} className="bg-amber-700 hover:bg-amber-500 dark:bg-amber-600 dark:hover:bg-amber-700 dark:text-amber-50"/>
    </section>
  );
}
