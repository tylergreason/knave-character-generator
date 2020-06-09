import React, {Component} from 'react' 
import { connect } from 'react-redux' 


const TraitCard = props => {
    return (
        <div
            onClick={() => props.handleClick()}
            // onClick = {console.log('clicked')}
        >
            {`${props.traitName} : ${props.traitValue}`}
        </div>
    )
}

export default TraitCard