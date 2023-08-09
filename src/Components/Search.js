import React, { useRef, useState, useEffect } from "react";
//Main Context
import { useMainContext } from "../Context/Context";

function Search(props) {
  const { eventData, setSelectedEvent, setReRenderMarkers } = useMainContext();
  const searchBox = useRef();
  const optionBox = useRef();
  //Matching results
  const [matchEvent, setMatchEvent] = useState(eventData);
  //Handle dropDown
  const [storeSelection, setStoreSelection] = useState("All");

  //Filter eventData
  const filterEventData = (eventData) => {
    //Spread operator so we don't overwrite Reference data
    let filteredEventData = [...eventData];
    if (storeSelection !== "All") {
      filteredEventData = filteredEventData.filter(
        (event) => event.categories[0].title === storeSelection
      );
    }
    return filteredEventData;
  };

  const userSearch = (searchQuery, eventData) => {
    let eventMatch = [];
    let filterdEventData = filterEventData(eventData);
    if (searchQuery.length > 0 && filterdEventData) {
      for (const event in eventData) {
        let eventTitle = filterdEventData[event].title.toLowerCase();
        if (eventTitle.indexOf(searchQuery) !== -1) {
          eventMatch.push(filterdEventData[event]);
        }
      }
      //If search keyword does not match...
      if (eventMatch.length === 0) {
        eventMatch = [
          {
            title:
              "Sorry, there is no available result for this search keyword in the events database.",
            categories: [{ title: "" }],
          },
        ];
      }
      setMatchEvent(eventMatch);
    } else {
      setMatchEvent(filterdEventData);
    }
  };

  useEffect(() => {
    // Sorting and updating map markers based on the selected event type
    // First, filter the event data based on the selected event type
    let filterdEventData = filterEventData(eventData);
    // Update the map markers with the filtered event data
    setReRenderMarkers(filterdEventData);
    // Sorting and updating search results based on the selected event type
    // Now, sort out the search results based on the current search query and filtered event data
    userSearch(searchBox.current.value.toLowerCase(), filterdEventData);
  }, [storeSelection]);

  // Rendering the UI components
  return (
    <>
      {/* Dropdown for selecting event type */}
      <section className="option-container">
        <p>Type:</p>
        <select
          ref={optionBox}
          onChange={() => {
            // Update the selected event type when dropdown value changes
            setStoreSelection(optionBox.current.value);
          }}
        >
          <option value="All">All</option>
          <option value="Wildfires">Wildfires</option>
          <option value="Severe Storms">Severe Storms</option>
          <option value="Volcanoes">Volcanoes</option>
          <option value="Sea and Lake Ice">Sea and Lake Ice</option>
        </select>
      </section>
      {/* Search input for event title */}
      <section className="search-container">
        <p>Event Title Search:</p>
        <input
          type="text"
          onKeyUp={() => {
            let searchQuery = searchBox.current.value.toLowerCase();
            // Wait for the user to finish typing before triggering search
            setTimeout(() => {
              // Check if the search query matches the current input value
              if (searchQuery === searchBox.current.value.toLowerCase()) {
                // Perform search based on the entered query and event data
                userSearch(searchQuery, eventData);
              }
            }, 300);
          }}
          ref={searchBox}
        />
      </section>
      {/* Table displaying the search results */}
      <table className="search-table">
        <tr>
          <th style={{ width: "40%" }}>Title</th>
          <th>Date</th>
          <th>Type</th>
          <th>Location</th>
          <th>Source</th>
        </tr>
        {/* Mapping through matching events and rendering table rows */}
        {matchEvent.map((ev) => {
          return (
            <tr key={ev.id}>
              <td>{ev.title}</td>
              <td>{ev.geometry[0].date.slice(0, 10)}</td>
              <td>{ev.categories[0].title}</td>
              {ev.categories[0].title ? (
                <td>
                  <a
                    href="#"
                    onClick={() => {
                      setSelectedEvent(ev);
                    }}
                  >
                    Click Here
                  </a>
                </td>
              ) : (
                <td></td>
              )}
              <td>
                {ev.sources && ev.sources.length > 0 ? (
                  <a
                    href={ev.sources[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Event Source
                  </a>
                ) : (
                  <span>-</span>
                )}
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default Search;
