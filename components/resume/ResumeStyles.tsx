import styled from 'styled-components';

const ResumeStyles = styled.main`
  margin: calc(var(--headerHeight) + 5rem) 0;
  padding: 2rem;

  @media (min-width: 768px) {
    .react-pdf__Page__canvas {
      margin: 0 auto;
      width: 70% !important;
      height: 100% !important;
    }
  }
`;

export { ResumeStyles };
