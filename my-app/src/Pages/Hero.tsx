import React from "react";
import { styled } from "styled-components";
import pix from "../Assets/WhatsApp_Image_2023-09-22_at_12.57.42-removebg-preview.png"
import pix1 from "../Assets/wifi-a041367d.svg"
import pix2 from "../Assets/flight-96b8092f.svg"



const Hero = () => {
  return (
    <div>
        <Container>
          <Wrapper>
            <SuperCharge>
            {/* <Img2 src = {pix2}/> */}
              <h1>Supercharge Your <br/>
Mobile Life with <span>HashIT!</span></h1>
              {/* <Img2 src = {pix1}/> */}
            </SuperCharge>

            <ImageHolder>
              <Img src = {pix}/>
            </ImageHolder>
           
           <P><p> Level up your mobile experience with Hashit! Send money, buy airtime, pay utilities, save, earn, learn, connect with <br/> friends, explore our vibrant marketplace, advertise your biz, and win exciting giveaways - all in one place.</p></P>
            
          </Wrapper>
        </Container>
    </div>
  )
}

export default Hero;
const Img2 = styled.img`
@media screen and (max-width:320px){
  width: 70px;
  height: 70px;
}
`
const P = styled.div`
height: 10%;
width: 100%;
text-align: center;
font-weight: 500;
margin-top: 20px;
font-size: 18px;
`

const Img = styled.img`
height: 100%;
width: 100%;
`

const ImageHolder = styled.div`
height: 60%; 
width: 90%;
// background-color: blue;

`

const SuperCharge = styled.div`
height: 25%;
width: 100%;
// background-color: yellow;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
font-size: 30px;
span{
  color: #EC5A24;
}

@media screen and (max-width: 320px) {
  display: flex;
align-items: center;
justify-content: center;
text-align: center;
font-size: 15px;

}

`

const Wrapper = styled.div`
height: 90%;
width: 100%;
// background-color: brown;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Container = styled.div`
height:100%;
width: 100%;
background-color: #EEEEEE;
display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width: 320px){
  display: flex;
align-items: center;
justify-content: center;
} 
`