import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import './Library.css';

export function Library() {
  const [songs, setSongs] = useState([
    { id: 1, title: 'The Party Never End ', artist: 'Juice WRLD' },
    { id: 2, title: 'Playing God ', artist: 'Paramore' },
    { id: 3, title: 'Last Christmas ', artist: 'WHAM!' },
    { id: 4, title: 'Famous ', artist: 'Kanye West' },
    { id: 5, title: '4:00', artist: 'Taeko Onuki' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Función para agregar una nueva canción
  const addSong = (title, artist) => {
    const newSong = {
      id: songs.length + 1, // ID único basado en el tamaño de la lista
      title: title,
      artist: artist
    };
    setSongs([...songs, newSong]); // Agrega la nueva canción a la lista de canciones
  };

  // Función para eliminar una canción
  const removeSong = (id) => {
    setSongs(songs.filter(song => song.id !== id)); // Filtra las canciones para eliminar la que coincide con el ID
  };

  // Función para filtrar canciones por el término de búsqueda
  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Función para reproducir la canción (simulacion)
  const playSong = (title) => {
    alert(`Now playing: ${title}`); // Simula la reproducción de la canción
  };

  return (
    <>
      <Navbar />
      <section className="music-library-section">
        <div className="music-library-content animate__animated animate__fadeInUp">
          <h2 className="library-title">Your Music Library</h2>

          {/* Buscador */}
          <div className="search-container">
            <input
              type="text"
              placeholder="Search by song title or artist..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Formulario para agregar canciones */}
          <div className="add-song-form">
            <input type="text" id="song-title" placeholder="Song Title" />
            <input type="text" id="song-artist" placeholder="Artist Name" />
            <button
              className="btn add-song-btn"
              onClick={() => {
                const title = document.getElementById("song-title").value;
                const artist = document.getElementById("song-artist").value;
                if (title && artist) {
                  addSong(title, artist); // Llama a la función addSong con los valores introducidos
                }
              }}
            >
              Add Song
            </button>
          </div>

          {/* Lista de canciones */}
          <ul className="song-list">
            {filteredSongs.map((song) => (
              <li key={song.id} className="song-item">
                <div className="song-details">
                  <span className="song-title">{song.title}</span>
                  <span className="song-artist">{song.artist}</span>
                </div>
                <div className="button-container">
                  <button
                    className="btn play-button"
                    onClick={() => playSong(song.title)} // Reproduce la canción cuando se hace clic
                  >
                    <i className="bi bi-play-fill"></i> Play
                  </button>
                  <button
                    className="btn btn-danger remove-button"
                    onClick={() => removeSong(song.id)} // Elimina la canción cuando se hace clic
                  >
                    <i className="bi bi-trash"></i> Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}
