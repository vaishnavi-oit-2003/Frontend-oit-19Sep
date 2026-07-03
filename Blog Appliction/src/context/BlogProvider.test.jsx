import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useContext } from 'react';
import BlogProvider, { BlogContext } from './BlogProvider';

function TestConsumer() {
  const value = useContext(BlogContext);
  return <div data-testid="value">{JSON.stringify(value)}</div>;
}

describe('BlogProvider', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('renders children', () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      json: () => Promise.resolve([]),
    });

    render(
      <BlogProvider>
        <div data-testid="child">Child Content</div>
      </BlogProvider>
    );

    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });

  it('provides initial empty string value via context', () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      json: () => Promise.resolve([]),
    });

    render(
      <BlogProvider>
        <TestConsumer />
      </BlogProvider>
    );

    expect(screen.getByTestId('value')).toHaveTextContent('""');
  });
});
