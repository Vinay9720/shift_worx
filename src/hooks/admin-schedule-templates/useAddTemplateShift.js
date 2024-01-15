import { useMutation, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import AdminScheduleTemplatesService from '@/services/admin-schedule-templates';
import { closeModal } from '@/lib/store/slices/modal-slice';

import { useToast } from '../common';
import { lowerCase } from 'lodash';
import { useRouter, useParams } from 'next/navigation';

export const useAddTemplateShift = () => {
    const { templateType } = useSelector(state => state.adminScheduleTemplatesModule);
    const { templateId } = useParams();
    const router = useRouter();
    const queryClient = useQueryClient();
    const dispatch = useDispatch();
    const showToast = useToast();

    const addTemplateShift = ({ shiftData, savingTemplate }) => {
        const payload = {
            ...(!savingTemplate && {
                template_shift: {
                    days: [shiftData.days],
                    start_time: shiftData.start_time,
                    end_time: shiftData.end_time,
                    station: shiftData.facility_name,
                    role: shiftData.role.value,
                    speciality_id: shiftData.speciality.value,
                    facility_id: 1,
                    nurse_id: shiftData.employee.value,
                    additional_nurse_id: shiftData.employee_2 ? shiftData.employee_2.value : '',
                    ...(shiftData.week && { week: shiftData.week.value }),
                },
            }),
            shift_template: {
                template_type: lowerCase(templateType[0]),
                id: templateId !== 'new' ? templateId : null,
                template_name: shiftData.template_name || null,
                description: shiftData.description || null,
                assigned: shiftData.assigned || null,
                status: savingTemplate ? 'ready' : 'draft',
            },
        };
        return AdminScheduleTemplatesService.addTemplateShift(payload);
    };

    return useMutation(addTemplateShift, {
        onSuccess: async data => {
            const res = data.data;
            const id = res && res.template.id;
            queryClient.invalidateQueries('admin-schedule-template');
            dispatch(closeModal({ modalName: 'addTemplateShiftModal' }));
            dispatch(closeModal({ modalName: 'saveScheduleTemplateModal' }));
            showToast(!res.template_shift ? 'Template Successfully added!' : 'Shift Successfully Added!', 'success');
            if (!res.template_shift) {
                router.push('/admin/schedule?step=templates');
            } else {
                router.push(`/admin/schedule/create-template/${id}`);
            }
        },
        onError: error => {
            showToast(error.response.data.message, 'error');
        },
    });
};
