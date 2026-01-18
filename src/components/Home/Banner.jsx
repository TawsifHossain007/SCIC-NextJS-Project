import BannerSlider from "./BannerSlider";
import fs from 'fs';
import path from 'path';

const Banner = async () => {
  // Read services data from the JSON file
  const filePath = path.join(process.cwd(), 'public', 'services.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const services = JSON.parse(fileContents);
  
  const activeServices = services?.filter((s) => s.isActive);

  // Convert MongoDB objects to plain objects (not needed for JSON data, but keeping for consistency)
  const serializedServices = activeServices?.map(service => ({
    _id: service._id,
    name: service.name,
    slug: service.slug,
    category: service.category,
    pricePerHour: service.pricePerHour,
    pricePerDay: service.pricePerDay,
    shortDescription: service.shortDescription,
    description: service.description,
    features: service.features,
    image: service.image,
    isActive: service.isActive
  }));

  return <BannerSlider services={serializedServices} />;
};

export default Banner;
