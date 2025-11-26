import FeaturedGear from "@/Home/FeaturedGear";
import Hero from "@/Home/Hero";
import LatestNews from "@/Home/LatestNews";

export default function Home() {
  return (
    <div>
      <div>
        <Hero></Hero>
        <LatestNews></LatestNews>
        <FeaturedGear></FeaturedGear>
      </div>
    </div>
  );
}