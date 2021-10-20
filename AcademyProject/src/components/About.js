import styled from 'styled-components'
import img2 from './img/img2.jpg';

const Title = styled.h1`
color: #197B0A;
font-size: 40px;
text-transform: uppercase;
text-align: center;
padding: 70px 0;
@media (max-width:600px){
padding: 25px 0;
font-size: 35px;
}
`

const AboutText1 = styled.div`
background: rgba(88,160,77,0.6);
width: 100%;
height: 100%;
padding: 10px 30px;
text-align: justify;
font-size: 13px;
.AboutText2{
color: #fff;
}
@media (max-width:1199px){
width: 80%;
margin-left: 15%;
}
@media (max-width:600px){
font-size:15px;
		
}
`
const Button = styled.a`
text-decoration:none;
color: #197B0A;
font-size: 18px;
font-weight:500;
background: rgba(88,160,77,0.6);
border: 0 rgba(88,160,77,0.6);
border-redius: 10px;
width: 120px;
cursor: pointer;
`

const AboutMain = styled.div`
margin: 30px 0;
.TextDetails{

font-size: 13px;
background: rgba(88,160,77,0.6);
text-align: justify;
margin-top: -2px;
padding: 0 30px;
width: 100%;
@media (max-width:600px){
font-size:15px;
		
}
}
`

const Img = styled.img`
	width: 100%;
	height: auto;
@media (max-width:1199px){
width: 80%;
margin-left: 15%;
}
`

