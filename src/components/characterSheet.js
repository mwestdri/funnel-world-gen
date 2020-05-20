import React from 'react';
import { connect } from 'react-redux';


const CharacterSheet = ({name}) => {
    console.log(name)
    return(
        <div className="charSheet">
            <h2>Name: </h2>
            <h2>{name}</h2>
        </div>
    ) 
}

const mapStateToProps = (state) => {
    return {
        name: state.name
    }
}

export default connect(mapStateToProps)(CharacterSheet);