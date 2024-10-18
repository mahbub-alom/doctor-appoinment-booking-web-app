"use client"
import { Button } from "@/components/ui/button";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";
import { useEffect, useState } from "react";
import GlobalApi from "./_utils/GlobalApi";

export default function Home() {

  const [allDoctor, setAllDoctor] = useState([]);

  useEffect(() => {
    getDoctorList();
  }, []);

  const getDoctorList = () => {
    GlobalApi.getDoctor().then((resp) => setAllDoctor(resp.data.data));
  };


  return (
    <div>
      {/* hero section */}
      <Hero />
      {/* category+search */}
      <CategorySearch />
      {/* Doctor List  */}
      <DoctorList doctorList={allDoctor}/>
    </div>
  );
}
