import React from "react";

interface FretboardProps {
  notes   : string[];
  note    : string;
  allNotes: string[];
}

const Fretboard: React.FC<FretboardProps> = ({ notes, note, allNotes }) => {
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
                  note === selectedNote ? "#FF6666" : "#A0A0A0"
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
      <div className = { `string-${i + 1}` }></div>
    ));
  };

  const getFrets = () => {
    let frets = [];

    for (let i = 0; i < 13; i++) {
      frets.push(
        <div className = { `fret-${i + 1}` }></div>
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
