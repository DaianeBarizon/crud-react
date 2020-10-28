import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Check = ({ checked, label, handleChangeCheckbox}) => {
  return (
    <FormGroup row>
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={handleChangeCheckbox} name="checked" />}
        label={label}
      />
    </FormGroup>
  );
}

export default Check;