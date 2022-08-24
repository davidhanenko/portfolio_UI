import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import styled from 'styled-components';
import Contact from '../components/contact/Contact';

const ContactsWrapperStyles = styled.div`
  @media (max-width: 768px) {
    padding-top: calc(var(--headerHeight) + 5rem);
  }
`;

const ContactsPage: NextPage = () => {
  // show navbar during current session
  useEffect(() => {
    sessionStorage.setItem('showNav', 'true');
  }, []);

  return (
    <>
      <Head>
        <title>David Hanenko | Contacts</title>
      </Head>
      <ContactsWrapperStyles>
        <Contact />
      </ContactsWrapperStyles>
    </>
  );
};

export default ContactsPage;
