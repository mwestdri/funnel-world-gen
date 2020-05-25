import React from 'react';
import { connect } from 'react-redux';
import './characterSheet.css';


const CharacterSheet = ({name, gender, occupation, equipment, stats, traits}) => {
    console.log(equipment)
    const hpLoadStats = stats.slice(-2);
    const otherStats = stats.slice(0, stats.length -2);
    const statElements = renderStats(otherStats);

    return(
        <div className="charSheet">
            <div className="name section">
                <span className="nameLabel">Name: </span>
                {name}
                </div>
            <div className="section">
                {`${gender === 'Male' ? 'He' : 'She'} is a ${traits.personality} ${traits.physical} ${occupation}.`}
            </div>
            <div>
                {`Right now ${gender === 'Male' ? 'he' : 'she'} is carrying ${equipment}`}
            </div>
            <div className="section">
                {renderOtherStats(hpLoadStats)}
            </div>
            <div className="statsContainer section">
                <span className="stats"> Stat Modifiers: </span>
                {statElements}
            </div>

        </div>
    ) 
}
const renderOtherStats = (stats) => {

    return stats.map(x => 
        <span className="hpLoad">{`${x.shortName}: ${x.value}`}</span>
    );
}
const renderStats = (stats) => {
    return stats.map(x => 
        <div className="stat">{`${x.shortName}: ${x.value}`}</div>
    );
}


const mapStateToProps = (state) => {
    return {
        name: state.name,
        gender: state.gender,
        occupation: state.occupation,
        equipment: state.equipment,
        stats: state.stats,
        traits: state.traits
    }
}

export default connect(mapStateToProps)(CharacterSheet);