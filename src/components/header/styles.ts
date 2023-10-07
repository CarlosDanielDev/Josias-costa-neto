import styled, { css } from 'styled-components'
import logoUrl from './logo.svg'
import logoPrimaryUrl from './logo-primary.svg'


type HeaderProps = {
  scrolling: boolean | undefined;
}

export const MainHeader = styled.header<HeaderProps>`
  flex: 1;
  display: flex;
  position: fixed;
  width: 100%;
  height: 98px;  
  padding: 0px 32px;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  
 ${({ scrolling, theme }) => scrolling && css`
    z-index: 1000;
    background-color: ${theme.grayScale.white};

    nav {
      a {
        span {
          color: ${theme.primary.brand};
        }
        svg {
          color: ${theme.primary.brand};
        }
      }
    }
  `}


  &.visible {
    background: ${({ theme }) => theme.grayScale.white};
    nav {
      a {
        span {
          color: ${({ theme }) => theme.primary.brand};
        }
        svg {
          color: ${({ theme }) => theme.primary.brand};
        }
      }
    }

  }
  
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed; 
    padding: 0;
    flex-direction: row;
    margin: 0 auto;
  }
`;

export const Logo = styled.div<HeaderProps>`
  display: flex;
  background: url(${logoUrl});
  background-size: contain;
  background-repeat: no-repeat;
  width: 135px;
  height: 42px;

  ${({ scrolling }) => scrolling && css`
    background: url(${logoPrimaryUrl});
    background-size: contain;
    background-repeat: no-repeat;
  `}

  &.visible {
    background: url(${logoPrimaryUrl});
    background-size: contain;
    background-repeat: no-repeat;

  }
`;

export const Button = styled.button<HeaderProps>`
  display: flex;
  color: ${({ theme }) => theme.grayScale.white};
  flex-direction: column;
  align-items: center;
  visibility: visible; 
  opacity: 1;
  transition: visibility 0.3s, opacity 0.5s;

  span {
    font-size: 1rem;
    line-height: 15px;
  }

  svg {
    font-size: 3.2rem;
  }

  ${({ scrolling }) => scrolling && css`
    color: ${({ theme }) => theme.primary.brand};
  `}


  &.visible {
    color: ${({ theme }) => theme.primary.brand};
  }

  @media (min-width: 768px) {
    visibility: hiddden; 
    opacity: 0;
    display: none;
  }
`;

export const NavContainer = styled.nav`
  position: absolute;
  flex-direction: column;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.grayScale.white};
  top: 98px;
  left: 0px;

  visibility: hidden; 
  opacity: 0;
  transition: visibility 0.3s, opacity 0.5s;

 
  &.visible {
    visibility: visible;
    opacity: 1;
  }

  button {
    margin-top: 32px;
  }
  
  @media (min-width: 768px) {
    max-width: 970px;
    height: 98px;  
    visibility: visible;
    opacity: 1;
    position: relative;
    top: 0;
    flex-direction: row;
    justify-content: space-between;
    background: transparent;
    margin-left: 64px;
      display: grid; 
    grid-template-columns: 1fr 1fr 1fr 1fr 300px; 
    grid-template-rows: 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
    ". . . . button";


    button {
      margin: 0;
    }
  }
`;

export const NavItem = styled.a`
  width: 100%;
  height: 80px;
  text-decoration: none;
  color: ${({ theme }) => theme.text.primary};
  border: 0px solid ${({ theme }) => theme.grayScale.gray100}; 
  display: flex;
  align-items: center;
  padding-left: 32px;

  border-bottom-width: 1px;

  &:first-child {
    border-top-width: 1px;
  }

  svg {
    margin-right: 14px;
    font-size: 3.2rem;
  }

  &.active {
    opacity: 0.5;
  }

  
  @media (min-width: 768px) {
    color: ${({ theme }) => theme.grayScale.gray300};
    font-size: 1.8rem;
    border: 0;
    padding-left: 0px;
    width: auto;

    svg {
      margin-right: 10px;
    }
  }
`;

export const NavText = styled.span`
  color: ${({ theme }) => theme.grayScale.white};
  font-size: 2rem;

  @media (min-width: 768px) {
    color: ${({ theme }) => theme.grayScale.gray300};
    font-size: 1.8rem;
    height: 1.8rem;
  }
`;

