import { ToastContainer } from 'react-toastify';
import { useContactQuery } from '../../graphql/contact/main.generated';

import { ContactStyles } from './ContactStyles';
import { EmailForm } from './email-form/EmailForm';
import { Map } from './map/Map';

export const Contact: React.FC = () => {
  const { data, loading } = useContactQuery();

  const map =
    data?.contact?.data?.attributes?.map?.data?.attributes
      ?.url;
  const email = data?.contact?.data?.attributes?.email;

  if (loading) return <h3>Loading...</h3>;

  return (
    <ContactStyles>
      <ToastContainer
        position='bottom-left'
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        draggable
        theme='dark'
      />
      <Map map={map!} />
      <EmailForm emailTo={email!} />
    </ContactStyles>
  );
};
