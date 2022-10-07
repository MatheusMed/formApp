import "@testing-library/jest-dom";
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import App from "./App";

// verificando se a tela inicial foi renderizada
describe("App", () => {
  test("should be able to see the initial text on screen", () => {
    const { getByText } = render(<App />);
    expect(getByText("Formulario")).toBeInTheDocument();
  });
})



