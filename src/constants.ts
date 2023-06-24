export const allNotes: string[] = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B',
];

export const scaleRules: Record<string, ScaleRule> = {
    'major': {
        intervals: [2, 2, 1, 2, 2, 2, 1],
        chords   : ["", "m", "m", "", "", "m", "dim", ""],
        text     : 'Major'
    },
    'minor': {
        intervals: [2, 1, 2, 2, 1, 2, 2],
        chords   : ["m", "dim", "", "m", "m", "", "", "m"],
        text     : 'Minor'
    },
    'minor-pentatonic': {
        intervals: [3, 2, 2, 3, 2],
        chords   : ["m", "dim", "", "m", "m", "", "", "m"],
        text     : 'Minor Pentatonic',
    },
    'major-pentatonic': {
        intervals: [2, 2, 3, 2, 3],
        chords   : ["", "m", "m", "", "", "m", "dim", ""],
        text     : 'Major Pentatonic',
    },
};

interface ScaleRule {
    intervals: number[];
    chords   : string[];
    text     : string;
}