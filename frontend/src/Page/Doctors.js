import React, { useEffect, useState } from "react";
import SingleDoctor from "../components/SingleDoctor";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Doctors = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [data, setData] = useState([]);

  const getDoctors = async () => {
    const profession = params.id;
    const res = await axios.post(
      "https://full-stack-bvoj.vercel.app/api/data/doctors",
      {
        profession,
      }
    );
    setData(res.data);
  };

  useEffect(() => {
    getDoctors();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="px-24 py-5 flex flex-col items-center">
      <div
        className="bg-green-500 w-fit px-6 py-1 mb-2 font-semibold text-white rounded-lg cursor-pointer text-center"
        onClick={() => navigate("/")}
      >
        Home
      </div>
      {data.map((data, index) => (
        <React.Fragment key={index}>
          <SingleDoctor data={data} />
          <hr className="my-7" />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Doctors;
