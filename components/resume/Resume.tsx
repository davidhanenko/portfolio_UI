import Link from 'next/link';
import { Document, Page, pdfjs } from 'react-pdf';

import { FaFileDownload } from 'react-icons/fa';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.js`;

import { useResumeQuery } from '../../graphql/resume/resume.generated';

import DocumentPlaceholder from './DocumentPlaceholder';
import { DownloadBtn, ResumeStyles } from './ResumeStyles';

const Resume: React.FC = () => {
  const { data, loading, error } = useResumeQuery();

  const fileUrl =
    data?.resume?.data?.attributes?.file?.data?.attributes
      ?.url;

  if (loading) return <h4>Loading...</h4>;
  if (error) return <p>error.message</p>;

  return (
    <ResumeStyles>
      <Document
        className='resume-pdf'
        file={fileUrl}
        loading={<DocumentPlaceholder />}
        onLoadError={console.error}
      >
        <Page pageNumber={1} />
        <br />
        <Page pageNumber={2} />

        <DocumentPlaceholder />
      </Document>

      {fileUrl && (
        <DownloadBtn>
          <Link href={fileUrl} passHref>
            <a download>
              <FaFileDownload />
              &nbsp; Download
            </a>
          </Link>
        </DownloadBtn>
      )}
    </ResumeStyles>
  );
};

export default Resume;
