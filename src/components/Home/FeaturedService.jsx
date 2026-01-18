import React from "react";
import fs from "fs";
import path from "path";
import ServiceCard from "../Cards/ServiceCard";

const FeaturedService = async () => {
  // Read services data from the JSON file
  const filePath = path.join(process.cwd(), "public", "services.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const services = JSON.parse(fileContents);

  const featuredServices = services
    .filter((service) => service.isActive)
    .slice(0, 8);

  return (
    <div className=" w-11/12 mx-auto">
      <h1 className="font-bold text-4xl mb-10 text-center">Our Featured Services</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {featuredServices.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedService;
