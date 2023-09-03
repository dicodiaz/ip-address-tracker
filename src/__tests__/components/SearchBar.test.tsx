import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { expect } from 'vitest';
import SearchBar from '../../components/SearchBar';
import { renderWithProviders } from '../test-utils';

describe('SearchBar component', () => {
  it('should render as expected', () => {
    const { container } = renderWithProviders(<SearchBar />);
    expect(container).toMatchSnapshot();
  });

  it('should fetch once on initial rendering', async () => {
    renderWithProviders(<SearchBar />);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it('should execute an additional fetch when submitting a valid IP', async () => {
    const { getByRole } = renderWithProviders(<SearchBar />);
    await userEvent.type(getByRole('textbox', { name: 'search-ip' }), '1.1.1.1');
    await userEvent.click(getByRole('button', { name: 'submit' }));
    expect(axios.get).toHaveBeenCalledTimes(2);
  });

  it('should execute an additional fetch when submitting an invalid IP', async () => {
    const { getByRole } = renderWithProviders(<SearchBar />);
    await userEvent.type(getByRole('textbox', { name: 'search-ip' }), '1.1.1');
    await userEvent.click(getByRole('button', { name: 'submit' }));
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
