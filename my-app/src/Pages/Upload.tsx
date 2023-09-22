import styled from "styled-components"
import {BiLogoFacebookCircle} from "react-icons/bi"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillTwitterCircle} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
// import {FaSquareThreads} from "react-icons/fa"


const Upload = () => {
    return (
        <div>
            <Conatiner>
                <Wrappe>
                <SuperCharge>
              <h1>Join The Waitlist for <br/>
 <span>HashIT!</span></h1>
            </SuperCharge>

            <Input>
            <input type="text" placeholder="Full name"/>
            <input type="text" placeholder="Email address" />
            <Div>
                Get Notified when Hashit Is Live
            </Div>

            <Icons>
                <BiLogoFacebookCircle/>
                <AiFillInstagram/>
                <AiFillTwitterCircle/>
                <AiFillLinkedin/>
            </Icons>
            </Input>

            
                </Wrappe>
            </Conatiner>
        </div>
    )
}

export default Upload;

const Icons = styled.div`
// height: 50px;
width: 300px;
background-color:white;
font-size:30px;
// color: white;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
border-radius: 10px;
`
const Div = styled.div`
height: 50px;
width: 500px;
background-color:black;
color: white;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;

@media screen and (max-width: 320px){
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px; 

    height: 50px;
    width: 250px;
    border: 1px solid silver;
    border-radius: 10px;
}
`

const Input = styled.div`
height: 40%;
width: 100%;
display: flex; 
align-items: center;
justify-content: center;
flex-direction: column;
gap: 20px;

input{
height: 50px;
width: 500px;
border: 1px solid silver;
border-radius: 10px;
}

@media screen and (max-width:320px){
    display: flex; 
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px; 

    input{
        height: 50px;
        width: 250px;
        border: 1px solid silver;
        border-radius: 10px;
        }
}


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

const Wrappe = styled.div`
height: 100%;
width: 90%;
flex-wrap: wrap;
// background-color: green;
`


const Conatiner = styled.div`
height: 100%;
width: 100%;
// background-color: blue;
display: flex;
align-items: center;
justify-content: center;
@media screen and (max-width: 320px){
    display: flex;
  align-items: center;
  justify-content: center;
  } 
 
`