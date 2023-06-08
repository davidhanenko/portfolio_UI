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

    opacity: 0.98;
    min-width: 100%;
    z-index: 3;
    padding-top: 1rem;

    transform: translateX(100%);
    transition: all 0.4s;
    ${props => props.isOpen && `transform: translateX(0%)`};
    transition-timing-function: cubic-bezier(
      0.49,
      0.07,
      0.51,
      1.02
    );
  }

  .nav-links {
    list-style: none;
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: space-evenly;
  }

  @media (max-width: 768px) {
    .nav-container {
      position: absolute;
      display: block;
      background: var(--lightGrayOp);

      min-width: 100%;
      font-size: 4rem;
      font-weight: 100;
      z-index: 3;
      height: 50vh;
      min-height: 400px;

      transform: translateY(-100%);
      transition: all 0.4s;
      ${props =>
        props.isOpen && `transform: translateY(0%)`};
      transition-timing-function: cubic-bezier(
        0.49,
        0.07,
        0.51,
        1.02
      );
    }

    .nav-links {
      list-style: none;
      width: 100%;
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
  }
`;

const NavLogoStyles = styled(LogoStyles)`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin: 2rem 0 0 1rem;
    height: 75px;
    width: 75px;
  }
`;

const BackButtonStyles = styled.div`
  cursor: pointer;
  font-size: 2rem;
  margin: 2rem 1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 1px solid var(--white);
  transition: background 0.25s;

  position: relative;
  z-index:5;

  &:hover {
    background: var(--dark2);
  }
`;

export { NavStyles, NavLogoStyles, BackButtonStyles };
