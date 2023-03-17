import { useInView } from 'react-intersection-observer';

import { ToastContainer } from 'react-toastify';
import { useContactQuery } from '../../graphql/contact/main.generated';

import Media from '../shared/media/Media';
import { ContactContainer } from './ContactStyles';
import { EmailForm } from './email-form/EmailForm';
import { Map } from './map/Map';
import { MediaStylesWrapper } from './media/MediaStylesWrapper';

const Contact: React.FC = () => {
  const { data, loading } = useContactQuery();

  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  const map =
    data?.contact?.data?.attributes?.map?.data?.attributes
      ?.url;
  const email = data?.contact?.data?.attributes?.email;


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
      {map && (
        <>
          <EmailForm emailTo={email!} inView={inView} />

          <Map map={map} inView={inView} mapRef={ref} />

          <MediaStylesWrapper inView={inView}>
            <Media />
          </MediaStylesWrapper>
        </>
      )}
    </ContactContainer>
  );
};

export default Contact;
