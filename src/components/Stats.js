import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { setArmorStats } from '../store/actions/statActions'
import StatCard from './StatCard'
import { ContainerStyle, HeaderStyle, SubHeader } from '../styling/generaStyles'

const StatsContainer = styled(ContainerStyle)`
    border: none; 
    font-size: 2rem;
    text-align: center; 
    `
// const StatsContainer = styled.div`${mainComponentStyle()}`
const StatsHeader = styled(HeaderStyle)``

class Stats extends Component {
    
    componentDidUpdate = () => {
        // set armor defense value once stats and inventory have been set 
        if (this.props.stats.armorDefense === 0){
            let totalArmor = 0; 
            console.log(this.props.inventory)
            this.props.inventory.forEach(i => totalArmor += i.defense); 
            console.log(totalArmor)
            if (totalArmor < 1){
                console.log('armor set')
                this.props.setArmorStats(11)
            }else{
                this.props.setArmorStats(totalArmor); 
            }
        }
    }

    renderStatCards = stats => {
        return (
        <>
            <StatCard 
                statName={'Name'}
                statValue={stats['name']}
            ></StatCard>
            {/* <StatCard 
                statName={'Armor Bonus'}
                statValue={stats['armorBonus']}
            ></StatCard> */}
            {/* <StatCard 
                statName={'Armor Defense'}
                statValue = {`${stats['armorDefense']} / ${stats['armorBonus']}`}
                statValue={stats['armorDefense']}
            ></StatCard> */}
            <StatCard 
                statName={'Hit Points'}
                statValue={stats['hitPoints']}
            ></StatCard>
        </>
        )
    }

    render(){
        return(
        <StatsContainer>
        {this.props.stats.name}, 
        {this.props.stats.hitPoints}HP
            {/* <StatsHeader>
                Statistics
            </StatsHeader>
            {this.renderStatCards(this.props.stats)} */}
        </StatsContainer>
        )
    }
}

const mapStateToProps = state => {
    return {
        stats: state.knave.stats,
        abilities: state.knave.abilities, 
        inventory: state.knave.inventory
    }
}

export default connect(mapStateToProps, {setArmorStats})(Stats)