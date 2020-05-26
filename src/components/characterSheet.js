import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Container = styled.div`
  background-color: #EDF2F4;
  color: #2B2D42;
  padding: 20px 20px 30px 20px;
  max-width: 600px;
  min-width: 500px;
`

const Name = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Sheet = styled.div`
  display: flex;
  flex-direction: row;
`;

const Details = styled.div`
  margin-top: 10px;
`;

const List = styled.ul`
  margin: 0px;
`;

const Stats = styled.div`
  width: 40%;
`;

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

const Health = styled.div`
  margin: 10px 0;
  position: relative;
`;

const Heart = styled.span`
  background-color: #EF233C;
  display: inline-block;
  height: 30px;
  margin: 0 10px;
  position: relative;
  top: 0;
  transform: rotate(-45deg);
  width: 30px;

  :before,
  :after {
    content: "";
    background-color: #EF233C;
    border-radius: 50%;
    height: 30px;
    position: absolute;
    width: 30px;
  }

  :before {
    top: -15px;
    left: 0;
  }

  :after {
    left: 15px;
    top: 0;
  }
`;

const HeartStat = styled.div`
  font-weight: bold;
  position: absolute;
  left: ${props => props.wide ? 15 : 19}px;
  top: 2px;
`;

const CharacterSheet = ({name, gender, occupation, equipment, stats, traits}) => (
  <Container>
    <Name> {name} { gender === 'Male' ? '(He/Him)' : '(She/Her)' }</Name>
    <Sheet>
      <Stats>
        <div>
          {stats.length &&
            <StatBlock>
              <StatName>HP</StatName>
              <Health>
                <Heart></Heart>
                <HeartStat wide={stats[stats.length - 2].value > 10}> {stats[stats.length - 2].value} </HeartStat>
              </Health>
            </StatBlock>
          }
        </div>
        <div>
            {stats.slice(0, stats.length - 2).map(x => (
              <StatBlock key={x.shortName}>
                <StatName> {x.shortName} </StatName>
                <StatMod> {x.value}</StatMod>
              </StatBlock>
            ))}
        </div>
      </Stats>
      <Details>
        <div> Occupation: {occupation} </div>
        <div> Traits: </div>
        <List>
          <li> {traits.personality} </li>
          <li> {traits.physical} </li>
        </List>
        <div> Equipment: </div>
        <List>
          {equipment.map(equip => ( <li> {equip} </li> ))}
        </List>
      </Details>
    </Sheet>
  </Container>
)

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
