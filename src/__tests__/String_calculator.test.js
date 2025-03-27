import { render, screen, fireEvent } from '@testing-library/react';
import StringCalculator from '../components/StringCalculator';

test('renders input and button', () => {
  render(<StringCalculator />);
  
  // Check if input field and button are present
  expect(screen.getByPlaceholderText('Enter Numbers')).toBeInTheDocument();
  expect(screen.getByText('Add')).toBeInTheDocument();
});

test('Add', () => {
  render(<StringCalculator />);
  
  const input = screen.getByPlaceholderText('Enter Numbers');
  const addButton = screen.getByText('Add');

  fireEvent.change(input, { target: { value: 'Add' } });
  fireEvent.click(addButton);
  expect(screen.getByText('Add')).toBeInTheDocument();
 });
