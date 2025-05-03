import Day from "../Day/Day"
import albums, { Album } from "../albums"
import "./Calendar.css"

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
]

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

type CalendarProps = {
	year: number
	monthIndex: number
	today: string
	openModal: (title: string, albums: Album[]) => void
}

const Calendar = ({ year, monthIndex, today, openModal }: CalendarProps) => {
	const daysInMonth = new Date(year, monthIndex + 1, 0).getDate()
	const firstDayOfMonth = new Date(year, monthIndex, 1).getDay() // Get the first day of the month (0 = Sunday, 1 = Monday, etc.)
	const albumsForMonth = Object.keys(albums)
		.filter(date =>
			date.includes(`${year}-${(monthIndex + 1).toString().padStart(2, "0")}`),
		)
		.flatMap(k => albums[k])

	const days = []
	for (let i = 0; i < firstDayOfMonth; i++) {
		days.push(undefined)
	}

	for (let day = 1; day <= daysInMonth; day++) {
		const dateTimeString = `${year}-${(monthIndex + 1)
			.toString()
			.padStart(2, "0")}-${day.toString().padStart(2, "0")}`
		days.push({ day, dateTimeString, isToday: dateTimeString === today, albums: albums[dateTimeString] })
	}

	return (
		<div>
			<h1 onClick={() => openModal(monthNames[monthIndex], albumsForMonth)}>
				{monthNames[monthIndex]}
			</h1>
			<ul>
				{dayNames.map((day, i) => (
					<li className="day-name" key={i}>{day}</li>
				))}
				{days.map((day, index) => (
					<Day key={index} day={day} openModal={openModal} />
				))}
			</ul>
		</div>
	)
}

export default Calendar
