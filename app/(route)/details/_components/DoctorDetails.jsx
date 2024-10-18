import { GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

const DoctorDetails = ({ doctor }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {/* doctor image */}
      <div>
        <Image
          src={doctor?.image?.url}
          alt="doctor image"
          width={200}
          height={200}
          className="rounded-lg w-full h-[280px] object-contain"
        />
      </div>
      {/* doctor info */}
      <div className="col-span-2 mt-5 flex flex-col gap-3 items-baseline">
        <h2 className="font-bold text-2xl">{doctor?.Name}</h2>
        <h2 className="flex gap-2 text-gray-500 text-md">
          <GraduationCap />
          <span>{doctor?.Years_of_Experience} of Experience</span>
        </h2>
        <h2 className="text-md flex gap-3 text-gray-500">
          <MapPin />
          <span>{doctor?.Address}</span>
        </h2>
      </div>
    </div>
  );
};

export default DoctorDetails;
