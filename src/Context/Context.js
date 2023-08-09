
import React, {useContext, useState} from 'react';

/**
 * A context object for sharing data between components.
 * @typedef {Object} MainContext
 * @property {Array} eventData - All of the data from NASA EONET.
 * @property {Function} setEventData - A function to set the eventData state.
 * @property {Object} selectedEvent - The event that the user wants to go to.
 * @property {Function} setSelectedEvent - A function to set the selectedEvent state.
 * @property {Boolean} reRenderMarkers - A flag to re-render markers because user has changed filter option.
 * @property {Function} setReRenderMarkers - A function to set the reRenderMarkers state.
 */

const mainContext = React.createContext();

/**
 * A hook to access the MainContext object.
 * @function useMainContext
 * @returns {MainContext} The MainContext object.
 */
export function useMainContext() {
    return useContext(mainContext);
}

/**
 * A provider component that wraps the children components and provides the MainContext object.
 * @function ContextProvider
 * @param {Object} props - The component props.
 * @param {Object} props.children - The child components.
 * @returns {JSX.Element} The JSX element.
 */
export function ContextProvider({children}) {
    // All of the data from NASA EONET
    const [eventData, setEventData] = useState([]);
    // Used to store the event that the user wants to go to
    const [selectedEvent, setSelectedEvent] = useState(null);
    // Need to re-render markers because user has changed filter option
    const [reRenderMarkers, setReRenderMarkers] = useState(null);

    /**
     * The MainContext object.
     * @type {MainContext}
     */
    const value = {
        eventData,
        setEventData,
        selectedEvent,
        setSelectedEvent,
        reRenderMarkers,
        setReRenderMarkers
    }

    return(
        <mainContext.Provider value={value}>
            {children}
        </mainContext.Provider>
    )
}