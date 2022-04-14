import styled from 'styled-components';

interface NavProps {
  readonly isOpen: boolean;
}

const NavStyled = styled.nav<NavProps>`
  color: white;
  font-size: 5rem;

  .hamburger-react {
    z-index: 5;
    margin: 2rem 2rem 0 0;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    min-height: 400px;

    position: absolute;
    right: 0;
    top: 0;
    background: lightgray;
    min-width: 100%;
    font-weight: 100;
    list-style: none;
    z-index: 3;

    transform: translateY(-100%);
    transition: all 1s;

    ${props => props.isOpen && `transform: translateY(0%)`};
  }
`;

export { NavStyled };
