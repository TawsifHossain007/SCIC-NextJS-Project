import About from "@/components/Home/About";
import Banner from "@/components/Home/Banner";
import CTA from "@/components/Home/CTA";
import FeaturedService from "@/components/Home/FeaturedService";
import Overview from "@/components/Home/Overview";
import Partners from "@/components/Home/Partners";
import Testimonials from "@/components/Home/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-20">
      <section>
        <Banner></Banner>
      </section>
      <section>
        <About></About>
      </section>
      <section>
        <FeaturedService></FeaturedService>
      </section>
      <section>
        <Overview></Overview>
      </section>
      <section>
        <CTA></CTA>
      </section>
      <section>
        <Partners></Partners>
      </section>
      <section>
        <Testimonials></Testimonials>
      </section>
    </div>
  );
}
