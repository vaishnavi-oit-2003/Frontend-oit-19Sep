import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BlogBtns from './BlogBtns';

describe('BlogBtns', () => {
  it('renders four icon images', () => {
    const { container } = render(<BlogBtns />);

    const images = container.querySelectorAll('img');
    expect(images.length).toBe(4);
  });

  it('renders heart, send, chat, and save icons with correct src', () => {
    const { container } = render(<BlogBtns />);

    const images = container.querySelectorAll('img');
    expect(images[0]).toHaveAttribute('src', '/icons/heart.png');
    expect(images[1]).toHaveAttribute('src', '/icons/send.png');
    expect(images[2]).toHaveAttribute('src', '/icons/chat.png');
    expect(images[3]).toHaveAttribute('src', '/icons/save-instagram.png');
  });

  it('renders response buttons container and save icon separately', () => {
    const { container } = render(<BlogBtns />);

    const responseBtns = container.querySelector('.respones-btns');
    expect(responseBtns).toBeInTheDocument();
    expect(responseBtns.querySelectorAll('img').length).toBe(3);
  });
});
