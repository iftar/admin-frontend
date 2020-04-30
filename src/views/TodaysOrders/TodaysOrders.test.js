import React from 'react';
import { render } from '@testing-library/react';
import TodaysOrders from './TodaysOrders';

test('renders Todays order title', () => {
  const { getByText } = render(<TodaysOrders />);
  const title = getByText(/Today's orders/i);
  expect(title).toBeInTheDocument();
});
