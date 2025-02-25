import { useEffect, useState } from "react";
import Card from "./Card";

function OnlineDelivery() {
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
      <div className="max-w-[1200px] mx-auto items-center px-2">
        <div className="my-5 flex items-center justify-between">
          <div className="text-[25px] font-bold"> Restaurants with online food delivery in Pune</div>
        </div>
        <div>
            <div className="max-w-[1200px] mx-auto flex my-4">
                <div className="p-3 rounded-md shadow ">Filter</div>
                <div className="p-3 rounded-md shadow ">Sort</div>
                <div className="p-3 rounded-md shadow ">Fast Delivery</div>
                <div className="p-3 rounded-md shadow ">Now on Swiggy</div>
                <div className="p-3 rounded-md shadow ">Rating 4.0+</div>
                <div className="p-3 rounded-md shadow ">Pure Veg</div>
                <div className="p-3 rounded-md shadow ">Offers</div>
                <div className="p-3 rounded-md shadow ">Rs.300-Rs.600</div>
                <div className="p-3 rounded-md shadow ">Less than Rs.300</div>
            </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

            {data.map(
                (d,i)=>{
                    return <Card {...d}/>
                }
            )}
        </div>
      </div>
    </>
  );
}

export default OnlineDelivery;
