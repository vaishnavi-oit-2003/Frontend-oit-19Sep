import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BlogContext } from '../context/BlogProvider';
import BlogContainer from './BlogContainer';

describe('BlogContainer', () => {
  it('renders empty when context value is falsy', () => {
    const { container } = render(
      <BlogContext.Provider value="">
        <BlogContainer />
      </BlogContext.Provider>
    );

    expect(container.querySelector('#blog-container')).toBeInTheDocument();
    expect(container.querySelector('#blog-container').children.length).toBe(0);
  });

  it('renders blogs when context provides data', () => {
    const blogs = [
      {
        title: 'Test City',
        author: { name: 'Author One', designation: 'Writer', profile: '' },
        article: [{ 'sub-title': 'Intro', paragraph: ['Hello world.'] }],
        image: 'https://example.com/img.jpg',
      },
    ];

    render(
      <BlogContext.Provider value={blogs}>
        <BlogContainer />
      </BlogContext.Provider>
    );

    expect(screen.getByText('Author One')).toBeInTheDocument();
    expect(screen.getByText('Test City')).toBeInTheDocument();
  });

  it('renders multiple blogs', () => {
    const blogs = [
      {
        title: 'City A',
        author: { name: 'Writer A', designation: 'Blogger', profile: '' },
        article: [{ 'sub-title': 'About', paragraph: ['About City A.'] }],
        image: 'https://example.com/a.jpg',
      },
      {
        title: 'City B',
        author: { name: 'Writer B', designation: 'Blogger', profile: '' },
        article: [{ 'sub-title': 'About', paragraph: ['About City B.'] }],
        image: 'https://example.com/b.jpg',
      },
    ];

    render(
      <BlogContext.Provider value={blogs}>
        <BlogContainer />
      </BlogContext.Provider>
    );

    expect(screen.getByText('Writer A')).toBeInTheDocument();
    expect(screen.getByText('Writer B')).toBeInTheDocument();
  });
});
