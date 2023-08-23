'use client';

import { useSearchParams } from 'next/navigation';
import { Stack } from '@mui/material';

import { SwxTypography, SwxTabs } from '../common/components';

export default function AdminLayout({ children }) {
    const searchParams = useSearchParams();
    const currentStep = searchParams.get('step');
    return (
        <Stack direction='column' spacing={5} sx={{ mt: 7 }}>
            <SwxTypography color='swxBlack' size='extraLarge' weight='bold'>
                Employees
            </SwxTypography>
            <SwxTabs
                tabs={[
                    { label: 'General Information', step: 'general' },
                    { label: 'Personal Documents', step: 'documents' },
                    { label: 'Certs/Licenses', step: 'certifications' },
                    { label: 'Notes', step: 'notes' },
                ]}
                currentStep={currentStep}
            />
            {children}
        </Stack>
    );
}
// 'use client';

// import { usePathname } from 'next/navigation';

// import { Heading, LinkTabs } from '@/components/common';

// export default function Layout({ children }) {
//     const pathname = usePathname();

//     return (
//         <div className='mx-5 md:mx-20 sm:bg-white xs:bg-white'>
//             <Heading
//                 color='light'
//                 className='text-[28px] mt-[58px] mb-[42px] font-[700] sm:text-brand xs:text-brand md:text-headerColor'>
//                 Employees
//             </Heading>
//             <LinkTabs
//                 links={[
//                     { label: 'Overview', href: '/admin/employees/overview' },
//                     { label: 'Expirations', href: '/admin/employees/expirations' },
//                     { label: 'PTO', href: '/admin/employees/pto' },
//                     { label: 'Notes', href: '/admin/employees/notes' },
//                 ]}
//                 pathname={pathname}
//             />
//             {children}
//         </div>
//     );
// }
