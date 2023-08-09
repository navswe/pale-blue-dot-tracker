import Loader from './Components/Loader';
import Map from './Components/Map';
import Header from './Components/Header';
import Search from './Components/Search';
import {useState, useEffect} from 'react';

//Main Context
import {useMainContext} from './Context/Context'

/**
 * The main component of the application.
 * @returns {JSX.Element} The JSX element to be rendered.
 */
function App() {
  const { setEventData, reRenderMarkers} = useMainContext();
  const [loading, setLoading] = useState(false);
  const [renderEvent, setRenderEvent] = useState([]);

  useEffect(() => {
    /**
     * Fetches the event data from the NASA API and sets the state variables accordingly.
     */
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v3/events");
      //Extract the Array contained in the 'events' field.
      const {events} = await res.json();
      //Event data is globally accessible. But 'renderEvent' is just to render out the MAP with the markers
      setEventData(events);
      setRenderEvent(events);
      setLoading(false);
    }
    fetchEvents();
  }, [])

  useEffect(() => {
    /**
     * Updates the 'renderEvent' state variable when the 'reRenderMarkers' variable changes.
     */
    if(reRenderMarkers !== null){
      setRenderEvent(reRenderMarkers);
    }
  }, [reRenderMarkers])


  return (
    <div>
    <Header />
      {!loading ? <Map eventData={renderEvent} /> : <Loader />}
    {!loading && <Search />}
    </div>
  );
}

export default App;
