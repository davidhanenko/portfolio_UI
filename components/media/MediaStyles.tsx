import styled from 'styled-components';

const MediaStyles = styled.article`
  font-size: 2rem;

  svg {
    margin: 0.75rem 0;
    color: var(--orange);
    transition: all 0.25s;

    &:hover {
      color: var(--white);
      cursor: pointer;
    }
  }
`;

export { MediaStyles };
