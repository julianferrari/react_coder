import './App.css';
import simpsonsApi from './APIrest/simpsonsApi';
import Card from './Card'
import './App.css'



function App() {  
  return ( //devuelve un JSX //Tengo que poner { } para que me lo tome como JS.
    <div className="principal_container">
      <h1>Characters</h1>
      <div className='cards-container'>
        {simpsonsApi.map((character, i) => (
          <Card key={i}
            name = {character.character}
            image = {character.image}
            quote = {character.quote}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
