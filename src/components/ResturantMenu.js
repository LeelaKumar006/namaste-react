import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const getData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  useEffect(() => {
    getData();
  }, []);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
    cuisines,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards, categories } =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  return (
    <div>
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <h3>{`${avgRatingString} (${totalRatingsString}) ${costForTwoMessage}`}</h3>
      {itemCards && <h2>{`Recommended(${itemCards.length})`}</h2>}
      {categories && (
        <h2>{`Recommended(${categories[0].itemCards.length})`}</h2>
      )}
      <ul>
        {itemCards
          ? itemCards.map((item) => (
              <li key={item.card.info.id}>
                <div>{item.card.info.name}</div>
                <div>
                  Rs.
                  {item.card.info.defaultPrice / 100 ||
                    item.card.info.price / 100}
                </div>
              </li>
            ))
          : /** for some hotels categories are getting instead of itemCards */
            categories.map((item) => (
              <li key={item.itemCards[0].card.info.id}>
                <div>{item.itemCards[0].card.info.name}</div>
                <div>
                  Rs.
                  {item.itemCards[0].card.info.defaultPrice / 100 ||
                    item.itemCards[0].card.info.price / 100}
                </div>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default ResturantMenu;
