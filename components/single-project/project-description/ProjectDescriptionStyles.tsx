import styled from 'styled-components';

const ProjectDescriptionStyles = styled.div`
  padding: 10rem;

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

      /* border-bottom: 1px solid var(--lightOrange); */

      .feature-header {
        position: relative;

        .marker {
          font-size: 1.5rem;
          position: absolute;
          left: -2rem;
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
