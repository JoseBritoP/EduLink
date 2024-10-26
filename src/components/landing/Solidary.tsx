import React from "react";

export default function Solidary() {
  return (
    <section className="flex flex-col items-center justify-center  gap-y-5 w-full bg-yellow-200/70 pb-10 border-t border-b border-t-green-900 border-b-green-900">
      <h1 className="uppercase text-2xl text-center font-semibold px-20 py-10">
        AT SCHWEITZER SCHOOL WE INTEND TO MAKE SOLIDARITY A TRANSVERSAL AND
        INSTITUTIONAL AXIS. WE ALSO OFFER OUR STUDENTS A REAL COMMITMENT TO THE
        SURROUNDING REALITY.
      </h1>
      <div className="flex flex-col items-start gap-y-2 justify-center">
        <p className="text-gray-800 text-xl text-start">
          Respect for individual differences is a foundational characteristic.
        </p>
        <p className="text-gray-800 text-xl text-start">
          We are interested in our students acquiring knowledge, skills and
          values that
        </p>
        <p className="text-gray-800 text-xl text-start">
          will enable them that will allow them to become citizens and leaders
        </p>
        <p className="text-gray-800 text-xl text-start">
          actively and proactively engaged with reality.
        </p>
      </div>
    </section>
  );
}
