import React from "react";

import HashScroll from "./HashScroll";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import "@testing-library/jest-dom";

const childEl = <div id="childDiv">Hello World!</div>;

const hash = "#hash";

test("Returns children", async () => {
  render(
    <BrowserRouter>
      <HashScroll hash={hash}>{childEl}</HashScroll>
    </BrowserRouter>
  );

  const el = await screen.findByTestId("hash-scroll");

  expect(el).toHaveAttribute("id", "childDiv");
  expect(el).toHaveTextContent("Hello World!");
});