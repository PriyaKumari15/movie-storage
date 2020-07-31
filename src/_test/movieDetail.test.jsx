import React from "react";
import { waitForElement } from "@testing-library/react";
import { render, fireEvent, screen } from "./test.utils";
import TopMovie from "../components/topMovies";
import { requestMovieData } from "../components/movieApi";

test("Load Movie Detail", async () => {
  const response = await requestMovieData();
  let list = [];
  let sortList = [];
  if (response) {
    response &&
      response.components.forEach((data) => {
        if (data.type === "movie-list") {
          list = [...list, ...data.items];
        } else if (data.type === "order-select") {
          sortList = [...data.items];
        }
      });
  }
  render(<TopMovie />);
  expect(await screen.findByText(list[0].title)).toBeDefined();

  await waitForElement(() => screen.findByText(list[0].title));

  let select = await screen.findByText(list[0].title);

  fireEvent.click(select, list[0].title);
  await waitForElement(() => screen.findByText(list[0].synopsis));

  expect((await screen.getByText(list[0].synopsis)).innerHTML).toEqual(
    list[0].synopsis
  );
});
