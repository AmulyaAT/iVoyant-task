import React from "react";
import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

describe("Greet", () => {
  it("Greet render second time", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });
});
describe("Nested", () => {
  it("Greet render with name", () => {
    render(<Greet name="amulya" />);
    const textElement = screen.getByText("Hello amulya");
    expect(textElement).toBeInTheDocument();
  });
});