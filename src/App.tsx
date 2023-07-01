import React, { useEffect, useState } from 'react';
import './App.css';
import Fretboard from './components/fretboard';
import Options from './components/options';
import Scale from './components/scale';
import Chords from './components/chords';
import { getScale } from './utils';

function App() {
  const [selectedNote, setSelectedNote]   = useState<string>('C');
  const [selectedScale, setSelectedScale] = useState<string>('major');
  const [scaleNotes, setscaleNotes]       = useState<string[]>([]);
  
  useEffect( () => {
    const scale = getScale({
      note : selectedNote,
      scale: selectedScale
    });
    setscaleNotes(scale);
  }, [selectedNote, selectedScale])

  return (
    <div className = "App">
      <Fretboard 
        notes    = { scaleNotes }
        note     = { selectedNote }
      /> 
      <div className = 'selection'>
        <Options 
          updateNote  = { (note: string) => setSelectedNote(note) }
          updateScale = { (scale: string) => setSelectedScale(scale) }
          scaleNotes  = { scaleNotes }
        />
        <Scale 
          scaleNotes = { scaleNotes }
        />
        <Chords 
          scaleNotes = { scaleNotes }
          scale      = { selectedScale }
        />
      </div>
    </div>
  );
}

export default App;