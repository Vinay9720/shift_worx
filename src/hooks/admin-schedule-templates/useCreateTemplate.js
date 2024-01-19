import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import AdminScheduleTemplatesService from '@/services/admin-schedule-templates';
import { closeModal } from '@/lib/store/slices/modal-slice';

import { useToast } from '../common';
import { clearState } from '@/lib/store/slices/admin-schedule-templates-module';
import { useSchedule } from '../admin-schedule/useSchedule';

export const useCreateTemplate = () => {
    const { scheduleType } = useSelector(state => state.adminScheduleModule);
    const { data: scheduleData } = useSchedule();
    const dispatch = useDispatch();
    const showToast = useToast();

    const getShiftIds = records => {
        const shiftIds = [];

        records.forEach(record => {
            const shifts = Object.values(record.shifts);
            const allShifts = [].concat(...shifts);
            const ids = allShifts.map(shift => shift.id);
            shiftIds.push(...ids);
        });

        return shiftIds;
    };

    const createTemplate = ({ shiftData }) => {
        const payload = {
            template_shift: {
                ids: scheduleData ? getShiftIds(scheduleData.records) : [],
            },
            shift_template: {
                template_name: shiftData.template_name || null,
                description: shiftData.description || null,
                assigned: shiftData.assigned || null,
                template_type: scheduleType,
            },
        };
        return AdminScheduleTemplatesService.createTemplate(payload);
    };

    return useMutation(createTemplate, {
        onSuccess: async () => {
            dispatch(closeModal({ modalName: 'saveScheduleTemplateModal' }));
            dispatch(clearState());
            showToast('Template Successfully added!', 'success');
        },
        onError: error => {
            showToast(error.response.data.message, 'error');
        },
    });
};
