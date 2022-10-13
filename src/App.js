import './App.css';
import SideBar from './components/SideBar/SideBar';
import Container from './components/Container/Container';

function App() {  
  return ( //devuelve un JSX //Tengo que poner { } para que me lo tome como JS.
    <div>      
      <SideBar/>
      <Container/>
    </div>
  );
}

export default App;
