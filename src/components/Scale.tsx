interface ScaleProps {
  scaleNotes: string[];
}

function Scale({ scaleNotes }: ScaleProps) {
  const getNotes = () : string => {
    let notes = '';

    scaleNotes.forEach(
      (note, i) => notes += `${note}${i !== scaleNotes.length - 1 ? "-" : ""}`
    );
    
    return notes;
  }

  return (
    <div className="scale">
      <p>Scale</p>
      <div>
        {
          getNotes()
        }
      </div>
    </div>
  );
}

export default Scale;
