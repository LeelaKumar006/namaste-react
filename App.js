import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  -Search
 *  -ResturantContainer
 *    -ResturantCard
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 */
const resList = [
  {
    data: {
      id: "1",
      name: "KFC",
      cuisines: ["Burgers", "Biryani", "American", "Snakcs", "FastFood"],
      deliveryTime: 36,
      costForTwo: 100000,
      avgRating: "3.8",
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
    },
  },
  {
    data: {
      id: "2",
      name: "MEGHANA FOODS",
      cuisines: ["Burgers", "Biryani", "American", "Snakcs", "FastFood"],
      deliveryTime: 36,
      costForTwo: 20000,
      avgRating: "3.3",
      cloudinaryImageId: "cxuc9twiuna4m4wimjg9",
    },
  },
  {
    data: {
      id: "3",
      name: "BBQ",
      cuisines: ["Burgers", "Biryani", "American", "Snakcs", "FastFood"],
      deliveryTime: 36,
      costForTwo: 60000,
      avgRating: "2.8",
      cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
    },
  },
  {
    data: {
      id: "4",
      name: "Kannur Food Point",
      cuisines: ["Burgers", "Biryani", "American", "Snakcs", "FastFood"],
      deliveryTime: 36,
      costForTwo: 80000,
      avgRating: "2.8",
      cloudinaryImageId: "7abb5ebe9ea3e0bf5e9edc241d1cba32",
    },
  },
  {
    data: {
      id: "5",
      name: "ROTI WALA",
      cuisines: ["Burgers", "Biryani", "American", "Snakcs", "FastFood"],
      deliveryTime: 36,
      costForTwo: 120000,
      avgRating: "4.8",
      cloudinaryImageId: "a2feeb23ecc230bd2b17cba73ebd2734",
    },
  },
  {
    data: {
      id: "6",
      name: "BURGER KING",
      cuisines: ["Burgers", "Biryani", "American", "Snakcs", "FastFood"],
      deliveryTime: 36,
      costForTwo: 140000,
      avgRating: "3.6",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    },
  },
  {
    data: {
      id: "7",
      name: "SUBWAY",
      cuisines: ["Burgers", "Biryani", "American", "Snakcs", "FastFood"],
      deliveryTime: 36,
      costForTwo: 20000,
      avgRating: "3.9",
      cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
    },
  },
  {
    data: {
      id: "8",
      name: "MR.PULAO",
      cuisines: ["Burgers", "Biryani", "American", "Snakcs", "FastFood"],
      deliveryTime: 36,
      costForTwo: 50000,
      avgRating: "5",
      cloudinaryImageId: "937eb0f1857c97c4c0c3ad5fe41b9d6b",
    },
  },
  {
    data: {
      id: "9",
      name: "BIRYANI WALA",
      cuisines: ["Burgers", "Biryani", "American", "Snakcs", "FastFood"],
      deliveryTime: 36,
      costForTwo: 60000,
      avgRating: "4.5",
      cloudinaryImageId: "lkz8fno9wjvtnn0wbd2q",
    },
  },
];
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ychB0gzKUiciTunIPeII_aIoptW3k81YQpa0wryEFA&s"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResturantCard = (props) => {
  const {
    name,
    cuisines,
    deliveryTime,
    costForTwo,
    avgRating,
    cloudinaryImageId,
  } = props?.resData?.data;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(" ,")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo / 100}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">SeachBar</div>
      <div className="res-container">
        {resList.map((restaurants) => (
          <ResturantCard key={restaurants.data.id} resData={restaurants} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
