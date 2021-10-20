
//import './css/Gallery.css';
import styled from 'styled-components'
import img4 from './img/img4.jpg';
import img5 from './img/img5.jpg';
import img6 from './img/img6.jpg';
import img7 from './img/img7.jpg';
import img8 from './img/img8.jpg';
import img9 from './img/img9.jpg';
import img10 from './img/img10.jpg';
import img11 from './img/img11.jpg';

const GalleryMain = styled.div`
background: rgba(88,160,77,0.6);
padding-bottom: 20px;
margin: 100px 0;
.item-box1,
.item-box2,
.item-box3,
.item-box4{
	display: flex;
	justify-content: space-between;
    margin: 30px 0;
}
.item-box1 img,
.item-box2 img,
.item-box3 img,
.item-box4 img{
	width: 100%;
    height: 175px;
}
`
const TitleGallery = styled.div`
font-size: 40px;
text-transform: uppercase;
text-align: center;
padding: 20px 0;
color:#fff;
`
const Gallery = () => {
  return (
   <GalleryMain> 
	  <TitleGallery>Gallery</TitleGallery>
					<div className="item-box1">
						<div className="item">
							 <img src={img4} alt={""}/>
						</div>
						
						<div className="item">
							  <img src={img5} alt={""}/>
						</div>
						
						<div className="item">
							  <img src={img6} alt={""}/>
						</div>
						
						<div className="item">
							  <img src={img7} alt={""}/>
						</div>
						
						<div className="item">
							  <img src={img8} alt={""}/>
						</div>
	                     <div className="item">
							  <img src={img9} alt={""}/>
						</div>
						
					</div>
					
					<div className="item-box2">
						<div className="item">
							 <img src={img6} alt={""}/>
						</div>
						
						<div className="item">
							  <img src={img7} alt={""}/>
						</div>
						
						<div className="item">
							  <img src={img8} alt={""}/>
						</div>
						
						<div className="item">
							  <img src={img9} alt={""}/>
						</div>
						
						<div className="item">
							  <img src={img10} alt={""}/>
						</div>
	                     <div className="item">
							  <img src={img11} alt={""}/>
						</div>
						
					</div>
					
					<div className="item-box3">
						<div className="item">
							 <img src={img8} alt={""}/>
						</div>
						
						<div className="item">
							  <img src={img9} alt={""}/>
						</div>
						
						<div className="item">
							  <img src={img10} alt={""}/>
						</div>
						
						<div className="item">
							  <img src={img11} alt={""}/>
						</div>
						
						<div className="item">
							  <img src={img4} alt={""}/>
						</div>
	                     <div className="item">
							  <img src={img5} alt={""}/>
						</div>
						
					</div>
					
					<div className="item-box4">
						<div className="item">
							 <img src={img10} alt={""}/>
						</div>
						
						<div className="item">
							  <img src={img11} alt={""}/>
						</div>
						
						<div className="item">
							  <img src={img4} alt={""}/>
						</div>
						
						<div className="item">
							  <img src={img5} alt={""}/>
						</div>
						
						<div className="item">
							  <img src={img6} alt={""}/>
						</div>
	                     <div className="item">
							  <img src={img7} alt={""}/>
						</div>
						
					</div>
						
		
   </GalleryMain>
  );
}

export default Gallery;
