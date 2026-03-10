import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";

test("renders navbar with title", () => {
  render(<Navbar />);

  expect(screen.getByText("Dashboard")).toBeInTheDocument();
});
