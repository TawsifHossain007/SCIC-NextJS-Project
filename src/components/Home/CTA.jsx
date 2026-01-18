"use client"
import React from "react";
import { useRouter } from "next/navigation";

const CTA = () => {
  const router = useRouter();

  const handleBookNow = () => {
    router.push("/services"); // redirect to your services or booking page
  };

  return (
    <section className="bg-primary w-11/12 mx-auto rounded-xl text-white py-20">
      <div className="container mx-auto px-6 text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold">
          Need Trusted Care at Home?
        </h2>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
          Whether it’s babysitting, elderly care, or special home care, we make
          it easy and safe to hire the right caretaker for your family.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <button
            onClick={handleBookNow}
            className="btn btn-lg btn-secondary text-white hover:bg-white hover:text-primary transition-all"
          >
            Book a Caretaker
          </button>

          <button
            className="btn btn-lg btn-ghost border border-white hover:bg-white hover:text-primary transition-all"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Optional decorative shapes */}
      <div className="absolute -bottom-10 left-0 w-full overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-20"
        >
          <path
            d="M0 0H1440V60C1200 100 600 0 0 60V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default CTA;
