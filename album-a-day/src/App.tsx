import { useMemo, useState } from 'react'
import './App.css'
import { Album } from './albums';
import Popup from './Popup/Popup';
import Calendar from './Calendar/Calendar';

const App = () => {
  const {todayDateString, months} = useMemo(() => {
    const today = new Date()
    const todayDateString = today.toJSON().split("T")[0]
    const months = [...Array(today.getMonth() + 1).keys()]

    return {todayDateString, months}
  }, [])

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
    <div>
      {months.map((mIndex) => <Calendar year={2025} monthIndex={mIndex} today={todayDateString} openModal={openModal}/> )}
      {isModalOpen && <Popup title={modalTitle} albums={modalAlbums} closeModal={closeModal} />}
    </div>
  );
};

export default App;

