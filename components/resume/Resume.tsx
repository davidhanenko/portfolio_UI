import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.js`;

import { useResumeQuery } from '../../graphql/resume/resume.generated';

import { ResumeStyles } from './ResumeStyles';

const Resume:React.FC = () => {
  const { data, loading, error } = useResumeQuery();

  if (loading) return <h4>Loading...</h4>;

  console.log(
    data?.resume?.data?.attributes?.file?.data?.attributes
      ?.url
  );

  return (
    <ResumeStyles>
      <Document
        className="resume-pdf"
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
