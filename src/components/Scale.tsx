interface ScaleProps {
    scale: string[];
}

function Scale({ scale }: ScaleProps) {
  return (
    <div className="scale">
      <p>Scale</p>
      { 
        scale.map( (note, i) => 
          `${note}${i !== scale.length -1 ? '-' : ''}`
        )
      }
    </div>
  );
}

export default Scale;