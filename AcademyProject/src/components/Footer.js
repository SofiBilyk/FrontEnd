import styled from 'styled-components'
import index from './FontawesomeIcons/index.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FooterMain = styled.div`
            background:#197B0A;
			width: 100%;
			position: absolute;
			left: 0;
			bottom: 0;
`

const NvMenu = styled.div`
padding-top: 50px;
margin-bottom: 70px;
border-bottom: solid 2px #fff;
ul{
display: flex;
justify-content: flex-start;
flex-direction: row;
}
ul li{
list-style: none;
margin-right: 35px;
}
ul li a{
text-decoration: none;
	color: #fff;
	font-size: 15px;
	font-weight: 400;
}
ul li a:hover{
color: #A5F2DE;
}
@media (max-width:667px){
margin-bottom: 35px;
padding-top: 35px;
}
@media (max-width:600px){
margin-bottom: 30px;
padding-top: 30px;
}
`
const Icon1 = styled.div`
.icons:hover{
color: #A5F2DE;
}
@media (max-width:1119px){
.icons{
font-size: 35px;
}
@media (max-width:600px){
.icons{
font-size: 25px;
}
}
`

const IconText = styled.div`
color:#fff;
font-size: 12px;
margin-bottom: 30px;
@media (max-width:600px){
margin-bottom: 30px;
font-size: 10px;
}
`




const Footer = () => {
  return (
   <FooterMain>
	 <div className="container">
	  <div className="row">
	  <div className="col-xl-6 col-lg-6 col-sm-12">
	  <NvMenu className="Menu">
	  <ul>
	  <div className="ulFooter">
	       <li><a href="/">Home</a></li>
	       <li><a href="#About">About</a></li>
	  </div>
	  <div className="ulFooter">
	       <li><a href="#BookNow">Book Now</a></li>
	       <li><a href="#Gallery">Gallery</a></li>
	  </div>
	  <div className="ulFooter">
	       <li><a href="#Contact">Contact Us</a></li>
	  </div>
	     </ul>
	   </NvMenu>
	  </div>
	  <div className="col-xl-6 col-lg-6 col-sm-12 IconsMain">
	  <Icon1 id="Contact">
	  <a href="tel:+380442558877"><FontAwesomeIcon icon="phone-alt" className="icons"/></a>
	  <IconText>Call Us</IconText>
	  </Icon1>
	  
	  <Icon1>
	  <a href="mailto:student@gmail.com"><FontAwesomeIcon icon="envelope" className="icons"/></a>
	  <IconText>Write Us</IconText>
	  </Icon1>
	  
	  <Icon1>
	  <a href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon="hashtag" className="icons"/></a>
	  <IconText>Tag Us</IconText>
	  </Icon1>
	  
	  <Icon1>
	  <a href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon="heart" className="icons"/></a>
	  <IconText>Like Us</IconText>
	  </Icon1>
	  
	  <Icon1>
	  <a href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon="camera" className="icons"/></a>
	  <IconText>Take photos</IconText>
	  </Icon1>
	  
	  <Icon1>
	  <a href="https://www.facebook.com/" target="_blank"><FontAwesomeIcon icon="comment-alt" className="icons"/></a>
	  <IconText>Comment Us</IconText>
	  </Icon1>
	  </div>
	  </div>
	  </div>
   </FooterMain>
  );
}

export default Footer;
