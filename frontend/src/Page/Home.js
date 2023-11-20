import React, { useEffect, useState } from "react";
import Option from "../components/Option";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:3001/api/data/service");
    setData(res.data);
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="flex flex-col gap-3 py-20 px-5">
      <div className="text-4xl font-semibold">
        Book an appointment for an in-clinic consultation
      </div>
      <div className="text-2xl">
        Find experienced doctors across all specialties
      </div>
      <div className="flex justify-between mt-4">
        {data.map((data, index) => (
          <Option key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Home;
