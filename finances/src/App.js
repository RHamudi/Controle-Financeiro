import Header from './Components/Header/Header';
import './App.css'
import Card from './Components/Cards/Card';
import {BiUpArrowAlt} from 'react-icons/bi'

function App() {
  return (<>
    <Header />
    <Card title="Entradas" icon={<BiUpArrowAlt/>}/>
    </>
  );
}

export default App;
