import React, {useEffect} from 'react';
import styled from 'styled-components';
import './App.css';
import CharacterSheet from './components/characterSheet';
import {connect} from 'react-redux';
import { createCharacter } from './state/actions';

const Unfortunate = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 50px;
`;

const GenerateButton = styled.button`
  border-radius: 5px;
  border: 1px solid #073642;
  background-color: #D90429;
  color: #EDF2F4;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  margin-top: 20px;
`;

function App({ createCharacter }) {
  useEffect(() => {
    createCharacter();
    }, [createCharacter]);
  return (
    <div className="App">
        <Unfortunate>And the next unfortunate villager is...</Unfortunate>
        <CharacterSheet />
        <GenerateButton onClick={createCharacter}>Oops, that one died...</GenerateButton>

    </div>
  );
}

const mapDispatchToProps = {
  createCharacter
}

export default connect(null, mapDispatchToProps)(App);
