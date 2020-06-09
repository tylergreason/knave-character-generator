import React, { Component } from 'react' 
import { connect } from 'react-redux'
import styled from 'styled-components'


const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: palevioletred;
`;
class Abilities extends Component {
    render(){
        return(
            <>
                <Title>
                    Abilities
                </Title>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        abilities: state.knave.abilities
    }
}


export default connect(mapStateToProps, {})(Abilities); 