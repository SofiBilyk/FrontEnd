import react, {useState} from 'react';
import styled from 'styled-components'
import {SliderData} from './SliderData.js';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';


const TitleGallery = styled.div`
position: absolute;
top: 4%;
font-size: 45px;
font-weight: 600;
text-transform: uppercase;
text-align: center;
padding: 20px 0;
color:#fff;
@media (max-width:600px){
font-size: 35px;
}
`
const ImageSlider = ({ slides }) =>{
	const [current, setCurrent] = useState(0)
	const length = slides.length;
	
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1)
	};
	
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1)
	};
	
	console.log(current);
	
	if(!Array.isArray(slides) || slides.length <=0) {
		return null;
	}
	
	return(
		<section className="slider">
		<TitleGallery id="Gallery">Gallery</TitleGallery>
		<FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
		<FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
		{SliderData.map((slide, index) =>{
		 return(
			 <div className={index === current ? 'slide active' : 'slide'} key={index}>
			 {index === current && (<img src={slide.image} alt="aaa" className='image'/>)}
			 </div>
		 )
		 
		}) }
		</section>
	);
}




export default ImageSlider;