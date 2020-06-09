export const mainComponentStyle = () => {
    return `
    border: 1px solid black;
    border-radius: 10px; 
    padding: 10px; 
    width: 50%;
    margin: 15px auto; 
    `
}

export const mainHeaderStyle = () => {
    return `
    text-align: center; 
    `
}

// listStyle() wraps around an element that contains text, like a trait and its value, that wants the values to be on the left and right side of the element's container 
export const listStyle = () => {
    return `
    font-size: 2rem;
    border-bottom: 1px solid black;
    /* text-align: center; */
    text-transform: capitalize;
    display: flex; 
    flex-flow: row; 
    justify-content: space-around;
    `
}