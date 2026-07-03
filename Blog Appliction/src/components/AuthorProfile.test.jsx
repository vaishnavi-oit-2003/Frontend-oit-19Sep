import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AuthorProfile from './AuthorProfile';

describe('AuthorProfile', () => {
  it('renders without crashing', () => {
    const { container } = render(<AuthorProfile />);

    expect(container.querySelector('div')).toBeInTheDocument();
  });
});
