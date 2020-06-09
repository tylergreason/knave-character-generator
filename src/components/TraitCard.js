import React, {Component} from 'react' 
import { connect } from 'react-redux' 

const TraitCard = props => {
    return (
        <div>
            {`${props.traitName} : ${props.traitValue}`}
        </div>
    )
}

export default TraitCard