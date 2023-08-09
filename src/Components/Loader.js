// Import React library
import React from "react";

// Import loading image
import loadingimage from "./rotating_earth.gif";

// Define Loader component
const Loader = () => {
  return (
    // Loader div container
    <div className="loader">
      // Loading image
      <img src={loadingimage} alt="Loading"/>
      <br />
      // Loading text
      <h1>Loading Page...</h1>
    </div>
  );
};

// Export Loader component
export default Loader;
