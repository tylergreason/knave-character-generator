import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { mainComponentStyle, mainHeaderStyle } from '../styling/generaStyles'

const StatsContainer = styled.div`${mainComponentStyle()}`
const StatsHeader = styled.h1`${mainHeaderStyle()}`

class Stats extends Component {
    render(){
        return(
        <StatsContainer>
            <StatsHeader>
                Statistics
            </StatsHeader>
        </StatsContainer>)
    }
}

const mapStateToProps = state => {
    return {
        stats: ''
    }
}

export default connect(mapStateToProps)(Stats)