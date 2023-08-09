// Importing required modules and dependencies
// This version can add clusters to the map using useSupperCluster which is a React hook and we need to install Supercluster first
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import useSuperCluster from "use-supercluster";
import React, { useRef, useState, useEffect } from "react";
import LocationInfoBox from "./LocationInfoBox";

//// Importing context
import { useMainContext } from "../Context/Context";

// Defining the Map component
const Map = ({ center, eventData }) => {
  // Using context to get the selected event
  const { selectedEvent } = useMainContext();

  // Creating references and state variables
  const mapRef = useRef();
  const [zoom, setZoom] = useState(1);
  const [bounds, setBounds] = useState(null);
  // info box
  const [locationInfo, setLocationInfo] = useState(null);

  // Index for referencing event data categories
  const eventDataIndex = {
    wildfires: "Wildfires",
    severeStorms: "Severe Storms",
    volcanoes: "Volcanoes",
    seaLakeIce: "Sea and Lake Ice",
  };
  //Create an Array of its keys
  let eventDataIndexKey = Object.keys(eventDataIndex);

  // Creating an array of point features from eventData. This may not be necessary for Search component later.
  const points = eventData.map((event) => ({
    type: "Feature",
    properties: {
      cluster: false,
      eventKey: event.id,
      eventTitle: event.title,
      eventType: event.categories[0].id,
      eventDate: event.geometry[0].date.slice(0, 10),
    },
    geometry: {
      type: "Point",
      coordinates: [
        event.geometry[0].coordinates[0],
        event.geometry[0].coordinates[1],
      ],
    },
  }));

  // Getting clusters using the useSuperCluster hook
  const { clusters, supercluster } = useSuperCluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 },
  });

  // Effect to handle centering the map on selected event
  useEffect(() => {
    if (selectedEvent !== null) {
      let longitude = selectedEvent.geometry[0].coordinates[0];
      let latitude = selectedEvent.geometry[0].coordinates[1];
      mapRef.current.panTo({ lat: latitude, lng: longitude });
      mapRef.current.setZoom(10);
    }
  }, [selectedEvent]);

  // Rendering the component
  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        center={center}
        zoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
        }}
        onChange={({ zoom, bounds }) => {
          setZoom(zoom);
          setBounds([
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat,
          ]);
        }}
        onClick={() => {
          setLocationInfo(null);
        }}
        onDrag={() => setLocationInfo(null)}
      >
        {/* Mapping through clusters and single points */}
        {clusters.map((cluster) => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const { cluster: isCluster, point_count: pointCount } =
            cluster.properties;
          //Used for icon type
          const clusterId = cluster.properties.eventType;
          // Handling cluster markers
          if (isCluster) {
            // Adjusting cluster marker size based on point count. Can't exceed 40 px
            let changeSize = Math.round((pointCount / points.length) * 100);
            let addSize = Math.min(changeSize * 10, 40);
            return (
              <section key={cluster.id} lat={latitude} lng={longitude}>
                <div
                  className="cluster-marker"
                  style={{
                    width: `${addSize + changeSize}px`,
                    height: `${addSize + changeSize}px`,
                  }}
                  onClick={() => {
                    const expansionZoom = Math.min(
                      supercluster.getClusterExpansionZoom(cluster.id),
                      20
                    );
                    mapRef.current.setZoom(expansionZoom);
                    mapRef.current.panTo({ lat: latitude, lng: longitude });
                  }}
                >
                  {pointCount}
                </div>
              </section>
            );
          }
          // Handling single point markers (which will show up as unique location markers)
          if (
            eventDataIndexKey.includes(clusterId) !== -1 &&
            cluster.geometry.coordinates.length === 2
          ) {
            return (
              <LocationMarker
                lat={latitude}
                lng={longitude}
                id={clusterId}
                key={cluster.properties.eventKey}
                onClick={() => {
                  setLocationInfo({
                    id: cluster.properties.eventKey,
                    type: cluster.properties.eventType,
                    title: cluster.properties.eventTitle,
                    date: cluster.properties.eventDate,
                  });
                }}
              />
            );
          }
        })}
      </GoogleMapReact>
      {/* Displaying location info box if available */}
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

// Default center coordinates, no default zoom.
Map.defaultProps = {
  center: {
    lat: 29.7604,
    lng: -95.3698,
  },
};
export default Map;
