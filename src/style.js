import styled from "styled-components";
import Img from "./images/flux.jpg"
import Img2 from "./images/pic.jpg"
export const Nav = styled.div`
height:100px;
width:100%;
display:flex;
align-items: center;
position : fixed;
top : 0px;
background-color:white; 

`
export const Image = styled.img`
background-image: url(${Img});
height:80%;
width:14%;
border:10px solid white;
background-size:100% 100%;
margin-left:2%;
`
export const Ul = styled.ul`
width:40%;
display:flex;
justify-content:space-between;
margin-left:20%;
font-family: sans-serif;
line-height:60px;

`
export const Li = styled.li`
// margin-left:5%;
cursor:pointer;
font-weight:bold;
font-size:26px;
&:hover{
    color: rgb(31, 31, 132);
    cursor: pointer; 
    transition-property:all;
    transition-duration: 2s;
    transform:scale(1.1)
}
`
export const Button = styled.button`
padding:2.5vh 2.5vw;
margin-left:5%;
background-color:blue;
color:white;
box-shadow: 1px 1px 10px 1px blue;
border-radius:10px;
font-weight:bold;
animation-name:button;
animation-duration:0.5s;
animation-iteration-count:infinite;
@keyframes button {
    0%{
        background-color:blue;
        color:white;
        box-shadow: 1px 1px 10px 1px blue;
        border-radius:10px;  
    }
    100%{
        background-color:tomato;
        color:white;
        box-shadow: 1px 1px 10px 1px tomato;
        border-radius:10px;
    }
}
`
export const HeaderSection = styled.div`
height: 60vh; 
margin-top:120px;
display:flex;
`
export const HeaderSectiontwo = styled.div`
height: 60vh; 
margin-top:120px;
`
export const HeaderImage = styled.div`
background-image: url(${Img2});
height:100%;
width:40%;
background-size:100% 100%;
margin-left:2%;
`
export const HeaderSecond = styled.div`
height:100%;
width:48%;
margin-left:2%;
`
export const HeaderHeading = styled.h1`
font-size:40px;
margin:10px 0 0 10px;
font-weight:700;
line-height:50px;
font-family:serif;
`
export const HeaderHeadingt = styled.h1`
font-size:60px;
width:100%;
text-align:center;
font-weight:700;
line-height:50px;
font-family:serif;
`
export const HeaderHeadingtwo = styled.h1`
font-size:35px;
width:100%;
text-align:center;
font-weight:700;
line-height:50px;
font-family:serif;
`
export const HeaderHeadingthree = styled.h1`
font-size:35px;
margin-top:-99px;
width:100%;
text-align:center;
font-weight:700;
line-height:50px;
font-family:serif;
letter-spacing:2px;
`
export const HeaderParagraph = styled.p`
font-size:20px;
font-weight:bold;
margin:50px 0 0 10px;
`

export const HeaderParagraphtwo = styled.p`
font-size:14px;
font-weight:bold;
margin:30px 0 0 100px;
width:86%

`
export const HeaderParagraphthree = styled.p`
font-size:16px;
font-weight:bold;
margin:10px 0 0 150px;
width:75%

`
export const HeaderParagraphFour = styled.p`
font-size:18px;
font-weight:500;
margin:10px 0 0 20%;
width:60%;
text-align:center;

`
export const HeaderButton = styled.button`
font-size:13px;
padding:2vh 2.5vw;
margin:30px 0 0  2%;
background-color:blue;
color:white;
display:block;
`
export const HeroButton = styled.button`
font-size:13px;
padding:2vh 4vw;
margin:30px 0 0  20%;
background-color:blue;
color:white;
display:block;
`
export const HeaderButtont = styled.button`
font-size:13px;
display:block;
padding:2px 3.3vw;
margin:-44px 0 0  24%;
background-color:blue;
color:white;
`
export const Social =  styled.div`
height:100px;
padding: 0 30px;
width:100%;
background-color:blue;
`

export const SocialHeading = styled.h1`
font-size:50px;
width:100%;
color:white;
text-align:center;
font-weight:700;
line-height:50px;
font-family:serif;
`
export const SocialParagraph = styled.p`
font-size:26px;
width:30%;
color:white;
margin-Left:65%;
text-align:center;
font-weight:700;
line-height:50px;
font-family:serif;
`
export const HeroSection = styled.div`
height:50vh;
width:60%;
display:flex;
justify-content:space-around;
margin-top:-200px;
margin-left:250px;
`
export const HeroCard = styled.div`
height:100%;
width:30%;
text-align:center;
`
export const LastSec = styled.div`
height:50vh;
width:80%;
margin:-30vh 0 0 10%;
display:flex;
justify-content:space-evenly;
`
export const LastCard = styled.div`
height:100%;
width:30%;
`
export const LastHeading = styled.h1`
font-size:25px;
width:100%;
margin-left:50px;
font-weight:700;
font-family:serif;
`

export const LastParagraph = styled.p`
text-align:start;
width:80%;
margin-left:20%;
margin-top:20px;
line-height:25px;
font-weight:500;
`
export const ButtonLast = styled.button`
padding:2.5vh 2.5vw;
margin-left:45%;
margin-top:30px;
background-color:blue;
color:white;
box-shadow: 1px 1px 10px 1px blue;
border-radius:10px;
font-weight:bold;
animation-name:buttonlst;
animation-duration:0.5s;
animation-iteration-count:infinite;
@keyframes buttonlst {
    0%{
        background-color:blue;
        color:white;
        box-shadow: 1px 1px 10px 1px blue;
        border-radius:10px;  
    }
    100%{
        background-color:white;
        color:white;
        box-shadow: 1px 1px 10px 1px white;
        border-radius:10px;
    }
}
`
export const LastFooter = styled.div`
height:20vh;
width:100%;
background-color:blue;
margin-top:20px;
padding-top:2vh;
padding-bottom:2vh;
display:flex;
flex-direction:column;
`
export const FooterParagraph = styled.p`
color:white;
margin-left:10vw;
`
export const FooterParagraph1 = styled.p`
color:white;
margin-left:10vw;
margin-top:1vw;

`
export const FooterParagraph2 = styled.p`
margin-left:10vw;
color:white;
margin-top:1.5vw;

`
export const Span = styled.span`
color:white;
margin:-23px 0 0 17vw;
height:30px;
font-weight:bold;
overflow:hidden;
white-space: nowrap;
border-right: 2px solid white;
animation-name:span;
animation-timing-function: linear;
animation-duration:5s;
animation-iteration-count:infinite;
@keyframes span {
    0%{
        width:0ch;
    }
    50%{

        width:16ch;
    }
    100%{
        width:0ch;
    }
}
`
export const Span2 = styled.span`
color:white;
margin:-23px 0 0 13vw;
height:30px;
font-weight:bold;
overflow:hidden;
white-space: nowrap;
border-right: 2px solid white;
animation-name:spanw;
animation-duration:5s;
animation-timing-function: linear;
animation-iteration-count:infinite;
@keyframes spanw {
    0%{
        width:0ch;
    }
    50%{
        width:17ch;

    }
    100%{
        width:0ch;
    }
}
`