import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BlogContent from './BlogContent';

describe('BlogContent', () => {
  const mockProps = {
    image: 'https://example.com/city.jpg',
    title: 'Test City',
    article: [
      {
        'sub-title': 'Food',
        paragraph: ['The food here is amazing.', 'Try the local cuisine.'],
      },
      {
        'sub-title': 'Culture',
        paragraph: ['Rich cultural heritage.'],
      },
    ],
  };

  it('renders the title', () => {
    render(<BlogContent {...mockProps} />);

    expect(screen.getByText('Test City')).toBeInTheDocument();
  });

  it('renders the image with correct src and alt', () => {
    render(<BlogContent {...mockProps} />);

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'https://example.com/city.jpg');
    expect(img).toHaveAttribute('alt', 'Test City');
  });

  it('renders all article sections with sub-titles', () => {
    render(<BlogContent {...mockProps} />);

    expect(screen.getByText('Food')).toBeInTheDocument();
    expect(screen.getByText('Culture')).toBeInTheDocument();
  });

  it('renders all paragraphs within sections', () => {
    render(<BlogContent {...mockProps} />);

    expect(screen.getByText('The food here is amazing.')).toBeInTheDocument();
    expect(screen.getByText('Try the local cuisine.')).toBeInTheDocument();
    expect(screen.getByText('Rich cultural heritage.')).toBeInTheDocument();
  });

  it('handles a single article section', () => {
    const singleSection = {
      image: 'https://example.com/photo.jpg',
      title: 'Single Section',
      article: [
        {
          'sub-title': 'Overview',
          paragraph: ['A brief overview.'],
        },
      ],
    };

    render(<BlogContent {...singleSection} />);

    expect(screen.getByText('Single Section')).toBeInTheDocument();
    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('A brief overview.')).toBeInTheDocument();
  });
});
