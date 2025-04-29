import { useMemo, useState } from 'react'
import './App.css'
import { Album } from './albums';
import Popup from './Popup/Popup';
import Calendar from './Calendar/Calendar';

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
    <div>
      {months.map((mIndex) => <Calendar year={2025} monthIndex={mIndex} openModal={openModal}/> )}
      {isModalOpen && <Popup title={modalTitle} albums={modalAlbums} closeModal={closeModal} />}
    </div>
  );
};

export default App;

