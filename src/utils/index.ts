import { allNotes, scaleRules } from '../constants';

interface getScaleProps {
    note : string,
    scale: string
}

export const getScale = ({ note, scale }: getScaleProps) : string[]=> {
    let i          = allNotes.indexOf(note);
    let scaleNotes = [note];

    scaleRules[scale].intervals.forEach(v => {
        i += v;

        scaleNotes.push(allNotes[i % 12]);
    });

    return scaleNotes;
}