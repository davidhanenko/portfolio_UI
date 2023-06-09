import styled from 'styled-components';

const SingleProjectStyles = styled.div`
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
`;

export { SingleProjectStyles };
