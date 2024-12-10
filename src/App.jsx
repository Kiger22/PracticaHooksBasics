import { useState, useEffect } from 'react'
import './App.css'
import Character from './components/Characters/character';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.error('Error:', error))
  });

  return (
    <>
      <div>
        <h1>Rick and Morty Characters</h1>
        <ul className='cards'>
          {characters.map(character => (
            <li className='card' key={character.id}>
              <h2>{character.name}</h2>
              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
              <Character character={character} />
            </li>

          ))}
        </ul>
      </div>
    </>
  )
}

export default App
