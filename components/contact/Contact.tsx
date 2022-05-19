import { ContactStyles } from './ContactStyles';
import { EmailForm } from './email-form/EmailForm';

export const Contact: React.FC = () => {
  return (
    <ContactStyles>
      <h1>Contact Me</h1>
      <EmailForm />
    </ContactStyles>
  );
};
