import styled from 'styled-components';

const ResumeStyles = styled.main`
  margin: calc(var(--headerHeight) + 5rem) 0;
  .react-pdf__Page__canvas {
    margin: 0 auto;
    /* width: 70% !important; */
    /* height: 100% !important; */

    @media (max-width: 768px) {
      /* width: 100% !important; */
      padding: 2rem;
    }
  }
`;

export { ResumeStyles };
