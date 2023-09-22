import React, {useState} from 'react'
import styled from "styled-components"
import pix from "../Assets/img8.svg"
import pix2 from "../Assets/has.svg"


const Header = () => {
    return (
        <div>
            <Container>
                <Wrapper>
                    <Logo> <Img src = {pix2}/></Logo>
                        
                        <LightHolder>
                            <Img src = {pix}/>
                        </LightHolder>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Header;

const Img = styled.img`
width: 100%;
height: 100%;
`
const LightHolder = styled.div`
width: 100px;
height: 100px;

@media screen and (max-width: 320px){
    width: 70px;
    height: 70px;
}
`

const Logo = styled.div`
width: 100px;
height: 100px;

@media screen and (max-width: 320px){
    width: 70px;
    height: 70px;
}
`

  const Wrapper = styled.div`
  height: 100%;
  width: 90%;
//   background-color: blue;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 320px){
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  `  

  const Container = styled.div`
  height: 150px;
  width: 100%;
//   background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  `  