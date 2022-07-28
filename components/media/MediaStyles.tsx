import styled from 'styled-components';

const MediaStyles = styled.article`
  font-size: 2.3rem;

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
