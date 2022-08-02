import styled from 'styled-components';
import { MediaStyles } from '../../../../media/MediaStyles';

const NavLinkStyles = styled.li`
  a {
    position: relative;
    color: var(--textDark);
    font-size: 3rem;
    font-weight: 400;
    text-transform: capitalize;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: -10%;
      width: 120%;
      height: 100%;
      z-index: 1;
      opacity: 0;
      transition: all 0.25s;
      border-bottom: 2px solid var(--orange);
      transform: scale(0.1, 1);
    }

    &:hover::after {
      opacity: 1;
      transform: scale(1, 1);
    }
  }

  .active-link {
    border-bottom: 2px solid var(--orange);
    pointer-events: none;
  }
`;

const MediaStylesWrapper = styled.li`
  ${MediaStyles} {
    a {
      &::after {
        top: 3rem;
        right: 3rem;
        cursor: auto;
      }
    }
  }
`;

export { NavLinkStyles, MediaStylesWrapper };
