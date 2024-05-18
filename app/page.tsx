import React from 'react'
import { Inter } from '@next/font/google'
import styled, { createGlobalStyle } from 'styled-components'

// Import custom font
const inter = Inter({ subsets: ['latin'] })

// Define global styles
const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${inter.style.fontFamily};
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
  }
`

// Define theme
const theme = {
  colors: {
    primary: '#FF6B6B', // Brand's primary color
    secondary: '#FFD93D', // Brand's secondary color
    text: '#333333', // Text color
    background: '#FFFFFF', // Background color
  },
  // Define other theme properties (e.g., typography, spacing)
}

// Define styled components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
`

const Navigation = styled.nav`
  /* Navigation styles */
`

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <Logo>Handcrafted Haven</Logo>
          <Navigation>
            {/* Navigation links */}
          </Navigation>
        </Header>
        {/* Main content */}
      </Container>
    </>
  )
}
