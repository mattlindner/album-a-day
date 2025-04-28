import { useMemo, useState } from 'react'
import './App.css'
import albums, { Album } from './albums';

const Popup = ({ title, albums, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="modal-close" onClick={closeModal}>x</span>
        <h1>{title}</h1>
        <div className="albums">
          {console.log({albums})}
          {albums.map((album, index) => (
            <>
              {index > 0 ? <hr /> : null}
              <div key={index} className="album">
                <img
                  src={album.image}
                  alt={album.album}
                  onClick={() => window.open(album.rym, "_blank")}
                />
                <div className="info">
                  <div>Album: <span className='big'>{album.album}</span></div>
                  <div>Artist: <span className='big'>{album.artist}</span></div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

const Day = ({ day, openModal }: {day?: {
  day: number;
  dateTimeString: string;
  albums: Album[];
}, openModal: (title: string, albums: Album[]) => void}) => {
  if (!day) return <li/>;

  const { day: dayNumber, dateTimeString, albums = [] } = day;
  const today = new Date();
  const isToday =
    today.getDate() === dayNumber &&
    today.getMonth() === new Date(dateTimeString).getMonth() &&
    today.getFullYear() === new Date(dateTimeString).getFullYear();

  return (
    <li className={`day ${isToday ? "today" : ""}`}>
      <time dateTime={dateTimeString}>{dayNumber}</time>
      {albums.map((album, i) => (
        <img
          key={i}
          src={album.image}
          alt="Album artwork"
          onClick={() => openModal(dateTimeString, albums)}
          style={{
            transform: `rotate(${(i * 11) % 30}deg)`,
            zIndex: i + 1,
          }}
        />
      ))}
    </li>
  );
};

const Calendar = ({year, monthIndex, openModal}: {year: number, monthIndex: number, openModal: (title: string, albums: Album[]) => void}) => {
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, monthIndex, 1).getDay(); // Get the first day of the month (0 = Sunday, 1 = Monday, etc.)
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = []
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(undefined)
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dateTimeString = `${year}-${(monthIndex + 1)
    .toString()
    .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
    days.push({ day, dateTimeString, albums: albums[dateTimeString] })
  }

  return (
    <div className="calendar">
      <h1 onClick={() => openModal(monthNames[monthIndex], Object.keys(albums)
      .filter((date) =>
        date.includes(`${year}-${(monthIndex + 1).toString().padStart(2, "0")}`)
      )
      .flatMap((k) => albums[k]))}>{monthNames[monthIndex]}</h1>
      <ul>
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, i) => (
          <li key={i}>{day}</li>
        ))}
        {days.map((day, index) => (
          <Day key={index} day={day} openModal={openModal} />
        ))}
      </ul>
    </div>
  );
}

const App = () => {
  const today = useMemo(() => new Date(), [])
  const months = useMemo(() => [...Array(today.getMonth() + 1).keys()], [today])

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalAlbums, setModalAlbums] = useState<Album[]>([]);

  const openModal = (title: string, albums: Album[]) => {
    setModalTitle(title);
    setModalAlbums(albums);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalTitle("");
    setModalAlbums([]);
  };

  return (
    <div className="app">
      {months.map((mIndex) => <Calendar year={2025} monthIndex={mIndex} openModal={openModal}/> )}
      {isModalOpen && <Popup title={modalTitle} albums={modalAlbums} closeModal={closeModal} />}
    </div>
  );
};

export default App;

