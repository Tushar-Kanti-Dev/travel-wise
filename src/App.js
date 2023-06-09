import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SlickSlider from './components/Home/SlickSlider/SlickSlider';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/about' element={<About></About>}/>
        <Route path='/slick' element={<SlickSlider></SlickSlider>}/>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}/>
      </Routes>
    </div>
  );
}

export default App;
