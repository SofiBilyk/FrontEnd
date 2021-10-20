import react from 'react';
import logo from './logo.svg';
import './App.css';
import Header1 from './components/Header1.js';
import About from './components/About.js';
import ImageSlider from './components/ImageSlider.js';
import Footer from './components/Footer.js';
import './components/FontawesomeIcons';
import {SliderData} from './components/SliderData.js';
import responsive from './components/css/responsive.css';
import Book from './components/Book.js';


const App = () => {
  return (
   <div className = "for_page">
	   <div className = "page">
	  <Header1 />
	  <About />
	  <Book />
	  <ImageSlider  slides={SliderData}/>
	  </div>
	  <Footer  />
   </div>
  );
}

export default App;
