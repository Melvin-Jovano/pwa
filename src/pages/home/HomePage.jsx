import { useEffect, useContext, useState, useRef } from "react";
import AppContext from "../../common/context/AppContext";
import EventCard from "../../component/EventCard";
import HomeImg from "../../assets/img/home.png";
import { exploreEvents } from "../../common/api/event";

function HomePage() {
  const { setShowBottomNavbar, setShowLoading } = useContext(AppContext);
  const [location, setLocation] = useState('My Location');
  const [exploreEvent, setExploreEvent] = useState([
    {
        "location": {
            "type": "Point",
            "coordinates": [
                98.6722,
                3.5952
            ]
        },
        "_id": "657a3d03f90c92111efe8d94",
        "registeredUser": [],
        "userId": "656b1f388994aba83c0aaa9e",
        "title": "1",
        "description": "1",
        "about": "1",
        "address": "1",
        "time": "2023-12-13T23:22:20.085Z",
        "benefits": [
            {
                "title": "Free snack dan minuman",
                "icon": "https://cleanv-bucket.s3.ap-southeast-1.amazonaws.com/snack-fast-food.png",
                "_id": "657a3d03f90c92111efe8d95"
            },
            {
                "title": "Sertifikat ",
                "icon": "https://cleanv-bucket.s3.ap-southeast-1.amazonaws.com/certificate.png",
                "_id": "657a3d03f90c92111efe8d96"
            }
        ],
        "limit": 1,
        "license": "https://cleanv-bucket.s3.ap-southeast-1.amazonaws.com/4794dcd6-8bdb-4585-b147-fd4331aba1fc",
        "thumbnail": "https://cleanv-bucket.s3.ap-southeast-1.amazonaws.com/b3174d98-251b-4ee4-9d72-9d59a25b98d2",
        "createdAt": "2023-12-13T23:23:47.045Z",
        "updatedAt": "2023-12-13T23:23:47.045Z",
        "__v": 0
    },
    {
        "location": {
            "type": "Point",
            "coordinates": [
                98.6722,
                3.5952
            ]
        },
        "_id": "656b6a80c921298353c82a9a",
        "registeredUser": [
            "656b1f388994aba83c0aaa9e"
        ],
        "userId": "656b1f388994aba83c0aaa9e",
        "title": "Basmi Titan Liar",
        "description": "Basmi titan mingguan dekat Wall Maria dipimpin oleh Kapten Levi.",
        "about": "Guna mengurangi jumlah korban yang terus berjatuhan dan utk merebut kembali dinding Maria, kami mengundang anda utk menghadiri acara ini. Lessgo Eldia RAAAAAHH...",
        "address": "Shiganshina, Wall Maria",
        "time": "2023-12-02T16:29:30.000Z",
        "benefits": [
            {
                "title": "Free 3D Manuver Gear",
                "icon": "https://cleanv-bucket.s3.ap-southeast-1.amazonaws.com/gift.png",
                "_id": "656b6a80c921298353c82a9b"
            },
            {
                "title": "Asuransi BPJS Kesehatan",
                "icon": "https://cleanv-bucket.s3.ap-southeast-1.amazonaws.com/snack-fast-food.png",
                "_id": "656b6a80c921298353c82a9c"
            }
        ],
        "limit": 10,
        "license": "https://cleanv-bucket.s3.ap-southeast-1.amazonaws.com/85e2febb-2f55-4471-b4e2-3e2d1ccccaac",
        "thumbnail": "https://cleanv-bucket.s3.ap-southeast-1.amazonaws.com/850060a2-c5c2-4072-834c-b419c57c617c",
        "createdAt": "2023-12-02T17:33:52.104Z",
        "updatedAt": "2023-12-02T20:35:07.083Z",
        "__v": 0
    }
]);
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
    
    // getEvents();

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
