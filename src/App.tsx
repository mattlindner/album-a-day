import { useMemo, useState } from "react"
import "./App.css"
import Popup from "./Popup/Popup"
import Calendar from "./Calendar/Calendar"
import { Album } from "./albums"

const App = () => {
	const { todayDateString, months } = useMemo(() => {
		const today = new Date()
		const todayDateString = new Date(today.getTime() - (today.getTimezoneOffset() * 60000)).toJSON().split("T")[0]
		const months = [...Array(today.getMonth() + 1).keys()]

		return { todayDateString, months }
	}, [])

	const [isModalOpen, setIsModalOpen] = useState(false)
	const [modalTitle, setModalTitle] = useState("")
	const [modalAlbums, setModalAlbums] = useState<Album[]>([])

	const openModal = (title: string, albums: Album[]) => {
		setModalTitle(title)
		setModalAlbums(albums)
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
		setModalTitle("")
		setModalAlbums([])
	}

	const calendars = useMemo(() => months.map(mIndex => <Calendar year={2025} monthIndex={mIndex} today={todayDateString} openModal={openModal} key={`calendar-${mIndex}`} />), [])

	return (
		<div>
			{calendars}
			<Popup title={modalTitle} albums={modalAlbums} open={isModalOpen} closeModal={closeModal} />
		</div>
	)
}

export default App
