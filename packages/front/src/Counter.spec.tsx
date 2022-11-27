import { screen, render, fireEvent } from "@testing-library/react";
import { Counter } from "./Counter";

describe("Counter", () => {
  it("renders the correct content", () => {
    render(<Counter />);
    expect(screen.getByText("Count: 0")).toBeInTheDocument();

    const button = screen.getByRole("button", { name: "Increment" });
    fireEvent.click(button);
    expect(screen.getByText("Count: 1")).toBeInTheDocument();
  });
});
