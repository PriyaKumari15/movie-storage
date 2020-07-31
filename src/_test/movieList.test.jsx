import React from "react";
import { render, screen } from "./test.utils";
import TopMovie from "../components/topMovies";
import { requestMovieData } from "../components/movieApi";

test("Load Movie List", async () => {
  const response = await requestMovieData();
  let list = [];
  let sortList = [];

  response &&
    response.components.forEach((data) => {
      if (data.type === "movie-list") {
        list.push(...data.items);
      } else if (data.type === "order-select") {
        sortList = [...data.items];
      }
    });

  render(<TopMovie />);

  for (let i = 0; i > list.length; i++) {
    expect(await screen.findByText(list[i].title)).toBeDefined();
  }
});
