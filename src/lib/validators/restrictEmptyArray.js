import { isEmpty } from 'lodash';

export const restrictEmptyArray = (value, errorMessage) => {
    if (isEmpty(value)) {
        return errorMessage;
    }
    return undefined;
};
