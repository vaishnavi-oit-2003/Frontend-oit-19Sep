import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BlogHeader from './BlogHeader';

describe('BlogHeader', () => {
  it('renders author name and designation', () => {
    const author = {
      name: 'Jane Doe',
      designation: 'Tech Writer',
      profile: 'https://example.com/photo.jpg',
    };

    render(<BlogHeader author={author} />);

    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    expect(screen.getByText('Tech Writer')).toBeInTheDocument();
  });

  it('uses provided profile image when available', () => {
    const author = {
      name: 'Jane Doe',
      designation: 'Tech Writer',
      profile: 'https://example.com/photo.jpg',
    };

    const { container } = render(<BlogHeader author={author} />);

    const img = container.querySelector('#blog-header img');
    expect(img).toHaveAttribute('src', 'https://example.com/photo.jpg');
  });

  it('uses default image when profile is not provided', () => {
    const author = {
      name: 'John Doe',
      designation: 'Blogger',
    };

    const { container } = render(<BlogHeader author={author} />);

    const img = container.querySelector('#blog-header img');
    expect(img).toHaveAttribute(
      'src',
      'https://i.pinimg.com/736x/49/ce/d2/49ced2e29b6d4945a13be722bac54642.jpg'
    );
  });

  it('renders a follow button', () => {
    const author = {
      name: 'Test Author',
      designation: 'Writer',
      profile: '',
    };

    render(<BlogHeader author={author} />);

    expect(screen.getByText('follow')).toBeInTheDocument();
  });
});
