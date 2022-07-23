import { useInView } from 'react-intersection-observer';

import { ToastContainer } from 'react-toastify';
import { useContactQuery } from '../../graphql/contact/main.generated';
import Media from '../media/Media';

import { ContactContainer } from './ContactStyles';
import { EmailForm } from './email-form/EmailForm';
import { Map } from './map/Map';

const Contact: React.FC = () => {
  const { data, loading } = useContactQuery();

  const { ref, inView } = useInView({
    // threshold: 0.5,
  });

  const map =
    data?.contact?.data?.attributes?.map?.data?.attributes
      ?.url;
  const email = data?.contact?.data?.attributes?.email;

  if (loading) return <h3>Loading...</h3>;

  return (
    <ContactContainer>
      <ToastContainer
        position='bottom-left'
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        draggable
        theme='dark'
      />

      <EmailForm emailTo={email!} inView={inView} />
      {map && <Map map={map} inView={inView} mapRef={ref} />}

      <Media inView={inView} />
    </ContactContainer>
  );
};

export default Contact;
