import React from "react";
import { useNavigate } from "react-router-dom";
const Option = ({ data }) => {
  const navigate = useNavigate();
  const handleClick = (route) => {
    const firstPart = route.split("/")[0].toLowerCase();
    navigate(`/${firstPart}`);
  };
  return (
    <div
      className="flex flex-col gap-1 w-[32%] cursor-pointer"
      onClick={() => handleClick(data.title)}
    >
      <img
        className=" w-full h-72 rounded-md"
        src={data.image}
        alt="option_image"
      />
      <h1 className="text-2xl font-semibold">{data.title}</h1>
      <p className="text-[21px]">{data.desc}</p>
    </div>
  );
};

export default Option;
