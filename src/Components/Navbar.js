import React from 'react'
import { Nav,Image, Ul,Li, Button} from '../style'
function Navbar() {
  return (
    <Nav>
    <Image></Image>
    <Ul>
    <Li>Home</Li>
    <Li>About Us</Li>
    <Li>Contact Us</Li>
    <Li>Docs</Li>
    </Ul>
    <Button>Buy Now</Button>
    </Nav>
  )
}

export default Navbar