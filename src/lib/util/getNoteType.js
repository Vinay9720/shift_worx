export const getNoteTypeByValue = kind => {
    switch (kind) {
        case 7:
            return 'Commendation';
        case 8:
            return 'Disciplinary';
        case 9:
            return 'Human Resources';
        case 11:
            return 'Message Sent';
        case 12:
            return 'Tardiness';
        default:
            return 'Tardiness';
    }
};
export const getNoteTypeByLabel = kind => {
    switch (kind) {
        case 'Commendation':
            return 7;
        case 'Disciplinary':
            return 8;
        case 'Human Resources':
            return 9;
        case 'Message Sent':
            return 11;
        case 'Tardiness':
            return '12';
        default:
            return 12;
    }
};
