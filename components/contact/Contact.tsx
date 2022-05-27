import { ToastContainer } from 'react-toastify';

import { ContactStyles } from './ContactStyles';
import { EmailForm } from './email-form/EmailForm';

export const Contact: React.FC = () => {
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

      <EmailForm />
    </ContactStyles>
  );
};
