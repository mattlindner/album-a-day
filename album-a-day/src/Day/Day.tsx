import {Album} from "../albums"

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


	const sortedAlbums = albums.map(album => ({album, sort: Math.random()})).sort((a, b) => a.sort - b.sort)
	return (
	<li className={`day ${isToday ? "today" : ""}`}>
	  <time dateTime={dateTimeString}>{dayNumber}</time>
	  {sortedAlbums.map(({album}, i) => (
		<img
		  key={i}
		  src={album.image}
		  alt="Album artwork"
		  onClick={() => openModal(dateTimeString, albums)}
		  style={{
			transform: `rotate(${
			i % 2 !== 0 && dayNumber % 2 === 0 ? "-" : i % 2 !== 0 ? "+" : ""
		  }${(i * 11) % 30}deg)`,
			zIndex: i + 1,
		  }}
		/>
	  ))}
	</li>
  );
};

export default Day
