import { render } from 'vitest-browser-react'
import { expect, test } from 'vitest';
import App from './App.tsx';

test('print Vite + React and increment counter', async () => {
  const { getByText, container, getByRole } = render(<App/>);
  const element = getByText('Vite + React');
  await expect.element(element).toBeInTheDocument()

  // Approach 1
  const button = container.querySelector('button[name="counter"]') as HTMLButtonElement;
  expect(button).not.toBeNull();
  expect(button).toHaveTextContent(/count is 0/i);
  button.click();
  // expect(button).toHaveTextContent(/count is 1/i); // Does not work
  await expect.element(getByText(/count is 1/i)).toBeInTheDocument()

  // Approach 2
  // const button = getByRole('button');
  // await expect.element(getByText(/count is 0/i)).toBeInTheDocument()
  // await button.click();
  // await expect.element(getByText(/count is 1/i)).toBeInTheDocument()

});
