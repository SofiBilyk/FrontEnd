import styled from 'styled-components'
import react, {useState} from 'react';
import img1 from './img/img1.png';
import Menu from './Menu.js';

const HotelSign = styled.div`
    display: flex;
	justify-content: center;
   img{
    width: 200px;
    height: auto;
    margin-top: 150px;
    margin-bottom: 20px;
   }
`

const HotelName = styled.div`
    color: #fff;
	font-size: 50px;
    font: italic;
    padding: 0 0 20px 0;
	text-align: center;
@media (max-width:600px){
font-size: 40px;
padding: 0 0 7px 0;
}
`

const HotelAdress = styled.div`
padding-bottom: 200px;
text-align: center;
   a{
text-decoration: none;
color: #fff;
font-size: 18px;
}
@media (max-width:600px){
font-size: 15px;
}
`

const Header1 = () => {
	const [menuActive, setMenuActive] = useState(false)
	const items = [{value:"Home", href: '/'}, {value:"About", href: '#About'},{value:"Book Now", href: '#BookNow'},{value:"Gallery", href: '#Gallery'},{value:"Contact Us", href: '#Contact'}]
	
  return (
	  <div className="HeaderMain">
	   <nav>
	    <div className="burger-btn" onClick={() => setMenuActive(!menuActive)} >
	     <span />
	    </div>
	   </nav>
	  <main>
	  <HotelSign className="HotelSign">
	  <img src={img1} alt={""}/> 
	  </HotelSign>
	   
	  <HotelName>GreenHouse</HotelName>
	  <HotelAdress><a href="https://www.google.com/maps/place/Equator+Village/@-0.6803058,73.1531057,15.11z/data=!4m16!1m7!3m6!1s0x24b599bfaafb7bbd:0x414509e181956289!2z0JzQsNC70YzQtNGW0LLQuA!3b1!8m2!3d3.202778!4d73.22068!3m7!1s0x24b599a690f23feb:0xf05717412351dd83!5m2!4m1!1i2!8m2!3d-0.6870689!4d73.1470102" target="_blank">Ismehela Hera, Addu City, Maldives</a> </HotelAdress>
	  </main> 
	  <Menu active={menuActive} setActive={setMenuActive} header={"Menu"} items={items} />
		  
		  
	  </div>
	  
  );
}

export default Header1;