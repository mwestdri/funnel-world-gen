import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import './characterSheet.css';

const StatBlock = styled.div`
  align-items: center;
  display: flex;
  margin: 5px 0;
`;

const StatName = styled.div`
  font-weight: bold;
  width: 50px;
`;

const StatMod = styled.div`
  align-items: center;
  border-radius: 3px;
  border: 1px solid black;
  display: flex;
  height: 50px;
  justify-content: space-around;
  width: 50px;
`;

const CharacterSheet = ({name, gender, occupation, equipment, stats, traits}) => {
    console.log(equipment)
    const hpLoadStats = stats.slice(-2);

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
            <div>
                {stats.slice(0, stats.length - 2).map(x => (
                  <StatBlock key={x.shortName}>
                    <StatName> {x.shortName} </StatName>
                    <StatMod> {x.value}</StatMod>
                  </StatBlock>
                ))}
            </div>

        </div>
    )
}
const renderOtherStats = (stats) => {

    return stats.map(x =>
        <span className="hpLoad" key={x.shortName}>{`${x.shortName}: ${x.value}`}</span>
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
