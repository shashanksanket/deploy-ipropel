/* eslint-disable --  Test file will be configured later*/

import { render, screen } from "@testing-library/react";
import * as React from "react";
import { Badge } from "./badge";

describe("Badge", () => {
  it("should render", () => {
    render(<Badge>Badge</Badge>);
    expect(screen.getByText("Badge")).toBeInTheDocument();
  });

  it("should render as child", () => {
    render(
      <Badge asChild>
        <button style={{ cursor: "pointer" }}>Changelog</button>
      </Badge>,
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
