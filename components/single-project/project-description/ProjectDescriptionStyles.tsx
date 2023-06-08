import styled from 'styled-components';

const ProjectDescriptionStyles = styled.div`
  padding: 5rem 10rem;

  @media (max-width: 800px) {
    padding: 5rem;
  }

  @media (max-width: 600px) {
    padding: 2rem;
  }

  .description {
    .description-paragraph {
      padding: 1rem 0;

      h5 {
        font-size: 1.7rem;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.5rem;
      }
    }
  }

  .features {
    margin-top: 5rem;

    h3 {
      font-size: 2.5rem;
    }

    .feature-paragraph {
      width: 80%;
      display: grid;
      grid-template-columns: 2fr 4fr;
      gap: 1rem;

      margin: 0 auto;
      padding: 3rem 0;

      .feature-header {
        position: relative;

        .marker {
          font-size: 2rem;
          position: absolute;
          left: -3rem;
          top: -1rem;
        }
      }

      h5 {
        font-size: 1.7rem;
      }

      p {
        font-size: 1.5rem;
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
