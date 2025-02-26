import React, { useState } from 'react';
import { defaultTheme, Provider, Button, TextField, ButtonGroup, Form } from '@adobe/react-spectrum';
import { getConverted } from './requests';


function App() {
  const [romanNumeral, setRomanNumeral] = useState('');
  const [number, setNumber] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  
  const onSubmit = (e) => {
    e.preventDefault();
    getConverted(number, setRomanNumeral);
  }



  return (
    <Provider theme={defaultTheme} height={'100%'}>
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '2rem',
          width: '25rem'
        }}
      >
        <h1>
          Roman numeral converter
        </h1>
        <br/>
        <Form validationBehavior="native" onSubmit={onSubmit}>
          <TextField 
            label="Enter a number" 
            type="number" 
            onChange={setNumber} 
            isRequired 
            validate={(value => {
              const errorMessage = "Please enter a whole number between 1 and 3999";
              if (!value) {
                setButtonDisabled(true);
                return errorMessage;
              }
              if (value.indexOf('.') >= 0) {
                setButtonDisabled(true);
                return errorMessage;
              }
              const num = parseInt(value);
              if (isNaN(num) || num < 1 || num > 3999) {
                setButtonDisabled(true);
                return errorMessage;
              }
              setButtonDisabled(false);
              return null;
            })}
          />
          <ButtonGroup>
            <Button 
              isDisabled={buttonDisabled} 
              variant="primary" 
              type="submit"
            >
              Convert to roman numeral
            </Button>
          </ButtonGroup>
        </Form>
        <br/>
        <div>Roman numeral: {romanNumeral}</div>
      </div>
    </Provider>
  );
}

export default App;
