/* eslint-disable --  Test file will be configured later*/
import { render, screen } from "@testing-library/react";
import { Copy } from "./copy";
import "@testing-library/jest-dom/extend-expect";

describe("Copy", () => {
  it("should render", () => {
    render(<Copy content="Hello world" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
