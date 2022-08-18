import { NextPage } from 'next';
import Head from 'next/head';


import Resume from '../components/resume/Resume';

const ResumePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>David Hanenko | Resume</title>
      </Head>
      <Resume />;
    </>
  );
};

export default ResumePage;
