import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

// Can be configured to be used as a common navigation in future
import { setCurrentStep } from '@/lib/store/slices/edit-employee-module';

const stepsMap = {
    1: 'profile_information',
    2: 'personal_documents',
    3: 'certificates',
    4: 'notes',
};

export const useEditEmployeeNavigation = () => {
    const dispatch = useDispatch();
    const searchParams = useSearchParams();
    const newParams = new URLSearchParams(searchParams);
    const router = useRouter();
    const pathname = usePathname();

    const navigateTo = stepNumber => {
        dispatch(setCurrentStep(+stepNumber));
        const step = stepsMap[+stepNumber];
        newParams.set('step', step);
        router.push(`${pathname}?${newParams}`);
    };

    return navigateTo;
};
