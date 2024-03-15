import logo from './logo.svg';
import './App.css';
import Navbars from './component/Navbar2'
import Home from './routes/Home'
import {Route, Routes} from "react-router-dom"
import About from './routes/About';
import Contact from './routes/Contact';
import Service from './routes/Service';


function App() {
  return (
    <div className="App">


      <Navbars/>

      <Routes>
        <Route path='/PROJECT1' element={<Home/>}/>
        <Route path='/STICKERINE' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element= {<About/>}/>
        <Route path='/contact' element={<Contact></Contact>}/>
        <Route path='/service' element={<Service></Service>}/>

      </Routes>

      
    </div>
  );
}

export default App;
