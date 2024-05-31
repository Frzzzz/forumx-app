/**
 * - RegisterForm Testing Scenario
 * 
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
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
  cleanup,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import RegisterForm from './RegisterForm';

expect.extend(matchers);

describe('RegisterForm component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle name typing correctly', async () => {
    render(<RegisterForm register={() => {}} />);
    const nameInput = await screen.getByPlaceholderText('Name');
    await userEvent.type(nameInput, 'John');
    expect(nameInput).toHaveValue('John');
  });

  it('should handle email typing correctly', async () => {
    render(<RegisterForm register={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'john@mail.com');
    expect(emailInput).toHaveValue('john@mail.com');
  });

  it('should handle password typing correctly', async () => {
    render(<RegisterForm register={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, '12345678');
    expect(passwordInput).toHaveValue('12345678');
  });

  it('should call register function when register button is clicked', async () => {
    const mockRegister = vi.fn();
    render(<RegisterForm register={mockRegister} />);
    const nameInput = await screen.getByPlaceholderText('Name');
    await userEvent.type(nameInput, 'John');
    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'john@mail.com');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, '12345678');
    const registerButton = await screen.getByRole('button', {
      name: 'Register',
    });

    await userEvent.click(registerButton);

    expect(mockRegister).toBeCalledWith({
      name: 'John',
      email: 'john@mail.com',
      password: '12345678',
    });
  });
});
