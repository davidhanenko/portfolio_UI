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
      margin: 8rem auto;
      padding: 4rem 2rem;
      border: 1px solid var(--gray);
      border-radius: 5px;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);

      @media (max-width: 800px) {
        width: 100%;
      }
    }
    h3 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
      color: transparent;
      background: var(--gradient-text2);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
    }

    li {
      width: 90%;
      margin: 2rem auto;
      list-style: none;

      .todo-header {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-size: 1.8rem;

        .marker {
          font-size: 1.2rem;
        }
      }

      p {
        font-size: 1.5rem;
        margin-left: 2rem;
      }
    }
  }
`;

export { CurrentSingleProjectStyles };
