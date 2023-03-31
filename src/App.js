import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SlickSlider from './components/Home/SlickSlider/SlickSlider';

function App() {
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/slick' element={<SlickSlider></SlickSlider>}></Route>
      </Routes>
    </div>
  );
}

export default App;
