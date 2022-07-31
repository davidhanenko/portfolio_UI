import { NextPage } from "next";
import Head from "next/head";
import Contact from "../components/contact/Contact";

const ContactsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>David Hanenko | Contacts</title>
      </Head>
      <Contact/>
    </>
  )
}

export default ContactsPage;