const About = () => {
	
	let c = 0;
	
  return (
   <AboutMain>
	  <div className = "container">
	     <Title id="About">about us</Title>
	     <div className="row">
	      <div className="col-xl-6 col-lg-12 col-sm-12">
	        <Img src={img2} alt={""}/> 
	      </div>
	      <div className="col-xl-6 col-lg-12 col-sm-12">
	        <AboutText1>
	  <div>t the remote, southern tip of Maldives, South Palm
Resortresses and strains of everyday life.
Stylish accommodation options at South Palm Resort Maldives offer a choice of 6 Villa categories
in anticipation of all your holiday needs. </div>
	  <div className="AboutText2">South Palm Resort Maldives is a place of unprecedented serenity, privacy and comfort.
Surrounded by whi tranquil blue ocean views of
Addu Atoll.Stylish accommodation options at South Palm Resort Maldives offer a choice of 6 Villa categories
in anticipation of all your holiday needs.</div>
	  <div>South Pn tip of lm
Resort Maldives is a million miles from the stresses and strains of everyday life.
</div>
	  <Button href="#TextDetails" className="AddHover" id="Details" onClick={() => {
	  
	let btnDetails = document.getElementById("Details");
	let text = " Cancellation Policy & No-Show Policy All cancellations informed to Equator Village Within 7 to 15 days prior to client’s arrival: 25% of total cost for the stay will be charge Within 3 to 7 days prior to client’s arrival: 50% of total cost for the stay will be chargedWithin 24 hrs to 3 days prior to client’s arrival:100% of total cost for the stay will be charged Less than 24 hrs and No Shows – full cost for the stay will be chargedEarly checkout charges – Full cost as per the original reservation will be chargedPayment TermsTotal payment should be received in advance prior to guest arrival.We will send a Proforma Invoice with our bank details to enable a wire transfer.We do not accept third party credit card payments.We accept Visa/Master & Amex credit card or cash for the payments at the Hotel.GeneralAll rates are non-commissionable and quoted in USD (US $)Any Government tax (bed tax, GST or any other taxes) is subject to change on governments notice and contract partner shall bear any increments in the same.heck-in 1200 hrs, check-out 1200 hrs.Parents should take full responsibility of the child/children while at the swimming pool or pool premisesAbove rates are applicable for all markets EXCEPT German speaking countries (Germany, Austria & Switzerland). Should you wish to offer rates to clients from German speaking countries, 10% mandatory supplement needs to be added to accommodation and meal plan rates given in this contract.Child accommodation rates are applicable only when sharing room with minimum 2 full paying pax.Child discount for contracted meal and transfer rates can be applied without any restrictions on room occupancy.hild rates/discounts are applicable for children under 11.99 years only.o guest shall offer or give alcoholic drinks to a Maldivian National and is against the constitution of the Maldives Government.edit card payments.We accept Visa/Master & Amex credit card or cash for the payments at the Hotel.GeneralAll rates are non-commissionable and quoted in USD (US $)Any Government tax (bed tax, GST or any other taxes) is subject to change on governments notice and contract partner shall bear any increments in the same.heck-in 1200 hrs, check-out 1200 hrs.Parents should take full responsibility of the child/children while at the swimming pool or pool premisesAbove rates are applicable for all markets EXCEPT German speaking countries (Germany, Austria & Switzerland). Should you wish to offer rates to clients from German speaking countries, 10% mandatory supplement needs to be added to accommodation and meal plan rates given in this contract.Child accommodation rates are applicable only when sharing room with minimum 2 full paying pax.Child discount for contracted meal and transfer rates can be applied without any restrictions on room occupancy.hild rates/discounts are applicable for children under 11.99 years only.o guest shall offer or give alcoholic drinks to a Maldivian National and is against the const Cancellation Policy & No-Show Policy All cancellations informed to Equator Village Within 7 to 15 days prior to client’s arrival: 25% of total cost for the stay will be charge Within 3 to 7 days prior to client’s arrival: 50% of total cost for the stay will be chargedWithin 24 hrs to 3 days prior to client’s arrival:100% of total cost for the stay will be charged Less than 24 hrs and No Shows – full cost for the stay will be chargedEarly checkout charges – Full cost as per the original reservation will be chargedPayment TermsTotal payment should be received in advance prior to guest arrival.We will send a Proforma Invoice with our bank details to enable a wire transfer.We do not accept third party credit card payments.We accept Visa/Master & Amex credit card or cash for the payments at the Hotel.GeneralAll rates are non-commissionable and quoted in USD (US $)Any Government tax (bed tax, GST or any other taxes) is subject to change on governments notice and contract partner shall bear any increments in the same.heck-in 1200 hrs, check-out 1200 hrs.Parents should take full responsibility of the child/children while at the swimming pool or pool premisesAbove rates are applicable for all markets EXCEPT German speaking countries (Germany, Austria & Switzerland). Should you wish to offer rates to clients from German speaking countries, 10% mandatory supplement needs to be added to accommodation and meal plan rates given in this contract.Child accommodation rates are applicable only when sharing room with minimum 2 full paying pax.Child discount for contracted meal and transfer rates can be applied without any restrictions on room occupancy.hild rates/discounts are applicable for children under 11.99 years only.o guest shall offer or give alcoholic drinks to a Maldivian National and is against the constitution of the Maldives Government.edit card payments.We accept Visa/Master & Amex credit card or cash for the payments at the Hotel.GeneralAll rates are non-commissionable and quoted in USD (US $)Any Government tax (bed tax, GST or any other taxes) is subject to change on governments notice and contract partner shall bear any increments in the same.heck-in 1200 hrs, check-out 1200 hrs.Parents should take full responsibility of the child/children while at the swimming pool or pool premisesAbove rates are applicable for all markets EXCEPT German speaking countries (Germany, Austria & Switzerland). Should you wish to offer rates to clients from German speaking countries, 10% mandatory supplement needs to be added to accommodation and meal plan rates given in this contract.Child accommodation rates are applicable only when sharing room with minimum 2 full paying pax.Child discount for contracted meal and transfer rates can be applied without any restrictions on room occupancy.hild rates/discounts are applicable for children under 11.99 years only.o guest shall offer or give alcoholic drinks to a Maldivian National and is against the const";
	  
	  	function buttonClick(){
		if (c == 0)
		{
			c = 1;
		    return text;
		}else{
			c = 0;
			return "";
		}
	}
	document.getElementById("TextDetails").innerHTML = buttonClick();
  }}>Details.....</Button>
	  </AboutText1>
	 
	      </div>
	     </div>
	  
      </div>
 <div id="TextDetails" className="TextDetails"></div>
</AboutMain>
  );
			
}

export default About;