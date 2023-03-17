import styled from 'styled-components';
import { LogoStyles } from '../logo/LogoStyles';

export interface INavProps {
  readonly isOpen: boolean;
  readonly isClicked?: boolean;
}

const NavStyles = styled.nav<INavProps>`
  color: var(--white);

  .hamburger-react {
    z-index: 5;
    margin-right: 2rem;
  }

  .nav-container {
    position: absolute;
    right: 0;
    top: 0;
    background: var(--lightGray);
    opacity: 0.97;
    min-width: 100%;
    font-size: 4rem;
    font-weight: 100;
    z-index: 3;
    height: 50vh;
    min-height: 400px;

    transform: translateY(-100%);
    transition: all 0.5s;
    ${props => props.isOpen && `transform: translateY(0%)`};
    transition-timing-function: cubic-bezier(
      0.49,
      0.07,
      0.51,
      1.02
    );
  }

  .nav-links {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* media-links styles adjust */
    li:last-of-type {
      margin-top: 1.5rem;
      article {
        a {
          cursor: pointer;
          margin: 0 1rem;
          font-size: 3rem;
        }
      }
    }
  }
`;

const NavLogoStyles = styled(LogoStyles)`
  margin: 2rem 0 0 1rem;
  height: 75px;
  width: 75px;
`;

export { NavStyles, NavLogoStyles };
