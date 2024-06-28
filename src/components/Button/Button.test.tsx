import { render, screen } from "@testing-library/react"
import Button from "./Button"
import '@testing-library/jest-dom'

test("Button рендерит Counter с корректным value", () => {
    const { container } = render(<Button label="Тест" variant="primary" size={56} state='enabled' counter={true} counterValue={30} />);
    const counter = container.getElementsByClassName('counter')[0];
    expect(counter).toBeInTheDocument();
    expect(counter).toHaveTextContent('30');
})

test("Button рендерит Loader при state=loading", () => {
  const { container } = render(<Button label="Тест" variant="primary" size={56} state='loading' />);
  const loader = container.getElementsByClassName('loader')[0];
  expect(loader).toBeInTheDocument();
})

test("У Button верно применятеся аттрибут disabled", () => {
  render(<Button data-testid='disabled' label="disabled" variant="primary" size={56} state='disabled' />)
  render(<Button data-testid='loading' label="loading" variant="primary" size={56} state='loading' />)
  render(<Button data-testid='enabled' label="enabled" variant="primary" size={56} state='enabled' />)

  const disabledButtonElement = screen.getByTestId('disabled');
  const loadingButtonElement = screen.getByTestId('loading');
  const enabledButtonElement = screen.getByTestId('enabled');

  expect(disabledButtonElement).toBeDisabled();
  expect(loadingButtonElement).toBeDisabled();
  expect(enabledButtonElement).toBeEnabled();
})
