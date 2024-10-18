"use client";
import DoctorList from "@/app/_components/DoctorList";
import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";

const Search = ({ params }) => {
  const [doctorList,setDoctorList]=useState([])
  console.log(doctorList)
  useEffect(() => {
    getDoctor();
  }, []);

  const getDoctor = () => {
    GlobalApi.getDoctorByCategory(params.cname).then((resp) =>
      setDoctorList(resp?.data?.data)
    );
  };

  return (
    <div className="mt-5">
      <DoctorList heading={params.cname} doctorList={doctorList}/>
    </div>
  );
};

export default Search;
