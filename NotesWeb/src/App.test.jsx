import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import App from './App';

vi.mock('./components/Navbar', () => ({
  default: ({ theme, setTheme }) => (
    <div data-testid="navbar" data-theme={theme}>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle
      </button>
    </div>
  ),
}));

describe('App', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders with light theme by default', () => {
    render(<App />);

    const navbar = screen.getByTestId('navbar');
    expect(navbar).toHaveAttribute('data-theme', 'light');
  });

  it('reads saved theme from localStorage', () => {
    localStorage.setItem('current_theme', 'dark');

    render(<App />);

    const navbar = screen.getByTestId('navbar');
    expect(navbar).toHaveAttribute('data-theme', 'dark');
  });

  it('applies theme class to container', () => {
    const { container } = render(<App />);

    const div = container.firstChild;
    expect(div.className).toContain('container');
    expect(div.className).toContain('light');
  });

  it('saves theme to localStorage on change', async () => {
    render(<App />);

    const toggleBtn = screen.getByText('Toggle');
    toggleBtn.click();

    await vi.waitFor(() => {
      expect(localStorage.getItem('current_theme')).toBe('dark');
    });
  });
});
