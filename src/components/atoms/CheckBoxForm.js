import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Checkbox } from '@mui/material';

function CheckBoxForm({...props}) {

    return ( 

        <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />}  {...props} />
        </FormGroup>
        
     );
}

export default CheckBoxForm;