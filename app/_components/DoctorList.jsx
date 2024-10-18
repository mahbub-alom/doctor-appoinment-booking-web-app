import Image from "next/image";

const DoctorList = ({doctorList,heading="Popular Doctors"}) => {

  return (
    <div className="mb-10 px-8">
      <h2 className="font-bold text-xl text-center">{heading}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-4">
        {doctorList.length > 0
          ? doctorList.map((doctor, index) => (
              <div
                key={index}
                className="border-[1px] rounded-lg p-3 cursor-pointer hover:border-primary hover:shadow-sm transition-all ease-in-out"
              >
                <Image
                  className="h-[200px] object-contain w-full rounded-lg"
                  src={doctor?.image?.url}
                  alt="doctor"
                  width={500}
                  height={200}
                />
                <div className="mt-3 items-baseline flex flex-col gap-2">
                  <h2 className="text-[10px] bg-blue-100 p-1 rounded-full px-2 text-primary">
                    {doctor?.categories[0]?.Name}
                  </h2>
                  <h2 className="font-bold">{doctor?.Name}</h2>
                  <h2 className="text-primary text-sm">
                    {doctor?.Years_of_Experience}
                  </h2>
                  <h2 className="text-gray-500 text-sm">{doctor?.Address}</h2>
                  <h2 className="p-2 px-3 border-[1px] border-primary text-primary cursor-pointer rounded-full w-full text-center text-[11px] mt-2 hover:bg-primary hover:text-white">
                    Book Now
                  </h2>
                </div>
              </div>
            ))
          : // skeleton effect
            [1, 2, 3, 4, 5, 6,7,8,9,10].map((item, index) => (
              <div className="h-[220px] bg-slate-200 w-full rounded-lg animate-pulse"></div>
            ))}
      </div>
    </div>
  );
};

export default DoctorList;
