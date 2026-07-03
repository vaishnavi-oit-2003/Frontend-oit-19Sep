import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Blog from './Blog';

describe('Blog', () => {
  const mockBlog = {
    title: 'Kolkata',
    author: {
      name: 'Mrs.Vaishnavi Bender',
      designation: 'Travel Blogger',
      profile: 'https://example.com/photo.jpg',
    },
    article: [
      {
        'sub-title': 'Food of Kolkata',
        paragraph: ['Kolkata cuisine is a blend of traditional Bengali flavors.'],
      },
    ],
    image: 'https://example.com/kolkata.jpg',
  };

  it('renders blog header with author info', () => {
    render(<Blog blog={mockBlog} />);

    expect(screen.getByText('Mrs.Vaishnavi Bender')).toBeInTheDocument();
    expect(screen.getByText('Travel Blogger')).toBeInTheDocument();
  });

  it('renders blog content with title and article', () => {
    render(<Blog blog={mockBlog} />);

    expect(screen.getByText('Kolkata')).toBeInTheDocument();
    expect(screen.getByText('Food of Kolkata')).toBeInTheDocument();
  });

  it('renders blog action buttons', () => {
    const { container } = render(<Blog blog={mockBlog} />);

    const btnsContainer = container.querySelector('#blog-btns');
    expect(btnsContainer).toBeInTheDocument();
    const icons = btnsContainer.querySelectorAll('img');
    expect(icons.length).toBe(4);
  });

  it('renders all three sub-components', () => {
    const { container } = render(<Blog blog={mockBlog} />);

    expect(container.querySelector('#blog-header')).toBeInTheDocument();
    expect(container.querySelector('#blog-content')).toBeInTheDocument();
    expect(container.querySelector('#blog-btns')).toBeInTheDocument();
  });
});
