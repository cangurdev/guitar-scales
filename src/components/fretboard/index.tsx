import React from "react";
import { allNotes } from '../../constants';

interface FretboardProps {
  notes   : string[];
  note    : string;
}

const Fretboard: React.FC<FretboardProps> = ({ notes, note }) => {
  const strings = ["E", "B", "G", "D", "A", "E"];

  const printNotes = () => {
    const result = [];
    
    for (let i = 0; i < 6; i++) {
      let selectedNote = strings[i];
      const index = allNotes.indexOf(selectedNote);
      
      for (let j = 0; j < 13; j++) {
        if (notes.includes(selectedNote)) {
          const divId = `${i}${selectedNote}`;
          
          result.push(
            <div
              className = { `note` }
              key       = { j + divId }
              id        = { j + divId }
              style     = {{
                left           : `${j * 50 - 37}px`,
                top            : `${i * 30 - 10}px`,
                backgroundColor: `${
                  note === selectedNote ? "#FFC26F" : "#F9E0BB"
                }`,
              }}
            >
              { selectedNote }
            </div>
          );
        }

        selectedNote = allNotes[(index + j + 1) % 12];
      }
    }

    return result;
  };

  const getStrings = () => {
    return strings.map((_string, i) => (
      <div 
        className = { `string` }
        style     = {{ top: `${i*30}px`}}
        key       = { 'string-' + i }
      ></div>
    ));
  };

  const getFrets = () => {
    let frets = [];

    for (let i = 0; i < 13; i++) {
      frets.push(
        <div 
          className = { `fret` }
          style     = {{ left: `${ (i) * 50}px`}}
          key       = { 'fret-' + i}
        >
          <span className="top">
            { i }
          </span>
          <span className="bottom">
            { i }
          </span>
        </div>
      );
    }

    return frets;
  };

  return (
    <div className="fretboard">
      { getStrings() }
      { getFrets() }
      { printNotes() }
    </div>
  );
};

export default Fretboard;
