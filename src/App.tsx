import React, { useEffect, useState } from 'react';
import './App.scss';
import Fretboard from './components/Fretboard';
import Options from './components/Options';
import Scale from './components/Scale';
import Chords from './components/Chords';
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