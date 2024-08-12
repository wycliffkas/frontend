import React from "react";
import { render } from "@testing-library/react-native";
import Loader from "../Loader";

describe("Loader Component", () => {
  it("renders correctly with the given text", () => {
    const { getByText } = render(<Loader text="Loading data..." />);
    const textElement = getByText("Loading data...");
    expect(textElement).toBeTruthy();
  });
});
