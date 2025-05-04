import { useContext, useMemo } from "react"
import { Album } from "../albums"
import "./Day.css"
import { ScreenContext } from "../util/screenContext"

type DayProps = { day?: { day: number, dateTimeString: string, isToday: boolean, isFutureDate: boolean, albums: Album[] }, openModal: (title: string, albums: Album[]) => void }

const Day = ({ day, openModal }: DayProps) => {
	if (!day) return <li className="empty-day" />

	const { day: dayNumber, dateTimeString, isToday, isFutureDate, albums = [] } = day
	const sortedAlbums = useMemo(() => albums.map(album => ({ album, sort: Math.random() })).sort((a, b) => a.sort - b.sort), [])

	const transform = (i: number) => {
		const isOddIndex = i % 2 !== 0
		const sign = isOddIndex ? (dayNumber % 2 === 0 ? "-" : "+") : ""
		const angle = (i * 11) % 30
		return `rotate(${sign}${angle}deg)`
	}

	const isMobile = useContext(ScreenContext)

	return (
		<li className={`day ${isToday ? "today" : ""} ${isFutureDate ? "isFutureDate" : ""}`}>
			<time dateTime={dateTimeString}>{dayNumber}</time>
			<div className="albums">
				{sortedAlbums.map(({ album }, i) => (
					<div className="album" key={i}>
						<img
							src={`/album-a-day/${album.image}`}
							alt="Album artwork"
							onClick={() => {
								if (isMobile) {
									window.open(album.rym, "_blank")
								}
								else {
									openModal(dateTimeString, albums)
								}
							}}
							style={!isMobile
								? {
										transform: transform(i),
										zIndex: i + 1,
									}
								: {}}
						/>
						<div className="info">
							<div>
								Album:
								<span className="big">{album.album}</span>
							</div>
							<div>
								Artist:
								<span className="big">{album.artist}</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</li>
	)
}

export default Day
