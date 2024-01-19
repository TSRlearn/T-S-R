import Greet from '../greet';
import { render, screen } from '@testing-library/react';

test('should render greet component', () => {
  render(<Greet initial={0} />);

  const element = screen.getByText('Good day everyone 0');

  expect(element).toBeInTheDocument();
});
