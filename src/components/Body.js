import { useState } from "react";
import resList from "../utils/mockData";
import ResturantCard from "./ResturantCard";

const Body = () => {
  const [topRestaurants, setTopRestaurants] = useState(resList);
  const [search, setSearch] = useState("");
  const clickHandler = () => {
    setTopRestaurants(() =>
      topRestaurants.filter((res) => res.data.avgRating > 4)
    );
  };

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="serach"
          onChange={changeHandler}
          value={search}
        />
        <div className="search-btn">
          <button
            onClick={() =>
              setTopRestaurants(
                topRestaurants.filter((res) =>
                  res.data.name.toLowerCase().includes(search.toLowerCase())
                )
              )
            }
          >
            Search
          </button>
        </div>
      </div>
      <div className="res-btn">
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
