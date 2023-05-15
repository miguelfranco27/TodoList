
import './App.css';
import Creatework from './components/Creatework';
import Sidebar from './components/Sidebar';
import Tudo from './components/Tudo';
import Header from './components/layout/Header';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
function App() {
  return (
    <div className='divmain' >
<Sidebar/>
<Creatework/>
<div className='divwork'>
  <span ><h1>Notas</h1> <button ><AutoAwesomeIcon/></button>  </span>

<Header/>

</div>
    </div>
  );
}

export default App;
