import * as React from "react";
import { cleanup, render, screen } from "@testing-library/react";

import Twitter from "../twitter";

describe("Twitter", () => {
  it("should render without crashing", async () => {
    render(<Twitter data-testid="icon" />);

    const svgElement = screen.getByTestId("icon");

    expect(svgElement).toBeInTheDocument();

    cleanup();
  });
});
