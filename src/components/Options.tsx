import React from 'react';

interface OptionsProps {
  updateNote : (note:string) => void;
  updateScale: (note:string) => void;
  scaleNotes : string[];
  scales     : string[];
  notes      : string[];
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
    <div className="App">
      <select
        onChange = { handleNoteChange }
      >
        {
          props.notes.map( note => (
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
        onChange = { handleScaleChange }
      >
        {
          props.scales.map( scale => (
            <option 
              value = { scale }
              key   = { scale }
            >
              { scale }
            </option>
          ))
        }
      </select>
    </div>
  );
}

export default Options;