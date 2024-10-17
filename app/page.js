import { Button } from "@/components/ui/button";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";

export default function Home() {
  return (
    <div>
      {/* hero section */}
      <Hero />
      {/* category+search */}
      <CategorySearch />
    </div>
  );
}
