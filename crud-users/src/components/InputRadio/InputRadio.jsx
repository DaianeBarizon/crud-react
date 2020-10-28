import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const InputRadio = ({ title, handleChange, value }) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{title}</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="Administrador" control={<Radio />} label="Administrador" />
        <FormControlLabel value="Usuário Padrão" control={<Radio />} label="Usuário Padrão" />
      </RadioGroup>
    </FormControl>
  );
};

export default InputRadio;