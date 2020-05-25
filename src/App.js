import React, {useEffect} from 'react';
import './App.css';
import CharacterSheet from './components/characterSheet';
import {connect} from 'react-redux';
import { createCharacter } from './state/actions';

function App({ createCharacter }) {
  useEffect(() => {
    createCharacter();
    }, []);
  return (
    <div className="App">
        <div>And the next unfortunate villager is...</div>
        <CharacterSheet />
        <div className="generateButton" onClick={createCharacter}>Oops, that one died...</div>
        
    </div>
  );
}

const mapDispatchToProps = {
  createCharacter
}

export default connect(null, mapDispatchToProps)(App);
