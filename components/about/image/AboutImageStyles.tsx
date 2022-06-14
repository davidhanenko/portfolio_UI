import styled from 'styled-components';

const AboutImageStyles = styled.section`
  display: flex;
  justify-content: center;

  @media (max-width: 576px) {
    padding: 3rem 1rem;
  }

  .img-container {
    position: relative;
    display: block;
    overflow: hidden;
    width: 300px;
    height: 300px;

    .img-overlay-1 {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: #984b2857;
      transition: all 0.4s;

      clip-path: polygon(100% 0, 0 100%, 100% 100%);
    }
    .img-overlay-2 {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: #984b2857;
      transition: all 0.4s;

      clip-path: polygon(100% 0, 0 100%, 0 0);
    }

    &:hover {
      .img-overlay-1 {
        transform: translateY(100%);
      }
      .img-overlay-2 {
        transform: translateY(-100%);
      }
    }
  }
`;

export { AboutImageStyles };
