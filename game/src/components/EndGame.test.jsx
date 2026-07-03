import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import EndGame from './EndGame';

describe('EndGame', () => {
  it('renders game over message', () => {
    render(<EndGame score={100} ResetGame={() => {}} />);

    expect(screen.getByText('Game Over')).toBeInTheDocument();
    expect(screen.getByText("Time's Up")).toBeInTheDocument();
  });

  it('displays the final score', () => {
    render(<EndGame score={75} ResetGame={() => {}} />);

    expect(screen.getByText('Score: 75')).toBeInTheDocument();
  });

  it('displays zero score', () => {
    render(<EndGame score={0} ResetGame={() => {}} />);

    expect(screen.getByText('Score: 0')).toBeInTheDocument();
  });

  it('calls ResetGame when Play Again button is clicked', () => {
    const mockReset = vi.fn();
    render(<EndGame score={50} ResetGame={mockReset} />);

    fireEvent.click(screen.getByText('Play Again'));

    expect(mockReset).toHaveBeenCalledTimes(1);
  });
});
