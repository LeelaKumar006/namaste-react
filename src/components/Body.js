import { useState } from "react";
import resList from "../utils/mockData";
import ResturantCard from "./ResturantCard";

const Body = () => {
  const [topRestaurants, setTopRestaurants] = useState(resList);
  const clickHandler = () => {
    setTopRestaurants(() =>
      topRestaurants.filter((res) => res.data.avgRating > 4)
    );
  };
  return (
    <div className="body">
      <div className="search">
        <button onClick={clickHandler}>Top Resturants</button>
      </div>
      <div className="res-container">
        {topRestaurants.map((restaurants) => (
          <ResturantCard key={restaurants.data.id} resData={restaurants} />
        ))}
      </div>
    </div>
  );
};
export default Body;
