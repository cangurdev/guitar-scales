interface ScaleProps {
  scaleNotes: string[];
}

function Scale({ scaleNotes }: ScaleProps) {
  return (
    <div className="scale">
      <p>Scale</p>
      {
        scaleNotes.map(
          (note, i) => `${note}${i !== scaleNotes.length - 1 ? "-" : ""}`
        )
      }
    </div>
  );
}

export default Scale;
