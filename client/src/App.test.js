import {fireEvent, render, act, findByTestId, waitFor} from '@testing-library/react';
import App from './App';
import { createServer, Response } from "miragejs"

test('renders correctly', () => {
  const {getByText, getByTestId} = render(<App />);
  const title = getByText("Roman numeral converter");
  expect(title).toBeInTheDocument();

  const input = getByTestId("numberInput");
  expect(input).toBeInTheDocument();

  const button = getByTestId("convertButton");
  expect(button).toBeInTheDocument();

  const romanNumeral = getByTestId("romanNumeralDisplay");
  expect(romanNumeral).toBeInTheDocument();
});

test('convertor handles response correctly', async () => {
  const mockResponse = {
    input: "4",
    output: "IV"
  };
  const server = createServer({
    environment: "test",
    routes() {
      this.get('/romannumeral', () => mockResponse)
    }
  });

  const { getByTestId, findByTestId} = render(<App />);
  const input = getByTestId("numberInput");

  fireEvent.change(input, {target: {value: '4'}});
  const button = getByTestId("convertButton");
  act(() => {
    fireEvent.click(button);
  });
  const romanNumeral = await findByTestId("romanNumeral");
  expect(romanNumeral.innerHTML).toBe(mockResponse.output);
});

test('Validates number before sending the request', () => {
  const { getByTestId, getByText } = render(<App />);
  const input = getByTestId("numberInput");

  fireEvent.change(input, {target: {value: '0'}});
  waitFor(() => {
    getByText('Please enter a whole number between 1 and 3999');
  });

  fireEvent.change(input, {target: {value: '12.3'}});
  waitFor(() => {
    getByText('Please enter a whole number between 1 and 3999');
  });

  fireEvent.change(input, {target: {value: '4000'}});
  waitFor(() => {
    getByText('Please enter a whole number between 1 and 3999');
  });

  fireEvent.change(input, {target: {value: 'abc'}});
  waitFor(() => {
    getByText('Please enter a whole number between 1 and 3999');
  });

  fireEvent.change(input, {target: {value: ''}});
  waitFor(() => {
    getByText('Please enter a whole number between 1 and 3999');
  });
})