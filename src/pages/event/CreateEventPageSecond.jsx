import AppContext from "../../common/context/AppContext";
import { useContext, useEffect, useRef, useState } from "react";
import { DateTime } from "luxon";
import DatePicker from "react-datepicker";
import { useNavigate, useLocation } from 'react-router-dom';
import { MultiSelect } from "react-multi-select-component";
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import LocationFinder from "../../component/LocationFinder";

function CreateEventPageSecond() {
  const { setShowNavbar } = useContext(AppContext);
  const [image, setImage] = useState(null);
  const address = useRef(null);
  const limit = useRef(null);
  const file = useRef(null);
  const location = useLocation();
  const options = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry", disabled: true },
  ];
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setShowNavbar(true);
    console.log(location.state);

    return function cleanup() {
      setShowNavbar(false);
    }; 
  }, []);

  async function submit(e) {

    // navigate('/event/create/second',{ image, startDate, title, desc, about });
  }

  function onImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  }

  return (
    <div className="p-3 h-screen">
      <center>
        <div className="mt-3">
          <div className="text-2xl">Event Registration</div>
          <p className="text-slate-500 text-sm">Create an event</p>
        </div>
      </center>

      <form className="mt-3 text-sm py-4" onSubmit={submit}>

        <div className="px-3 mb-6">
          <div className="mb-3">Address</div>
          <div><input ref={address} required type="text" placeholder="Pantai Ancol, Jakarta Utara" className="border border-slate-400 rounded-full w-full py-2 px-4" /></div>
        </div>

        <div className="px-3 mb-6">
          <div className="mb-3">Guest Limit</div>
          <div>
            <input ref={limit} min={0} type="number" required className="border border-slate-400 rounded-xl w-full py-2 px-4" placeholder="0" />
          </div>
        </div>

        <div className="px-3 mb-6">
          <div className="mb-3">Maps</div>
          <div className="h-44 w-full relative">
            <MapContainer center={[0.7893, 113.9213]} zoom={7} >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <LocationFinder />
            </MapContainer>
          </div>
        </div>

        <div className="px-3 mb-6">
          <div className="mb-3">Benefit</div>
          <div>
            <MultiSelect
              options={options}
              value={selected}
              onChange={setSelected}
              labelledBy="Select"
            />
          </div>
        </div>

        <div className="px-3 mb-6">
          <div className="mb-3">License</div>
          <div>
            <input ref={file} required type="file" accept="application/pdf" />
          </div>
        </div>

        <button className="w-full bg-green-500 text-white rounded-full py-3" type="submit">Done</button>
      </form>
    </div>
  );
}

export default CreateEventPageSecond
