import albums, { Album } from '../albums';
import Day from '../Day/Day';
import './Calendar.css'

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

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const Calendar = ({year, monthIndex, today, openModal}: {year: number, monthIndex: number, today: string, openModal: (title: string, albums: Album[]) => void}) => {
	const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
	const firstDayOfMonth = new Date(year, monthIndex, 1).getDay(); // Get the first day of the month (0 = Sunday, 1 = Monday, etc.)

	const days = []
	for (let i = 0; i < firstDayOfMonth; i++) {
	  days.push(undefined)
	}

	for (let day = 1; day <= daysInMonth; day++) {
	  const dateTimeString = `${year}-${(monthIndex + 1)
	  .toString()
	  .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
	  days.push({ day, dateTimeString, isToday: dateTimeString === today, albums: albums[dateTimeString] })
	}

	return (
	  <div>
		<h1 onClick={() => openModal(monthNames[monthIndex], Object.keys(albums)
		.filter((date) =>
		  date.includes(`${year}-${(monthIndex + 1).toString().padStart(2, "0")}`)
		)
		.flatMap((k) => albums[k]))}>{monthNames[monthIndex]}</h1>
		<ul>
		  {dayNames.map((day, i) => (
			<li key={i}>{day}</li>
		  ))}
		  {days.map((day, index) => (
			<Day key={index} day={day} openModal={openModal} />
		  ))}
		</ul>
	  </div>
	);
  }

  export default Calendar
