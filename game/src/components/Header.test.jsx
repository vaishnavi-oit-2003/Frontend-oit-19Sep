import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from './Header';

describe('Header', () => {
  it('renders score, target, and time', () => {
    render(<Header score={50} target={7} time={8} />);

    expect(screen.getByText('Score: 50')).toBeInTheDocument();
    expect(screen.getByText('Target: 7')).toBeInTheDocument();
    expect(screen.getByText('Time To Over: 8 sec')).toBeInTheDocument();
  });

  it('renders zero values correctly', () => {
    render(<Header score={0} target={0} time={0} />);

    expect(screen.getByText('Score: 0')).toBeInTheDocument();
    expect(screen.getByText('Target: 0')).toBeInTheDocument();
    expect(screen.getByText('Time To Over: 0 sec')).toBeInTheDocument();
  });

  it('renders negative score', () => {
    render(<Header score={-10} target={3} time={5} />);

    expect(screen.getByText('Score: -10')).toBeInTheDocument();
  });
});
