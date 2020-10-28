import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const InputField = ({ label, value, setValue, type }) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id={'standard-required'}
        required
        label={label}
        defaultValue={value}
        variant="outlined"
        type={type}
        onChange={e => setValue(e.target.value)}
        style={{ width: '100%' }}
      />
    </form>
  );
}

export default InputField;