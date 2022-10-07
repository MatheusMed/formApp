import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import React from "react";
import { describe, expect, test } from 'vitest';

import InputComponent from '.';


const InputIdText = "input";

describe("input", () => {

  beforeEach(() => {
    render(<InputComponent />);
  });

  test("Should show input in screen", () => {
    expect(screen.getByTestId(InputIdText)).toBeInTheDocument();
  });
});