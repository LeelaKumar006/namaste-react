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
const TileComponent = () => {
  return (
    <div id="tile-container">
      <h1 className="Composition">Component Composition!!</h1>
    </div>
  );
};
const Header = () => {
  return (
    <div className="title">
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
    </div>
  );
};
const HeadingComponent = () => {
  return (
    <div id="container">
      <Header />
      <TileComponent />
      <h1 className="heading">Namaste React Functional Component</h1>
    </div>
  );
};
console.log(typeof HeadingComponent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
