import * as React from "react";
import { cleanup, render, screen } from "@testing-library/react";

import Moon from "../moon";

describe("Moon", () => {
  it("should render without crashing", async () => {
    render(<Moon data-testid="icon" />);

    const svgElement = screen.getByTestId("icon");

    expect(svgElement).toBeInTheDocument();

    cleanup();
  });
});
