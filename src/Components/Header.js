import React from "react"; // Importing the React library
import { Icon } from "@iconify/react"; // Importing the Icon component from the "@iconify/react" library
import globeIcon from "@iconify/icons-emojione/globe-showing-americas"; // Importing the globe icon from the "@iconify/icons-emojione" library

const Header = (props) => {
  // Defining a functional component called "Header" that takes in a "props" object
  return (
    // Returning JSX
    <div className="header-bar">
      {" "}
      {/* A div with a class of "header-bar" */}
      <Icon icon={globeIcon} />{" "}
      {/* An Icon component with the "globeIcon" icon */}
      PALE BLUE DOT TRACKER (by NASA EONET API) {/* A text string */}
    </div>
  );
};

export default Header; // Exporting the Header component as the default export of this module
