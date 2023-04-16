import styled from "styled-components"


export const FormStyled = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
padding: 56px;
position: absolute;
width: 54vw;
height: 88vh;
left: 14vw;
top: 19vh;
font-style:comic;
background: #FFFFFF;
border-radius: 24px 24px 200px 24px;
form{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;

label{
color: #DCDCDC;
display:flex;
flex-direction:column;
margin-bottom:10px;
font-style:poppins;
} 
input{
display: flex;
justify-content:center;
align-items:center;
/* flex-direction: row; */
align-items: flex-start;
padding: 12px 24px;
gap: 8px;
margin-bottom:47px;
width: 8vw;
height: 8vh;
border-color: #DCDCDC;
outline:none;
/* margin-right: 50px; */
}
button{
background: #854DFF;
border-radius: 216px;
width: 76px;
height: 76px;
margin:none;
border: none;
outline: none;
}
}
div{
background-color:black;
width:36vw;
height:1px;
background: #DCDCDC
}

`