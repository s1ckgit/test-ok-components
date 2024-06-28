import { render, screen } from "@testing-library/react"
import Counter from "./Counter"
import '@testing-library/jest-dom'

test('Counter обрезает строку, если передать строку длиннее 3ёх символов', () => {
  render(<Counter value='blablabla' variant="primary" size={24}/>)
  const counterValue = screen.getByText('bla');
  expect(counterValue).toBeInTheDocument();
})

test('Counter обрезает число, если передать число больше 99', () => {
  render(<Counter value={999} variant="primary" size={24}/>)
  const counterValue = screen.getByText('99+');
  expect(counterValue).toBeInTheDocument();
})
