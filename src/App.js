import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Posts from './components/Posts';
import About from './components/About';
import {BrowserRouter,Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/posts' element={<Posts/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/' element={<Homepage/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
