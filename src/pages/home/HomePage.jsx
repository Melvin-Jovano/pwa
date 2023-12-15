import { useEffect, useContext, useState, useRef } from "react";
import AppContext from "../../common/context/AppContext";
import EventCard from "../../component/EventCard";
import HomeImg from "../../assets/img/home.png";
import { exploreEvents } from "../../common/api/event";

function HomePage() {
  const { setShowBottomNavbar, setShowLoading } = useContext(AppContext);
  const [location, setLocation] = useState('My Location');
  const [exploreEvent, setExploreEvent] = useState([]);
  const keyword = useRef();

  async function getEvents() {
    setShowLoading(true);
    const events = await exploreEvents({
      title: ''
    });
    
    setExploreEvent(events.data);

    setShowLoading(false);
  }

  useEffect(() => {
    setShowBottomNavbar(true);
    
    getEvents();

    return function cleanup() {
      setShowBottomNavbar(false);
    };
  }, []);

  return (
    <div className="p-3 px-6">
      <div className="flex mt-3">
        <div className="text-slate-400 flex-grow text-sm">Location</div>
        <div><i className="fas fa-bell"></i></div>
      </div>

      <div className="font-semibold my-3">
        <i className="fas fa-location-dot"></i>&emsp;{location}
      </div>

      <div>
        <form className="flex items-center">   
          <label htmlFor="simple-search" className="sr-only">Search</label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <i className="fas fa-search"></i>
            </div>
            <input ref={keyword} type="text" className="border border-gray-500 text-sm rounded-full block w-full ps-10 p-2.5" placeholder="Search" required />
          </div>
            <button type="button" className="ml-4">
              <i className="fas fa-calendar-days text-lg"></i>
            </button>
        </form>
      </div>

      <div className="my-4">
        <div className="flex items-center">
          <div className="flex-grow">Explore Events</div>
          <div className="text-slate-400 text-sm">See all <i className="fa-solid fa-arrow-right"></i></div>
        </div>

        <div className="flex w-full overflow-auto py-4">

          {
            exploreEvent.map((e, i) => <EventCard key={i} data={e} />)
          }

        </div>
      </div>

      <div className="my-6">
        <div className="flex">

          <div className="flex-grow bg-green-200 rounded-l-lg shadow">
            <div className="p-3">
              <div className="text-lg">Ayo Buat Event Kebersihanmu sekarang!</div>
              <div>
                <button onClick={() => {window.location.href = '/event/create/first';}} className="text-white shadow-lg rounded-full bg-green-500 px-3 py-2 w-full mt-3">Create Events</button>
              </div>
            </div>
          </div>

          <div className="flex-grow">
            <img src={HomeImg} className="w-full h-full object-cover rounded-r-lg shadow" alt="" />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default HomePage
