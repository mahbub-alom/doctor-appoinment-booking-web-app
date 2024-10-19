import { Button } from "@/components/ui/button";
import { GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

const DoctorDetails = ({ doctor }) => {
  const socialMediaList = [
    {
      id: 1,
      icon: "/youtube.png",
      url: "",
    },
    {
      id: 2,
      icon: "/linkedin.png",
      url: "",
    },
    {
      id: 3,
      icon: "/twitter.png",
      url: "",
    },
    {
      id: 4,
      icon: "/facebook.png",
      url: "",
    },
  ];

  return (
    <>
      <div className="grid items-center grid-cols-1 md:grid-cols-3 gap-5 border-[1px] p-5 mt-5 rounded-lg">
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
          <div className="flex gap-3">
            {socialMediaList.map((item, index) => (
              <Image
              key={index}
                className="cursor-pointer"
                src={item.icon}
                width={30}
                height={30}
                alt="social icon"
              />
            ))}
          </div>
          <Button className="mt-3 rounded-full">Book Appointment</Button>
        </div>
      </div>
      {/* About Doctor */}
      <div className="p-3 border-[1px] rounded-lg mt-5">
        <h2 className="font-bold text-[20px]">About Me</h2>
        <p className="text-gray-500 tracking-wide mt-2">{doctor.About}</p>
      </div>
    </>
  );
};

export default DoctorDetails;
