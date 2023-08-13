import styled, { keyframes } from 'styled-components';

const bgMove = keyframes`
    from { background-position: 0 0; }
    to { background-position: 400% 0; }
`;

const TechsUsedStyles = styled.div`
  padding: 5rem 10rem 16rem 10rem;
  background: var(--dark4);

  h3 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: transparent;
    background: var(--gradient-text1);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }

  .techs-list {
    list-style: none;
    display: flex;
    justify-content: space-around;
  }

  .tech-item {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .tech-title {
    font-size: 1.7rem;
    color: transparent;
    background: var(--gradient-text3);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    background-size: 400%;
    animation: ${bgMove} 8s linear infinite;
  }

  @media (max-width: 800px) {
    padding: 5rem 2rem 16rem 2rem;

    .techs-list {
      display: grid;
      grid-template-columns: repeat(
        auto-fill,
        minmax(100px, 120px)
      );
    }
  }
`;

export { TechsUsedStyles, bgMove };
