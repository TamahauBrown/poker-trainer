import { render, screen } from '@testing-library/react';
// @ts-ignore
import {PokerTable} from "./Components/PokerTable.tsx";

// https://tauri.app/v1/guides/testing/mocking/
import { mockIPC } from "@tauri-apps/api/mocks"
import { invoke } from "@tauri-apps/api/tauri";
import {ChancesSlider} from "./Components/ChancesSlider";

/*
  Chances slider tests
*/

// This should be in the document as the 'chances slider' component is inside the 'poker table' component
test('Checking chances slider text', () => {
  render(<PokerTable />);
  const linkElement = screen.getByText(/What are your chances of winning?/i);
  expect(linkElement).toBeInTheDocument();
});

// This text should be as the original header of the document
test('Check when value is sent', () => {
  render(<ChancesSlider />);
  const linkElement = screen.getByText(/What are your chances of winning?/i);
  expect(linkElement).toBeInTheDocument();
});

/*
  Check functionality of the cards
*/
