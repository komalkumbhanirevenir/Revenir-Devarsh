import React from 'react'
import './button.css'
import Button from '@mui/material/Button';

interface ButtonProps {
  btnText: any;
  handleNext?: () => any;
  handleBack?: () => any;
  handleOnfido?: () => any;
}



const Revbutton: React.FC<ButtonProps> = ({ btnText, handleNext, handleBack, handleOnfido }) => {

  const handleEvents = () => {
    if (handleNext) {
      handleNext();

      if (handleOnfido) {
        handleOnfido();
      }
    }
    else if (handleBack) {
      handleBack();
    }
  };
  return (
    <Button className='btn-theme' variant='contained' onClick={handleEvents}>
      {btnText}
    </Button>
  )
}

export default Revbutton
