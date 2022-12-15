import styled from 'styled-components';

const MediaStyles = styled.article`
  font-size: 3rem;

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
      transition: all 0.3s;
    }

    @media (hover: hover) {
      &:hover::after {
        display: block;
      }
    }
  }

  svg {
    margin: 0.5rem 0;
    padding: 0.25rem;
    color: var(--orange);
    transition: all 0.35s;
    cursor: pointer;

    @media (hover: hover) {
      &:hover {
        color: var(--white);
        transform: scale(1.07) translateY(0.35rem);
      }
      &:active {
        color: var(--white);
        transform: scale(1.07);
      }
    }
  }
`;

export { MediaStyles };
