import styled from 'styled-components';

const MediaStyles = styled.article`
  font-size: 2.3rem;

  a {
    position: relative;

    &::after {
      content: attr(data-tooltip);
      position: absolute;
      top: -2rem;
      right: 3rem;
      padding: 0.5rem 1rem;
      font-size: 1.3rem;
      color: var(--white);
      background: var(--gray);

      display: none;
      transition: all 0.2s;
    }

    &:hover::after {
      display: block;

      /* disable tooltips on touch screens */
      @media (pointer: coarse) {
        display: none;
      }
    }
  }

  svg {
    margin: 0.75rem 0;
    color: var(--orange);
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      color: var(--white);
      transform: scale(1.07);
    }
  }
`;

export { MediaStyles };
