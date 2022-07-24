import styled from 'styled-components';
import { LogoStyles } from '../logo/LogoStyles';

export interface INavProps {
  readonly isOpen: boolean;
  readonly isClicked?: boolean;
}

type NavLogo = {
  isOpen: boolean;
};

const NavStyles = styled.nav<INavProps>`
  color: var(--white);
  font-size: 5rem;

  .hamburger-react {
    z-index: 5;
    margin: 2rem 2rem 0 0;
  }

  .nav-container {
    position: absolute;
    right: 0;
    top: 0;
    background: var(--lightGray);
    min-width: 100%;
    font-weight: 100;
    z-index: 3;
    height: 50vh;
    min-height: 400px;

    transform: translateY(-100%);
    transition: all 600ms;
    transition-timing-function: cubic-bezier(
      0.49,
      0.07,
      0.51,
      1.02
    );

    ${props => props.isOpen && `transform: translateY(0%)`};
  }

  .nav-links {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* media links styles adjust */
    li:last-of-type {
      margin-top: 1.5rem;
      article {
        a {
          margin: 0 1rem;
        }
      }
    }
  }
`;

const NavLogoStyles = styled(LogoStyles)`
  color: orange;
  font-weight: 400;
  padding: 2rem;
`;

export { NavStyles, NavLogoStyles };
