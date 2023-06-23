import React, { useEffect, useState } from 'react';
import './App.scss';
import Fretboard from './components/Fretboard';
import Options from './components/Options';
import Scale from './components/Scale';

function App() {
  const [selectedNote, setSelectedNote]   = useState<string>('C');
  const [selectedScale, setSelectedScale] = useState<string>('major');
  const [scaleNotes, setscaleNotes]       = useState<string[]>([]);
  
  const notes = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B',
  ];
  const rules:{ [key: string]: number[] } = {
    'major': [2, 2, 1, 2, 2, 2, 1],
    'minor': [2, 1, 2, 2, 1, 2, 2]
  };
  const scales = [
    'major',
    'minor'
  ];

  const getScale = () => {
    let i     = notes.indexOf(selectedNote);
    let scale = [ selectedNote ];
    
    rules[selectedScale].forEach(x => {
      i += x;
      
      scale.push(notes[i % 12]);
    });
    setscaleNotes(scale)
  }

  useEffect( () => {
    getScale();
  }, [selectedNote, selectedScale])

  return (
    <div className="App">
       <Options 
        updateNote  = { (note: string) => setSelectedNote(note) }
        updateScale = { (scale: string) => setSelectedScale(scale) }
        scaleNotes  = { scaleNotes }
        scales      = { scales }
        notes       = { notes }
      />
      <Fretboard 
        notes    = { scaleNotes }
        note     = { selectedNote }
        allNotes = { notes }
      />
      <Scale 
        scale = { scaleNotes }
      />
    </div>
  );
}

export default App;