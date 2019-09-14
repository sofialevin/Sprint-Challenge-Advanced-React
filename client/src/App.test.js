import React from 'react';
import * as rtl from '@testing-library/react';
import App from './App';
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