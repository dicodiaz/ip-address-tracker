import matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import axios from 'axios';
import { afterEach, expect, Mock, vi } from 'vitest';

expect.extend(matchers);

vi.mock('axios');

beforeEach(() => {
  (axios.get as Mock).mockReset();
});

afterEach(() => {
  cleanup();
});
