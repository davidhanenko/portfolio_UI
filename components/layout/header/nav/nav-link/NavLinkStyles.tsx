import styled from 'styled-components';
import { MediaStyles } from '../../../../shared/media/MediaStyles';

const NavLinkStyles = styled.li`
  margin: 2rem 0;
  max-height: 40px;

  a {
    position: relative;
    color: var(--white);
    font-size: 1.8rem;
    font-weight: 300;
    text-transform: capitalize;
    transition: color 0.25s;

    @media (pointer: fine) {
      &:hover {
        color: var(--gray);
      }
    }
  }

  .active-link {
    color: var(--gray);
  }

  @media (max-width: 768px) {
    margin: 0.75rem 0;
    a {
      color: var(--textDark);
      font-size: 2.3rem;
      font-weight: 400;
    }
  }
`;

const MediaStylesWrapper = styled.li`
  ${MediaStyles} {
    a {
      margin: 0 0.75rem;
      &::after {
        top: 3rem;
        right: 3rem;
        cursor: auto;
      }
    }
  }
`;

export { NavLinkStyles, MediaStylesWrapper };
