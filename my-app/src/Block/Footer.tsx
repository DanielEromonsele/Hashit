import styled from "styled-components"

const Footer = () =>{
  
  return (
    <div>
          <Container>
            <Wrapper>
             
              2023 HashIT App Ltd. Allrights reserved.
              
            </Wrapper>
          </Container>
    </div>
  )
}

export default Footer;



const Wrapper = styled.div`
width: 90%;
height: 100%;
// background-color: blue;
display: flex;
align-items: center;
justify-content: center;

`
const Container = styled.div`
width: 100%;
height: 100px;
background-color: #EEEEEE;
display: flex;
align-items: center;
justify-content: center;
margin-top: 70px;
`

