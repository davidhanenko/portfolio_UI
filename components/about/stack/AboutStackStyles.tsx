import styled from 'styled-components';

const AboutStackStyles = styled.div`
  padding-top: 5rem;
  color: var(--white);
  display: flex;
  justify-content: space-between;
  .group1 {
    display: inline-block;
    font-size: 1.8rem;
  }
  .group2 {
    display: inline-block;
    font-size: 1.5rem;
    .stack-img {
      height: 4rem;
    }
  }
  .group3 {
    display: inline-block;
    font-size: 1.2rem;
    .stack-img {
      height: 3rem;
    }
  }
`;

const StackStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  transition: all 0.3s;

  .stack-img {
    position: relative;
    height: 4rem;
  }

  &:hover {
    transform: scale(1.5);
  }
`;

export { AboutStackStyles, StackStyles };
