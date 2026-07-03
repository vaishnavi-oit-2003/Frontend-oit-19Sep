import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Navbar from './Navbar';

vi.mock('../assets/logo-black.png', () => ({ default: 'logo-black.png' }));
vi.mock('../assets/logo-white.png', () => ({ default: 'logo-white.png' }));
vi.mock('../assets/search-w.png', () => ({ default: 'search-w.png' }));
vi.mock('../assets/search-b.png', () => ({ default: 'search-b.png' }));
vi.mock('../assets/night.png', () => ({ default: 'night.png' }));
vi.mock('../assets/day.png', () => ({ default: 'day.png' }));

describe('Navbar', () => {
  it('renders navigation links', () => {
    render(<Navbar theme="light" setTheme={() => {}} />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('renders a search input', () => {
    render(<Navbar theme="light" setTheme={() => {}} />);

    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });

  it('renders light theme assets when theme is light', () => {
    render(<Navbar theme="light" setTheme={() => {}} />);

    const images = screen.getAllByRole('img');
    const logo = images.find((img) => img.classList.contains('logo'));
    expect(logo).toHaveAttribute('src', 'logo-black.png');

    const toggle = images.find((img) => img.classList.contains('toggle-icon'));
    expect(toggle).toHaveAttribute('src', 'night.png');
  });

  it('renders dark theme assets when theme is dark', () => {
    render(<Navbar theme="dark" setTheme={() => {}} />);

    const images = screen.getAllByRole('img');
    const logo = images.find((img) => img.classList.contains('logo'));
    expect(logo).toHaveAttribute('src', 'logo-white.png');

    const toggle = images.find((img) => img.classList.contains('toggle-icon'));
    expect(toggle).toHaveAttribute('src', 'day.png');
  });

  it('toggles theme from light to dark when toggle is clicked', () => {
    const mockSetTheme = vi.fn();
    render(<Navbar theme="light" setTheme={mockSetTheme} />);

    const toggleIcon = screen.getByAltText('Toggle Theme');
    fireEvent.click(toggleIcon);

    expect(mockSetTheme).toHaveBeenCalledWith('dark');
  });

  it('toggles theme from dark to light when toggle is clicked', () => {
    const mockSetTheme = vi.fn();
    render(<Navbar theme="dark" setTheme={mockSetTheme} />);

    const toggleIcon = screen.getByAltText('Toggle Theme');
    fireEvent.click(toggleIcon);

    expect(mockSetTheme).toHaveBeenCalledWith('light');
  });
});
