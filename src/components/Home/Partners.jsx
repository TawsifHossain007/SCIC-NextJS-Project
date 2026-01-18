import React from "react";

// Sample partner logos and stats
const partnerLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
];

const stats = [
  { label: "Families Served", value: "500+" },
  { label: "Registered Caretakers", value: "120+" },
  { label: "Trusted Reviews", value: "350+" },
  { label: "Years of Experience", value: "5+" },
];

const Partners = () => {
  return (
    <section className="py-20 bg-base-100 w-11/12 mx-auto mb-20 rounded-xl">
      <div className="container mx-auto px-6 text-center space-y-10">
        {/* Section Title */}
        <h2 className="text-4xl font-bold">Our Trusted Partners & Stats</h2>
        <p className="max-w-2xl mx-auto text-gray-500">
          We work with trusted organizations and have proudly served hundreds of families.
        </p>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
          {partnerLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner ${index + 1}`}
              className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all"
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="bg-primary/10 p-6 rounded-xl">
              <h3 className="text-3xl font-bold text-primary">{stat.value}</h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
