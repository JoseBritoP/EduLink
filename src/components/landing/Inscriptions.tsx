import React from "react";
import LandingButton from "./LandingButton";

export default function Inscriptions() {
  return (
    <section className="flex flex-col items-center justify-center px-2 gap-y-2">
      <h1 className="text-2xl font-semibold uppercase">Inscriptions</h1>
      <p className="text-gray-800 dark:text-gray-300 text-lg text-start">
        The arrival of new students to our school is a very special moment that
        we take care of very carefully. To request an enrollment appointment
        follow this page
      </p>

      <LandingButton title="Click here to continue the inscription" href="/new-inscriptions" className="bg-sky-700 hover:bg-sky-500 text-gray-200
    dark:bg-sky-500 dark:hover:bg-sky-600 dark:text-gray-200"/>
    </section>
  );
}
