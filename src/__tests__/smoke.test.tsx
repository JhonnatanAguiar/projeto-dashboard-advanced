import { render, screen } from "@testing-library/react";
import Home from "../app/page";

test("homepage loads", () => {
  render(<Home />);
  expect(screen.getByText(/To get started/i)).toBeInTheDocument();
});
