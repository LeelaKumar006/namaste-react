import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [topRestaurants, setTopRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const clickHandler = () => {
    setFilteredRestaurants(() =>
      topRestaurants.filter((res) => res.info.avgRating > 4)
    );
  };

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.6287557&lng=79.4191795&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setTopRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return topRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            type="text"
            placeholder="serach"
            onChange={changeHandler}
            value={search}
          />
          <div className="search-btn">
            <button
              onClick={() =>
                setFilteredRestaurants(
                  topRestaurants.filter((res) =>
                    res.info.name.toLowerCase().includes(search.toLowerCase())
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
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurants) => (
          <Link
            key={restaurants.info.id}
            to={"/restaurants/" + restaurants.info.id}
          >
            <ResturantCard resData={restaurants} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
