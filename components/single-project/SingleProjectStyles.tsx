import styled from 'styled-components';

const SingleProjectStyles = styled.div`

  margin-top: 150px;

  .image-slider-section {
    height: 80vh;
    width: 100%;

    display: flex;
    justify-content: center;

    position: relative;
    
    .image-slider {
      width: 600px;
      height: 100%;
    }
  }

  .project-description {
   background-color: var(--white);
   height: 100vh;

  }
`;

export { SingleProjectStyles };
