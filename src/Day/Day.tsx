import { useMemo } from "react"
import { Album } from "../albums"
import "./Day.css"

type DayProps = { day?: { day: number, dateTimeString: string, isToday: boolean, albums: Album[] }, openModal: (title: string, albums: Album[]) => void }

const Day = ({ day, openModal }: DayProps) => {
	if (!day) return <li className="empty-day" />

	const { day: dayNumber, dateTimeString, isToday, albums = [] } = day
	const sortedAlbums = useMemo(() => albums.map(album => ({ album, sort: Math.random() })).sort((a, b) => a.sort - b.sort), [])

	const transform = (i: number) => {
		const isOddIndex = i % 2 !== 0
		const sign = isOddIndex ? (dayNumber % 2 === 0 ? "-" : "+") : ""
		const angle = (i * 11) % 30
		return `rotate(${sign}${angle}deg)`
	}

	// MATT TODO :- check for future days ,add empty-day class for mobile
	return (
		<li className={`day ${isToday ? "today" : ""}`}>
			<time dateTime={dateTimeString}>{dayNumber}</time>
			{sortedAlbums.map(({ album }, i) => (
				<img
					key={i}
					src={`/album-a-day/${album.image}`}
					alt="Album artwork"
					onClick={() => openModal(dateTimeString, albums)}
					style={{
						transform: transform(i),
						zIndex: i + 1,
					}}
				/>
			))}
			<div className="info">
				<div>
					Album:
					<span className="big">{sortedAlbums[0]?.album.album}</span>
				</div>
				<div>
					Artist:
					<span className="big">{sortedAlbums[0]?.album.artist}</span>
				</div>
			</div>
		</li>
	)
}

export default Day
