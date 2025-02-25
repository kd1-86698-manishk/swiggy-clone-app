import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Card from "./Card";

function TopRest() {
  const [data, setData] = useState([]);
  const fetchTopResturant = async () => {
    const response = await fetch("https://swiggy-clone-app-backend-j6xi.onrender.com/top-restaurant-chains");
    const apiData = await response.json();
    setData(apiData);
  };

  useEffect(() => {
    fetchTopResturant();
  }, []);

  return (
    <>
      <div className="max-w-[1200px] mx-auto items-center px-2 ">
        <div className="my-5 flex items-center justify-between">
          <div className="text-[25px] font-bold"> Top resturant in Pune</div>
          <div className="flex">
            <div
              className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
              
            >
              <FaArrowLeft />
            </div>
            <div
              className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
              
            >
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="flex gap-5 overflow-hidden">
          {data.map((d, i) => {
            return <Card width="w-full md:w-[273px]" {...d} key={i} />;
          })}
        </div>
        <hr className="my-4 border-{1px}" />
      </div>
    </>
  );
}

export default TopRest;
