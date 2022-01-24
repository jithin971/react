import styled, { createGlobalStyle } from "styled-components"

export const Title = styled.h1`
color:red;
font-size:1.5rem;
text-align:center;
`
export const TitleFooter = styled.h1`
color:orange;
text-align:center;
`
export const Warpper = styled.section`
padding:20px
`
export const Container = styled.div`
display: flex;
flex-direction: column;
`

export const Container2 = styled(Container)`
justify-content: center;
align-items: center;
`

export const Para1 = styled.p`
font-size:13px;
color:#663d93;

`

export const Button = styled.button`
background: ${props => props.primary ? 'bisque' : 'black'} ;
    color:  ${props => props.primary ? 'black' : 'bisque'};
    font-size: 1em;
    margin: 1em;
    border: 2px solid green;
`

export const Anchor = styled.a`

font-size:10px;
color:green;

@media (min-width:768px){
    color:yellow
}

@media(min-width:1024px){
    color:blue
}

:hover{
    color:red
}
`

export const Input = styled.input`
font-size:14px;
border: 1px solid green
`
export const Input2 = styled(Input).attrs({
    type: "number",
    placeholder: "Enter Your Age"
})`
color :red;
margin:2px
`

export const GlobalStyle = createGlobalStyle`

body{
    margin:10px;
    padding:0;
    background-color:azure
}
`
