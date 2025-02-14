import { useMutation, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import AdminScheduleTemplatesService from '@/services/admin-schedule-templates';
import { closeModal } from '@/lib/store/slices/modal-slice';

import { useToast } from '../common';
import { lowerCase } from 'lodash';
import { useRouter, useParams, usePathname } from 'next/navigation';
import { clearState, setTemplateShiftTobeEdited } from '@/lib/store/slices/admin-schedule-templates-module';

export const useAddTemplateShift = () => {
    const { templateType } = useSelector(state => state.adminScheduleTemplatesModule);
    const { templateId } = useParams();
    const path = usePathname();
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
                    nurse_id: shiftData.employee ? shiftData.employee.value : null,
                    additional_nurse_id: shiftData.employee_2 ? shiftData.employee_2.value : '',
                    ...(shiftData.week && { week: shiftData.week.value }),
                },
            }),
            shift_template: {
                template_type: lowerCase(templateType[0]),
                id: templateId !== 'new' ? templateId : null,
                ...(shiftData.template_name !== undefined && { name: shiftData.template_name }),
                ...(shiftData.description !== undefined && { description: shiftData.description }),
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
            dispatch(setTemplateShiftTobeEdited(null));
            dispatch(closeModal({ modalName: 'addTemplateShiftModal' }));
            dispatch(closeModal({ modalName: 'saveScheduleTemplateModal' }));
            dispatch(clearState());
            showToast(res.template ? 'Template Successfully added!' : 'Shift Successfully Added!', 'success');
            if (!res.template_shift) {
                router.push('/admin/schedule?step=templates');
            } else if (templateId === 'new') {
                router.push(`/admin/schedule/create-template/${id}`);
            } else {
                router.push(path);
            }
        },
        onError: error => {
            dispatch(setTemplateShiftTobeEdited(null));
            showToast(error.response.data.message, 'error');
        },
    });
};
