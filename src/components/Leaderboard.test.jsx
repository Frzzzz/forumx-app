/**
 * @jest-environment jsdom
 */

/**
 * LeaderboardList Testing Scenario
 *
 * - should render the correct number of LeaderboardItem components
 */
import React from 'react';
import {
  describe,
  it,
  expect,
  afterEach,
} from 'vitest';
import {
  screen,
  render,
  cleanup,
} from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import { MemoryRouter } from 'react-router-dom';
import Leaderboard from './Leaderboard';

expect.extend(matchers);
describe('Leaderboard Component', () => {
  afterEach(() => {
    cleanup();
  });
  it('should render the correct number of LeaderboardItem components', () => {
    const leaderboards = [
      { id: '1', name: 'John', score: 100 },
    ];

    render(
      <Leaderboard LeaderboardItems={leaderboards} />,
      { wrapper: MemoryRouter },
    );

    const leaderboardItems = screen.getAllByTestId('leaderboard-item');
    expect(leaderboardItems).toHaveLength(leaderboards.length);
  });
});
