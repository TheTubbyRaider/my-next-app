import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header', () => {
  it('renders the navigation links', () => {
    render(<Header />);

    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About');
    const productsLink = screen.getByText('Products');

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(productsLink).toBeInTheDocument();
  });
});