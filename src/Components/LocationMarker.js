/**
 * A marker component that displays an icon based on the type of location.
 * @param {Object} props - The props object containing the latitude, longitude, onClick function, and id of the location.
 * @param {number} props.lat - The latitude of the location.
 * @param {number} props.lng - The longitude of the location.
 * @param {Function} props.onClick - The function to be called when the marker is clicked.
 * @param {string} props.id - The id of the location, used to determine which icon to display.
 * @returns {JSX.Element} - A div containing an icon representing the location.
 */
import React from 'react';
import {Icon} from '@iconify/react';
import fireIcon from '@iconify/icons-emojione/fire';
import volcanoIcon from '@iconify/icons-emojione/volcano';
import stormIcon from '@iconify/icons-emojione/cloud-with-lightning';
import iceIcon from '@iconify/icons-emojione/snowman';

function LocationMarker({lat, lng, onClick, id}) {
    console.log("id", id);
    let renderIcon = null;
    if(id === "wildfires"){
        renderIcon = fireIcon
    }else if (id === "severeStorms"){
        renderIcon = stormIcon
    }else if (id === "volcanoes"){
        renderIcon = volcanoIcon
    }else if (id === "seaLakeIce"){
        renderIcon = iceIcon
    }

    return (
        <div onClick={onClick}>
            <Icon icon={renderIcon} className="location-icon" />
        </div>
    );
}

export default LocationMarker;

