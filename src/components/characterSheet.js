import React from 'react';
import { connect } from 'react-redux';


const CharacterSheet = ({name, gender, occupation, equipment, stats, traits}) => {
    console.log(name)
    const statElements = renderStats(stats);
    return(
        <div className="charSheet">
            <h2>Name: </h2>
            <h2>{name}</h2>
            <p>Gender: </p>
            <p>{gender}</p>
            <p>Occupation: </p>
            <p>{occupation}</p>
            <p>Equipment: </p>
            <p>{equipment}</p>
            <p>Stats: </p>
            {statElements}
            <p>Physical trait: </p>
            <p>{traits.physical}</p>
            <p>Personality trait: </p>
            <p>{traits.personality}</p>
            
            
        </div>
    ) 
}
const renderStats = (stats) => {
    return stats.map(x => 
        <p>{`${x.shortName}: ${x.value}`}</p>
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