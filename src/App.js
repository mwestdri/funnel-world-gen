import React, {useEffect} from 'react';
import styled from 'styled-components';
import './App.css';
import CharacterSheet from './components/characterSheet';
import {connect} from 'react-redux';
import { createCharacter } from './state/actions';

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
        <div>And the next unfortunate villager is...</div>
        <CharacterSheet />
        <GenerateButton onClick={createCharacter}>Oops, that one died...</GenerateButton>

    </div>
  );
}

const mapDispatchToProps = {
  createCharacter
}

export default connect(null, mapDispatchToProps)(App);
