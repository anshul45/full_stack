import React from "react";

const SingleDoctor = ({ data }) => {
  return (
    <div className="flex justify-between items-centerpy-4">
      <div className="flex gap-10 items-center">
        <img
          className="w-44 h-44 rounded-full bg-red-300"
          src={data.img}
          alt="doctor_img"
        />
        <div>
          <div className="text-lg flex flex-col gap-2">
            <div className="text-2xl  text-sky-500">{data.name}</div>
            <div className=" text-zinc-400">{data.profession}</div>
            <div className=" text-zinc-400">{data.experience}</div>
            <div className="flex gap-2">
              <div className=" font-semibold">{data.location}</div>
              <div className="text-center font-light">&#x1F784;</div>
              <div className="w-96">{data.clinicName}</div>
            </div>
            <div className="">₹{data.fee}</div>
            <hr className="border-dashed" />
            <div className="flex gap-7">
              <div className="bg-green-600 text-white font-semibold rounded-md px-3">
                {data.rating}%
              </div>
              <div className="font-medium border-b-2 border-black">
                {data.story} Patient Stories
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-24 items-center gap-3">
        <div className="text-green-600 font-medium">Available Today</div>
        <div className="bg-blue-400 px-12 py-1 leading-4 text-center text-white rounded-md">
          <div className="font-semibold">Book Appointment</div>
          <div className="text-sm font-medium">No Booking fee</div>
        </div>
      </div>
    </div>
  );
};

export default SingleDoctor;
