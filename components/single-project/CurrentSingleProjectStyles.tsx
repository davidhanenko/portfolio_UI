import styled from 'styled-components';

import { ProjectDescriptionStyles } from './project-description/ProjectDescriptionStyles';

const CurrentSingleProjectStyles = styled.div`
  margin-top: 100px;

  .image-slider-section {
    height: 80vh;
    width: 100%;
    padding-bottom: 2rem;

    display: flex;
    justify-content: center;

    position: relative;

    .image-slider {
      max-width: 900px;
      height: 100%;
    }
  }

  .project-description {
    background-color: var(--white);
  }

  @media (max-width: 600px) {
    .image-slider-section {
      height: 60vh;
    }
  }

  ${ProjectDescriptionStyles} {
    .todo-section {
      width: 80%;
      margin: 0 auto;
      padding: 2rem;
      border: 1px solid var(--gray);
      border-radius: 5px;
      box-shadow: 0 0 10px 1px var(--gray);

    }
    .todo-headline {
      font-size: 2.5rem;
      margin-bottom: 2rem;
      color: transparent;
      background: var(--gradient-text2);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
    }

    .todo-item {
      width: 80%;
      margin: 0 auto;
      list-style: '✅';

      p {
        font-size: 1.5rem;
      }
    }
  }
`;

export { CurrentSingleProjectStyles };
