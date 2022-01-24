import styled from "styled-components";
import { accrnt } from "./color";

export const Container = styled.div`
display:flex;
flex-direction:column;
`
export const Header=styled.div`
display:flex;
justify-content: center;
`

export const Title=styled.h1`
color:red
`

export const Views=styled.div`
display:flex;
flex-direction:row;
`
export const LeftPannel=styled.div`
display:flex;
width:20%;
flex-direction:column;

ul{

    list-style:none;
    padding:0px 20px;
    background-color:#fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top:3px solid ${accrnt};
    li{
        padding :10px 0;
        border-top:1px solid gray;
        :first-of-type{
            border-top:none
        }
    }
}

`

export const List=styled.ul`
list-style:none;
padding:0px 20px;
background-color:#fff;
border-bottom-left-radius: 4px;
border-bottom-right-radius: 4px;
border-top:3px solid ${accrnt};
`

export const ListItem= styled.li`
padding :10px 0;
border-top:1px solid gray;
:first-of-type{
    border-top:none
}

`

export const RightPannel=styled.div`
display:flex;
width:80%;
padding:10px
`