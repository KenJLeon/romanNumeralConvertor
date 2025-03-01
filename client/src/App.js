import React, { useState, useEffect } from 'react';
import { defaultTheme, Provider, Button, TextField, ButtonGroup, Form } from '@adobe/react-spectrum';
import { getConverted } from './requests';


function App() {
  const [romanNumeral, setRomanNumeral] = useState('');
  const [number, setNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    getConverted(number, setRomanNumeral);
    setIsLoading(false);
  }

  return (
    <Provider theme={defaultTheme} height={'100%'}>
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '2rem',
          width: '22rem'
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
            data-testid="numberInput"
            validate={(value => {
              const errorMessage = "Please enter a whole number between 1 and 3999";
              if (!value) {
                return errorMessage;
              }
              if (value.indexOf('.') >= 0) {
                return errorMessage;
              }
              const num = parseInt(value);
              if (isNaN(num) || num < 1 || num > 3999) {
                return errorMessage;
              }
              return null;
            })}
          />
          <ButtonGroup>
            <Button 
              variant="primary" 
              type="submit"
              data-testid="convertButton"
              isDisabled={isLoading}
            >
              Convert to roman numeral
            </Button>
          </ButtonGroup>
        </Form>
        <br/>
        <div data-testid="romanNumeralDisplay">
          Roman numeral: {romanNumeral ? <span data-testid="romanNumeral">{romanNumeral}</span> : null}</div>
      </div>
    </Provider>
  );
}

export default App;
