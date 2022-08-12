import { Document, Page, pdfjs } from 'react-pdf';
// import {
//   Document,
//   Page,
// } from 'react-pdf/dist/entry.webpack';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.js`;

// import 'react-pdf/dist/Page/AnnotationLayer.css';

import { useResumeQuery } from '../../graphql/resume/resume.generated';

import { ResumeStyles } from './ResumeStyles';

const Resume: React.FC = () => {
  const { data, loading, error } = useResumeQuery();

  if (loading) return <h4>Loading...</h4>;
  if (error) return <p>error.message</p>;

  return (
    <ResumeStyles>
      <Document
        className='resume-pdf'
        file={
          data?.resume?.data?.attributes?.file?.data
            ?.attributes?.url
        }
        onLoadError={console.error}
      >
        <Page pageNumber={1} />
        <br />
        <Page pageNumber={2} />
      </Document>
    </ResumeStyles>
  );
};

export default Resume;
