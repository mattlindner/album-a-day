import { useMemo } from "react"
import { Album } from "../albums"
import "./Day.css"

type DayProps = { day?: { day: number, dateTimeString: string, isToday: boolean, albums: Album[] }, openModal: (title: string, albums: Album[]) => void }

const Day = ({ day, openModal }: DayProps) => {
	if (!day) return <li />

	const { day: dayNumber, dateTimeString, isToday, albums = [] } = day
	const sortedAlbums = useMemo(() => albums.map(album => ({ album, sort: Math.random() })).sort((a, b) => a.sort - b.sort), [])

	const transform = (i: number) => {
		const isOddIndex = i % 2 !== 0
		const sign = isOddIndex ? (dayNumber % 2 === 0 ? "-" : "+") : ""
		const angle = (i * 11) % 30
		return `rotate(${sign}${angle}deg)`
	}

	return (
		<li className={`day ${isToday ? "today" : ""}`}>
			<time dateTime={dateTimeString}>{dayNumber}</time>
			{sortedAlbums.map(({ album }, i) => (
				<img
					key={i}
					src={album.image}
					alt="Album artwork"
					onClick={() => openModal(dateTimeString, albums)}
					style={{
						transform: transform(i),
						zIndex: i + 1,
					}}
				/>
			))}
		</li>
	)
}

export default Day
