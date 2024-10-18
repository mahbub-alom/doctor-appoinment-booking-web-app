"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import DoctorDetails from "../_components/DoctorDetails";

const Details = ({ params }) => {
  const [doctor, setDoctor] = useState();
  console.log(doctor);
  useEffect(() => {
    getDoctorById();
  }, []);
  const getDoctorById = () => {
    GlobalApi.getDoctorById(params.recordid).then((resp) =>
      setDoctor(resp.data.data)
    );
  };
  return (
    <div className="p-5 md:px-20">
      <h2 className="font-bold text-[22px]">Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-4">
        {/* doctor details */}
        <div className="col-span-3">
          {doctor && <DoctorDetails doctor={doctor} />}
        </div>
        {/* doctor suggestions */}
        <div></div>
      </div>
    </div>
  );
};

export default Details;
