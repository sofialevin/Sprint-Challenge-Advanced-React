import React from 'react';
import * as rtl from '@testing-library/react';
import App from './App';
import CardComponent from './components/CardComponent';
import PlayerCards from './components/PlayerCards';
import { render } from "@testing-library/react";

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  render(<App />);
});

test("Title Renders", () => {
  const wrapper = rtl.render(
    <App />
  )
  const element = wrapper.queryByText(/players/i);
})

test("App exists", () => {
  const app = <App />;
  expect(app).toBeDefined();
  expect(app).not.toBeUndefined();
  expect(app).not.toBeFalsy();
});

test("Player Cards exists", () => {
  const card = <PlayerCards />;
  expect(card).toBeDefined();
  expect(card).not.toBeUndefined();
  expect(card).not.toBeFalsy();
});

test("Card Component exists", () => {
  const card = <CardComponent />;
  expect(card).toBeDefined();
  expect(card).not.toBeUndefined();
  expect(card).not.toBeFalsy();
});