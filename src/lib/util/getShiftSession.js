/* eslint-disable radix */
import { convertTo24HourFormat } from './convertTo24HourFormat';
import { shiftSessions } from '../constants';

export const getShiftSession = (start, end) => {
    const startTime = parseInt(convertTo24HourFormat(start).split(':')[0]);
    const endTime = parseInt(convertTo24HourFormat(end).split(':')[0]);

    const durationInRanges = shiftSessions.map(range => {
        let duration = 0;
        if (startTime <= endTime) {
            if (startTime <= range.end && endTime >= range.start) {
                duration = Math.min(endTime, range.end) - Math.max(startTime, range.start);
            }
        } else {
            if ((startTime <= range.end && range.end < 24) || (range.start <= endTime && endTime < 24)) {
                duration +=
                    (startTime <= range.end ? Math.min(endTime, range.end) : endTime) -
                    Math.max(startTime, range.start);
            }
            if (range.start <= endTime && endTime < 24) {
                duration += Math.min(endTime, range.end) - range.start;
            }
        }
        return { name: range.name, duration };
    });

    const maxDurationRange = durationInRanges.reduce((maxRange, currentRange) =>
        currentRange.duration > maxRange.duration ? currentRange : maxRange
    );

    return maxDurationRange.name;
};
