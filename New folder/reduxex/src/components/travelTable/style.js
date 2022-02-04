import styled from "styled-components";


export const Title = styled.h1`
    text-align: center;
    font-size: 20px;
`
export const Container = styled.div`
    max-width: 80%;
    margin: 50px auto;
`

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    th{
        text-align: left;
        border-bottom: 1px solid #3e3e3e;
        background: #3e3e3e;
        padding: 10px 15px;
        color: #fff;
    }
    td{
        padding: 10px 15px;
        border-bottom: 1px solid #ddd;
    }
    h4{
        margin:0;
    }
`
export const Button = styled.button`
    padding: 10px 15px;
    font-size: 16px;
    border: 0;
    outline: none;
    background-color: #1976d2;
    color: #fff;
    width: 120px;
    border-radius: 5px;
    cursor: pointer;
`

export const DisbaledButton = styled(Button)`
    color: rgba(0, 0, 0, 0.26);
    background-color: rgba(0, 0, 0, 0.12);
    cursor: no-drop;
`