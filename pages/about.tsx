import { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/about/About';

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>David Hanenko | About</title>
      </Head>
      <About />
    </>
  );
};

export default AboutPage;
