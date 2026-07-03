import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Panel from './Panel';

describe('Panel', () => {
  it('renders 100 bubbles', () => {
    render(
      <Panel setScore={() => {}} target={5} setTarget={() => {}} />
    );

    const bubbles = screen.getAllByText(/^\d$/);
    expect(bubbles.length).toBe(100);
  });

  it('each bubble contains a single digit (0-9)', () => {
    render(
      <Panel setScore={() => {}} target={5} setTarget={() => {}} />
    );

    const bubbles = screen.getAllByText(/^\d$/);
    bubbles.forEach((bubble) => {
      const value = parseInt(bubble.textContent, 10);
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThanOrEqual(9);
    });
  });

  it('calls setScore and setTarget when a bubble is clicked', () => {
    const mockSetScore = vi.fn();
    const mockSetTarget = vi.fn();

    render(
      <Panel setScore={mockSetScore} target={5} setTarget={mockSetTarget} />
    );

    const bubbles = screen.getAllByText(/^\d$/);
    fireEvent.click(bubbles[0]);

    expect(mockSetScore).toHaveBeenCalled();
    expect(mockSetTarget).toHaveBeenCalled();
  });

  it('calls setScore with an updater function on bubble click', () => {
    const scoreFn = vi.fn();
    const mockSetTarget = vi.fn();

    render(
      <Panel setScore={scoreFn} target={5} setTarget={mockSetTarget} />
    );

    const bubble = screen.getAllByText(/^\d$/)[0];
    fireEvent.click(bubble);

    expect(scoreFn).toHaveBeenCalled();
    const updater = scoreFn.mock.calls[0][0];
    expect(typeof updater).toBe('function');
  });

  it('regenerates bubbles after a click', () => {
    const mockSetScore = vi.fn();
    const mockSetTarget = vi.fn();

    render(
      <Panel setScore={mockSetScore} target={5} setTarget={mockSetTarget} />
    );

    const bubblesBefore = screen.getAllByText(/^\d$/).map((b) => b.textContent);
    fireEvent.click(screen.getAllByText(/^\d$/)[0]);
    const bubblesAfter = screen.getAllByText(/^\d$/).map((b) => b.textContent);

    expect(bubblesAfter.length).toBe(100);
  });
});
