import styled from 'styled-components'


// make variables to use throughout 
const lightColor = `rgb(255,255,255)`;
const darkColor = `rgb(0,0,0)`;

export const ContainerStyle = styled.div`
    border: 8px solid ${darkColor};
    border-radius: 30px; 
    padding: 20px; 
    padding-top: 10px; 
    width: 50%;
    margin: 15px auto;  
    max-width: 400px;
    `
export const HeaderStyle = styled.h1`
    text-align: center; 
    font-size: 2rem;
    text-transform: uppercase;
    margin: auto; 
    `

export const SubHeader = styled.div `
        font-size: 1rem; 
        color: rgb(100,100,100); 
        text-align: center;
    `


// listStyle() wraps around an element that contains text, like a trait and its value, that wants the values to be on the left and right side of the element's container 
export const ListStyle = styled.span`
    font-size: 1.5rem;
    // border-bottom: 1px solid black;
    /* text-align: center; */
    text-transform: capitalize;
    display: flex; 
    flex-flow: row; 
    justify-content: space-around;
    `



export const ListItemName = styled.span`
    width: 40%;
    text-align: left; 
`

export const ListItemValue = styled.span`
    width: 20%;
    text-align: right;
    `
