import styled from 'styled-components';

const ProjectDescriptionStyles = styled.div`
  padding: 10rem 5rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 800px) {
    padding: 5rem;
  }

  @media (max-width: 600px) {
    padding: 2rem;
  }

  .description {
    .description-paragraph {
      padding: 1rem 0;
      font-size: 1.5rem;

      h5 {
        font-size: 1.7rem;
        margin-bottom: 1rem;
      }
    }
  }

  .features {
    margin-top: 5rem;

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

    .feature-paragraph {
      width: 80%;
      display: grid;
      grid-template-columns: 2fr 4fr;
      gap: 1rem;

      margin: 1rem auto;
      padding: 3rem 0;

      .feature-header {
        position: relative;

        .marker {
          font-size: 1.2rem;
          position: absolute;
          left: -2rem;
          top: -1rem;
        }

        h5 {
          font-size: 1.7rem;
        }
      }

      .feature-text {
        font-size: 1.5rem;

        ul {
          padding-left: 2rem;
        }
      }

      @media (max-width: 800px) {
        width: 100%;
        display: block;
        padding: 1rem 3rem;

        h5 {
          margin: 1rem 0;
        }
      }
    }
  }
`;

export { ProjectDescriptionStyles };
