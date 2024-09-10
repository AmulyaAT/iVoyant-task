import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  test("render correctly", () => {
    render(<Application />);
    const nameElement = screen.getByRole("textbox");
    expect(nameElement).toBeInTheDocument();
  });
});

describe("nested",()=>{
    it("application elements test",()=>{
        render(<Application />)
        const joblocationElement=screen.getByRole("combobox")
        expect(joblocationElement).toBeInTheDocument();


        const termsElement=screen.getByRole("checkbox")
            expect(termsElement).toBeInTheDocument();

            const submitElement=screen.getByRole("button")
            expect(submitElement).toBeInTheDocument();
    });
});