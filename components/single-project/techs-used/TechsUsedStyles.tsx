import styled from 'styled-components';

const TechsUsedStyles = styled.div`
  padding: 5rem 10rem 8rem 10rem;
  background: var(--dark4);

  h3 {
    font-size: 2.5rem;
    color: var(--white);
    margin-bottom: 2rem;

    color: #1c5ffe;
    background: linear-gradient(
      90deg,
      rgba(34, 193, 195, 1) 100px,
      rgba(253, 187, 45, 1) 500px
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
    color: #1c5ffe;
    background: linear-gradient(
      90deg,
      rgba(34, 193, 195, 1) 100px,
      rgba(253, 187, 45, 1) 500px
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export { TechsUsedStyles };
