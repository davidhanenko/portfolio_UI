import styled from 'styled-components';

const ResumeStyles = styled.main`
  margin: calc(var(--headerHeight) + 5rem) 0;

  @media (min-width: 768px) {
    .react-pdf__Page__canvas {
      margin: 0 auto;
      width: 70% !important;
      height: 100% !important;
    }
  }
`;

const DownloadBtn = styled.button`
  background-color: var(--offWhite);

  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  position: relative;
  margin: 8rem auto;

  &::after {
    content: '';
    width: 0%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    transition: all 0.3s;
    background-color: var(--lightGray);
    opacity: 0.8;
    z-index: 1;
  }

  svg {
    fill: var(--orange);
    font-size: 2rem;
    z-index: 2;
  }

  a {
    font-size: 2rem;
    font-weight: 400;
    color: var(--orange);
    padding: 1rem;
    text-transform: uppercase;
    z-index: 2;
    transition: all 0.3s;
  }

  &:hover {
    &::after {
      width: 100%;
    }
    a {
      letter-spacing: 0.1rem;
    }
  }
`;
export { ResumeStyles, DownloadBtn };
