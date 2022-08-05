import Card from "./Components/Card";
import { BiUpArrowCircle } from 'react-icons/bi'
import './App.css'
import NavBar from "./Components/NavBar";

function App() {
  return ( 
    <>
    <NavBar />
    <div className="mainDiv">
    <Card title="Entradas" img={<BiUpArrowCircle/>}/>
    <Card title="Entradas" img={<BiUpArrowCircle/>}/>
    <Card title="Entradas" img={<BiUpArrowCircle/>}/>
    </div>
    
    </>
  )
}

export default App;
