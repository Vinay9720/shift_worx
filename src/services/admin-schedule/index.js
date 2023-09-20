import http from '../../httpCommon';

const fetchSchedule = (term, date) => {
    return http.get(`/shift_positions?term=${term}&shift_start_range=${date}`);
};

const addShift = shiftData => {
    const payload = {
        shift: {
            facility_id: '1',
            instructions: '',
            positions: [
                {
                    quantity: 1,
                    certificate_ids: ['1'],
                    speciality_ids: ['2'],
                    nurse_id: '2',
                    mandatory_lunch: true,
                },
            ],
            station: shiftData.facility_name,
            late_call_confirm: true,
            do_unavailability_check: true,
            dates: shiftData.date, // shiftData.date.map(date => moment(date, 'DD-MM-YYYY').format('MM-DD-YY')),
            start_time: shiftData.start_time,
            end_time: shiftData.end_time,
            uuids: ['e21996b1-f7fa-42ee-a470-622ec648bd20'],
        },
    };

    return http.post(`/shifts`, JSON.stringify(payload));
};

const AdminScheduleService = {
    fetchSchedule,
    addShift,
};

export default AdminScheduleService;
