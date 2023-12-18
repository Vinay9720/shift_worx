'use client';

import { SwxTypography } from '@/lib/common/components';

import { styles } from './edit-employee.styles';
import AdminNotes from '@/modules/admin-employee/admin-notes';
import AddNote from '../add-note';

function EditEmployeeStep4({ employeeData }) {
    return (
        <>
            <SwxTypography color='swxBlack' size='semiLarge' weight='bold'>
                Note(s)
            </SwxTypography>
            <AdminNotes employeeNotes addNote={<AddNote employee={employeeData} sx={styles.addButton} />} />
        </>
    );
}

export default EditEmployeeStep4;
