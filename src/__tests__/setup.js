/* eslint-disable import/no-extraneous-dependencies */
import matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { afterEach, expect } from 'vitest';

// This allows Vitest to use Jest matchers (e.g. toMatchSnapshot, toBe, toEqual, etc.)
expect.extend(matchers);

// This allows Vitest to perform a cleanup after each test (Jest does it by default)
afterEach(() => {
  cleanup();
});
