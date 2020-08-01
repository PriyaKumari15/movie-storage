import React from "react";

import { render, screen } from "./test.utils";
import TopMovie from "../components/topMovies";

test("Load screen", async () => {
  render(<TopMovie />);
  expect(await screen.getByText("Top Movies")).toBeDefined();
});
