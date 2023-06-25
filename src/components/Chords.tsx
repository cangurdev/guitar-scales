import { scaleRules } from '../constants';
import { getScale } from '../utils';

interface ScaleProps {
  scaleNotes: string[];
  scale     : string;
}

function Chords({ scale, scaleNotes }: ScaleProps) {
  const root: string = scaleNotes[0];
  scale = scale.includes('minor') ? 'minor' : 'major';
  const rootScale: string[] = getScale({
    note : root,
    scale: scale
  });
  const rule: string[] = scaleRules[scale].chords;

  return (
    <div className="scale">
      <p>Chords</p>
      {
        rootScale.map(
            (note, i) => `${note}${rule[i]} ${i !== rootScale.length - 1 ? "- " : ""}`
        )
      }
    </div>
  );
}

export default Chords;
