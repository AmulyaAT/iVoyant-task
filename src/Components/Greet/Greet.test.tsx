import React from "react";
import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

describe("Greet", () => {
  test("Greet render second time", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });
});
describe("Nested", () => {
  test("Greet render with name", () => {
    render(<Greet name="amulya" />);
    const textElement = screen.getByText("Hello amulya");
    expect(textElement).toBeInTheDocument(); 
  });
});
