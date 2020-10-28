import React from 'react';
import Button from '@material-ui/core/Button';

const ButtonElevation = ({ title, onClick }) => {
  return (
    <Button variant="contained" color="primary" disableElevation onClick={onClick}>
      {title}
    </Button>
  );
}

export default ButtonElevation;