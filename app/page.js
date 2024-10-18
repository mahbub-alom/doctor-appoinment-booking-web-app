import { Button } from "@/components/ui/button";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";

export default function Home() {
  return (
    <div>
      {/* hero section */}
      <Hero />
      {/* category+search */}
      <CategorySearch />
      {/* Doctor List  */}
      <DoctorList/>
    </div>
  );
}
