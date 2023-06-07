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
    
    .project-header {
      padding: 5rem 0;
      display: flex;
      justify-content: space-around;
      background-color: var(--lightGray);

      .outer-links {
        a {
          font-size: 2.5rem;
          color: var(--dark);
          padding: 1rem;

          position: relative;

          svg {
            transition: all 0.25s;
          }

          &:after {
            content: attr(data-tooltip);
            position: absolute;
            bottom: -4rem;
            right: 1rem;
            padding: 0.5rem 1rem;
            font-size: 0.6em;
            color: var(--white);
            background: var(--gray);
            width: 5rem;
            text-align: center;

            display: none;
            transition: all 0.25s;
          }

          @media (hover: hover) {
            &:hover svg {
              transform: scale(1.3);
            }

            &:hover::after {
              display: block;
            }

            &:active svg {
              color: var(--orange);
              transform: scale(1.3);
            }
          }
        }
      }
    }
  }
`;

export { SingleProjectStyles };
