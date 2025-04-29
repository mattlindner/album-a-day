import { useEffect } from "react";
import {Album} from "../albums"

const Popup = ({ title, albums, closeModal }: {title: string, albums: Album[], closeModal: () => void}) => {
	useEffect(() => {
		const onClick = (event: MouseEvent) => {
			if (event.target === document.getElementById("modal")) {
				closeModal();
			  }
		}
		const onKeyDown = ({key}: KeyboardEvent) => {
			if (key === "Escape") {
				closeModal();
			  }
		}

		window.addEventListener('click', onClick);
		window.addEventListener('keydown', onKeyDown)

		return () => {
		  window.removeEventListener('click', onClick);
		  window.removeEventListener('keydown', onKeyDown)
		};
	  }, [closeModal]);


  return (
	<div className="modal" id="modal">
	  <div className="modal-content">
		<span className="modal-close" onClick={closeModal}>x</span>
		<h1>{title}</h1>
		<div className="albums">
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

export default Popup
