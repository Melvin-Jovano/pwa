import AppContext from "../../common/context/AppContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router';
import { eventDetail } from "../../common/api/event";
import { DateTime } from "luxon";

function EventDetailPage() {
  const { id } = useParams();
  const { setShowLoading } = useContext(AppContext);
  const [userId, setUserId] = useState(null);
  const [event, setEvent] = useState({
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
  });

  const [user, setUser] = useState({
    "_id": "656b1f388994aba83c0aaa9e",
    "img": "https://cleanv-bucket.s3.ap-southeast-1.amazonaws.com/41c314cd-bd20-4330-8d5b-4b92ded37e60",
    "name": "Levi Ackerman",
    "about": "Ingfokan titan terdekat"
  });

  const [otherEvent, setOtherEvent] = useState([]);
  
  async function getEvent() {
    setShowLoading(true);
    const event = await eventDetail(id);
    setEvent(event.data.event);
    setOtherEvent(event.data.otherEvent);
    setUser(event.data.user);
    setShowLoading(false);
  }

  useEffect(() => {
    setUserId(localStorage.getItem('id'));
    // getEvent();
  }, []);

  return (
    <div>
      <div className="static">
        <img src={event.thumbnail} alt="" className="w-full h-72 sticky top-0" />

        <div className="bg-white sticky px-7 py-7" style={{borderRadius: "50px", marginTop: "-45px"}}>
          <div className="absolute" style={{top: "-20px", right: "35px"}}>
            <button className="shadow-lg bg-green-500 w-14 h-14 rounded-full">
              <i className="fa-solid fa-bookmark text-white"></i>
            </button>
          </div>

          <div>
            <h1 className="font-bold text-xl mb-1">{event.title}</h1>
            <p className="text-sm">{event.description}</p>
          </div>

          <div className="flex mt-4 items-center">
            <div>
              <img src={user.img} alt="" className="rounded-full w-7 h-7 object-cover" />
            </div>

            <div className="flex-grow px-2 text-sm">
              {user.name}
            </div>

            <div className="text-xs text-slate-400 text-right">
              {DateTime.fromISO(event.createdAt, {zone: 'utc'}).toRelativeCalendar()}
            </div>
          </div>

          <div className="flex mt-4 items-center font-semibold">
            <div>
              <p>Date</p>
              <p>{DateTime.fromISO(event.time, {zone: "utc"}).toLocaleString(DateTime.DATE_SHORT)}</p>
            </div>

            <div className="flex-grow text-center">
              <p><i className="fa-solid fa-location-dot"></i></p>
              <p className="text-xs">{event.address}</p>
            </div>

            <div className="text-right">
              <p>Time</p>
              <p>{DateTime.fromISO(event.time, {zone: "utc"}).toLocaleString(DateTime.TIME_SIMPLE)}</p>
            </div>
          </div>

          <div className="mt-5">
            <p className="font-semibold mb-2">About the event</p>
            <p className="text-slate-500 text-sm">{event.about}</p>
          </div>

          <div className="mt-5">
            <p className="font-semibold mb-4">This event Benefits</p>
            {
              event.benefits.map((b, i) => {
                return <div key={i} className="flex mb-2 text-sm">
                  <div className="w-8">
                    <img src={b.icon} alt="" width={20} />
                  </div>

                  <div>
                    {b.title}
                  </div>
                </div>
              })
            }
          </div>

          <div className="mt-6">
            <div className="font-semibold mb-2">About host</div>
            <div className="flex items-center">
              <div>
                <img src={user.img} alt="" className="rounded-full w-14 h-14 object-cover" />
              </div>
              <div className="text-center font-semibold flex-grow">{user.name}</div>
              <div>
                <button className="rounded-full bg-green-400 w-10 h-10"><i className="fas fa-plus text-white"></i></button>
              </div>
            </div>

            <p className="mt-3 text-sm">
              {user.about}
            </p>
          </div>

          <div className="mt-6">
            <div className="font-semibold mb-2">Event you may like</div>
            <div className="mt-2">
              {
                otherEvent.map((o, i) => {
                  return <div key={i}>

                  </div>
                })
              }
            </div>
          </div>
      </div>

        <div className="sticky bottom-0 bg-white shadow-inner flex py-5 items-center justify-center">
          <div className="font-semibold text-center">
            <div>Booked</div>
            <div>{event.registeredUser.length}/{event.limit}</div>
          </div>

          <div className="w-2/3 text-right">
            {
              !event.registeredUser.includes(userId) &&
                <button className="bg-green-500 text-white rounded-lg p-4">
                  Register now
                </button>
            }

            {
              event.registeredUser.includes(userId) &&
                <button className="bg-slate-500 text-white rounded-lg p-4" disabled>
                  Already booked
                </button>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetailPage
