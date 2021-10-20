import styled from 'styled-components'
import int1 from './img/int1.jpg';
import int2 from './img/int2.jpg';
import int3 from './img/int3.jpg';
import int4 from './img/int4.jpg';
import int5 from './img/int5.jpg';
import int6 from './img/int6.jpg';

const BookMain = styled.div`
.container{
border-top: 7px solid #197B0A;
border-bottom: 7px solid #197B0A;
}
.row{
align-items: center;
@media (max-width:1199px){
width:80%;
padding-top: 10px;
}
}
.Res{
margin:90px 0 90px 0;
@media (max-width:500px){
margin: 0;
}
}
`
const Title = styled.h1`
color: #197B0A;
font-size: 40px;
text-transform: uppercase;
text-align: center;
padding: 60px 0;
@media (max-width:1199px){
padding: 40px 0;
}
@media (max-width:600px){
padding: 25px 0;
font-size: 35px;
}
`
const RoomPlan = styled.div`
display:flex;
justify-content: space-between;
margin-bottom: 10px;
`

const Img = styled.img`
width: 33%;
height:150px;
border-radius:5px;
@media (max-width:1480px){
height:120px;
}
@media (max-width:1199px){
height:170px;
}
@media (max-width:991px){
height:162px;
}
@media (max-width:767px){
height:120px;
}
@media (max-width:600px){
height:100px;
}
@media (max-width:500px){
height:75px;
}
@media (max-width:470px){
height:60px;
}
`
const Data = styled.div`
    margin:20px 0;
	display: flex;
input{
border: 2px solid #197B0A;
color: #197B0A;
text-align: center;
width: 100px;
@media (max-width:1199px){
margin:0;
}
@media (max-width:767px){
width:80px;
}
@media (max-width:600px){
width: 80px;
}
}
@media (max-width:600px){
margin: 10px 0;
}	
`
const People = styled.div`
 margin:20px 0;
	display: flex;
input{
border: 2px solid #197B0A;
color: #197B0A;
text-align: center;
width: 100px;
}
@media (max-width:1199px){
margin:0;
}	
`
const Adition = styled.div`
 margin:20px 0;
	display: flex;
button{
border: 2px solid #197B0A;
color: #197B0A;
text-align: center;
background: rgba(88,160,77,0.6);
margin: 0 15px;
width: 85px;
}
button:hover{
background: #fff;
}
@media (max-width:1199px){
margin: 30px 0;
}
@media (max-width:600px){
margin: 10px 0;
}
`
const Suma = styled.div`

 margin:20px 0;
	display: flex;
@media (max-width:1199px){
margin: 0;
}
`
const BookText = styled.div`
color: #197B0A;
font-size: 20px;
margin-right:20px;
@media (max-width:1199px){
font-size: 20px;
}
@media (max-width:600px){
font-size: 15px;
}

`
const Output = styled.div`
border: 2px solid #197B0A;
color: #197B0A;
text-align: center;
width: 150px;
`

const Close = styled.span`
color:red;
background: #fff;
border: 2px solid red;
text-align: center;
width: 50px;

`
const Agree = styled.div`
border: 2px solid #197B0A;
color: #197B0A;
text-align: center;
font-size:20px;
background: rgba(88,160,77,0.6);
width:150px;
padding:2px;
margin-left: 40%;
@media (max-width:1199px){
margin-bottom: 30px;
}
@media (max-width:767px){
width:90px;
}
@media (max-width:600px){
margin-bottom: 10px;
}
`


const Booking = styled.a`
border: 2px solid #197B0A;
color: #197B0A;
text-align: center;
font-size:20px;
background: rgba(88,160,77,0.6);
width:150px;
padding:2px;
margin-left: 40%;
margin-bottom :30px;
@media (max-width:1199px){
margin-top :30px;
}
@media (max-width:767px){
width:90px;
}
@media (max-width:600px){
margin-top :10px;
margin-bottom :10px;
}
`

const Book = () => {
	let sum = 0;
	let p = 0;
	let b = 0;
  return (
	  <BookMain>
	  <Title id="BookNow">book now</Title>
	  <div className = "container">
	     <div className="row">
	      <div className="col-xl-6 col-lg-12 col-sm-12">
	        <RoomPlan>
      <Img src={int1} alt={""} onClick={() => {
	  sum = sum + 500;
	document.getElementById("Suma").innerHTML = sum + "$";
	 document.getElementById("Deposit").innerHTML = sum*0.5 + "$";
  }}/>
	  <Img src={int2} alt={""} onClick={() => {
										sum = sum + 300;
	document.getElementById("Suma").innerHTML = sum + "$";
	document.getElementById("Deposit").innerHTML = sum*0.5 + "$";
  }}/>
	  <Img src={int3} alt={""} onClick={() => {
										sum = sum + 400;
	document.getElementById("Suma").innerHTML = sum + "$";
	document.getElementById("Deposit").innerHTML = sum*0.5 + "$";
  }}/>
	        </RoomPlan>
	        <RoomPlan>
	   <Img src={int4} alt={""} onClick={() => {
										 sum = sum + 350;
	document.getElementById("Suma").innerHTML = sum + "$";
	document.getElementById("Deposit").innerHTML = sum*0.5 + "$";
  }}/>
	  <Img src={int5} alt={""}  onClick={() => {
										 sum = sum + 650;
	document.getElementById("Suma").innerHTML = sum + "$";
	document.getElementById("Deposit").innerHTML = sum*0.5 + "$";
  }}/>
	  <Img src={int6} alt={""} onClick={() => {
										sum = sum + 450;
	document.getElementById("Suma").innerHTML = sum + "$";
	document.getElementById("Deposit").innerHTML = sum*0.5 + "$";
  }}/>
	        </RoomPlan>
	      </div>
	  
	      <div className="col-xl-3 col-lg-6 col-sm-6">
	  <Data>
	  <BookText>Data</BookText>
	  <input type="date" id="Data" />
	  </Data>
	  <People>
	  <BookText>Adults</BookText>
	  <input type="number" id="Adults" />
	  </People>
	  <Adition>
	  <BookText>Pets</BookText>
	  <button id="PetsYes" onClick={() => {
	  p = 1; }}>Yes</button>
	  <button id="PetsNo" onClick={() => {
	  p = 0; }}>No</button>
	  </Adition>
	  <Suma className="Res">
	  <BookText>Suma</BookText>
	  <Output id="Suma">:</Output>
      <Close id="Close" onClick={() => {sum =0;
	document.getElementById("Suma").innerHTML = sum;
	 document.getElementById("Deposit").innerHTML = sum;
  }}>X</Close>
	  </Suma>
	      </div>
	  
	  <div className="col-xl-3 col-lg-6 col-sm-6">
	  <Data>
	  <BookText>Nights</BookText>
	  <input type="number" id="Nights" />
	  </Data>
	  <People>
	  <BookText>Children</BookText>
	  <input type="number" id="Children" />
	  </People>
	  <Adition>
	  <BookText>Breakfast</BookText>
	  <button id="BreakYes" onClick={() => {
	  b = 1; }}>Yes</button>
	  <button id="BreakNo" onClick={() => {
	  b = 0; }}>No</button>
	  </Adition>
<Agree className="AddHover" id="Agree" onClick={() => {
		let nights = document.getElementById("Nights");
	    let adults = document.getElementById("Adults");
		let children = document.getElementById("Children");
						   
		let nig = Number(nights.value);
		let adu = Number(adults.value);
		let chi = Number(children.value);
						   
		sum = sum + nig*100 + adu*50 + chi*25 + p*50 + b*50;
						   
		document.getElementById("Suma").innerHTML = sum + "$";
	    document.getElementById("Deposit").innerHTML = sum*0.5 + "$";
  }}>Agree</Agree>
	  <Suma>
	  <BookText>Deposit</BookText>
	  <Output id="Deposit">:</Output>
	  </Suma>
<Booking href="tel:+380442558877" className="AddHover">Booking</Booking>
	      </div>
	  
	     </div>
      </div>
	  </BookMain>
  );
}

export default Book;