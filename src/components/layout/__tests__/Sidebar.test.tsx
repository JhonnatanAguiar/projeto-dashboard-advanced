import { render, screen } from "@testing-library/react";
import Sidebar from "../Sidebar";

test("render siderbar with navigation links", () => {
  render(<Sidebar />);

  // Verifica se o título aparece
  expect(screen.getByText("InsightFlow")).toBeInTheDocument();

  // Verifica se os links de navegação estão presentes
  expect(screen.getByText("Dashboard")).toBeInTheDocument();
  expect(screen.getByText("Analytics")).toBeInTheDocument();
  expect(screen.getByText("Projects")).toBeInTheDocument();
  expect(screen.getByText("Settings")).toBeInTheDocument();
});
