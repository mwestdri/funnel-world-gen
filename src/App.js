import React from 'react';
import './App.css';
import CharacterSheet from './components/characterSheet';
import {connect} from 'react-redux';
import { createCharacter } from './state/actions';

function App({ createCharacter }) {
  return (
    <div className="App">
      <header className="App-header">
        <button className="generateButton" onClick={createCharacter}>Make My Character</button>
        <CharacterSheet />
        
      </header>
    </div>
  );
}

const mapDispatchToProps = {
  createCharacter
}

export default connect(null, mapDispatchToProps)(App);
