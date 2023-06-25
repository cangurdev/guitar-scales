import React from 'react';
import { allNotes, scaleRules } from '../constants';

interface OptionsProps {
  updateNote : (note:string) => void;
  updateScale: (note:string) => void;
  scaleNotes : string[];
}

function Options(props: OptionsProps ) {
  const handleNoteChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const note = event.target.value;
    props.updateNote(note);
  };
  
  const handleScaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const scale = event.target.value;
    props.updateScale(scale);
  };

  return (
    <div className="options">
      <select
        className   = 'note-options'
        onChange    = { handleNoteChange }
        data-testid = 'note-options'
      >
        {
          allNotes.map( note => (
            <option 
              value = { note }
              key   = { note }
            >
              { note }
            </option>
          ))
        }
      </select>
      <select
        className   = 'scale-options'
        onChange    = { handleScaleChange }
        data-testid = 'scale-options'
      >
        {
           Object.keys(scaleRules).map( scale => (
            <option 
              value = { scale }
              key   = { scale }
            >
              { scaleRules[scale].text }
            </option>
          ))
        }
      </select>
    </div>
  );
}

export default Options;