/**
 * A functional component that displays information about a location event.
 * @param {Object} info - An object containing information about the location event.
 * @param {string} info.id - The ID of the location event.
 * @param {string} info.type - The type of the location event.
 * @param {string} info.title - The title of the location event.
 * @param {string} info.date - The date of the location event.
 * @returns {JSX.Element} - A div element containing the location event information.
 */
import React from "react";

function LocationInfoBox({ info }) {
  return (
    <div className="location-info">
      <h2>EVENT INFO</h2>
      <ul>
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          TYPE: <strong>{info.type}</strong>
        </li>
        <li>
          TITLE: <strong>{info.title}</strong>
        </li>
        <li>
          DATE: <strong>{info.date}</strong>
        </li>
      </ul>
    </div>
  );
}

export default LocationInfoBox;
