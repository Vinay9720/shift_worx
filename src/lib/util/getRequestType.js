export const getRequestTypeByLabel = kind => {
    switch (kind) {
        case 'Sick Leave':
            return 'sick_leave';
        case 'Vacation':
            return 'vacation';
        case 'Jury Duty':
            return 'jury_duty';
        case 'Parental Leave':
            return 'parental_leave';
        case 'Bereavement Leave':
            return 'Bereavement Leave';
        case 'Holiday':
            return 'holiday';
        case 'Other':
            return 'other';
        case 'Personal':
            return 'personal';
        default:
            return 'personal';
    }
};
export const getRequestTypeByValue = kind => {
    switch (kind) {
        case 'sick_leave':
            return 'Sick Leave';
        case 'vacation':
            return 'Vacation';
        case 'jury_duty':
            return 'Jury Duty';
        case 'parental_leave':
            return 'Parental Leave';
        case 'Bereavement Leave':
            return 'Bereavement Leave';
        case 'holiday':
            return 'Holiday';
        case 'other':
            return 'Other';
        case 'personal':
            return 'Personal';
        default:
            return 'Personal';
    }
};
