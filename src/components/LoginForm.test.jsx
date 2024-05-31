/**
 * LoginForm Testing Scenario
 *
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react';
import {
  describe,
  it,
  expect,
  vi,
  afterEach,
} from 'vitest';
import {
  render,
  screen,
  cleanup
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import LoginForm from './LoginForm';

expect.extend(matchers);

describe('LoginForm component', () => {
  afterEach(() => {
    cleanup();
  });
  it('should handle email typing correctly', async () => {
    render(<LoginForm login={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'john@mail.com');
    expect(emailInput).toHaveValue('john@mail.com');
  });

  it('should handle password typing correctly', async () => {
    render(<LoginForm login={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, '12345678');
    expect(passwordInput).toHaveValue('12345678');
  });

  it('should call login function when login button is clicked', async () => {
    const mockLogin = vi.fn();
    render(<LoginForm login={mockLogin} />);
    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'john@mail.com');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, '12345678');
    const loginButton = await screen.getByRole('button', { name: 'Login' });

    await userEvent.click(loginButton);

    expect(mockLogin).toBeCalledWith({
      email: 'john@mail.com',
      password: '12345678',
    });
  });
});
