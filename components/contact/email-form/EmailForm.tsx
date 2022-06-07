import { useForm, SubmitHandler } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';

import axios from 'axios';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PulseLoader from 'react-spinners/PulseLoader';

import {
  EmailFormStyles,
  EmailSendBtn,
} from './EmailFormStyles';

type Email = {
  emailTo: string;
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  emailMessage: string;
  to: string;
};

export const EmailForm: React.FC<Email> = ({ emailTo }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
      dirtyFields,
      isDirty,
    },
  } = useForm<Inputs>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      emailMessage: '',
    },
  });

  // in-view observer
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  // form submit handler
  const onSubmitForm: SubmitHandler<
    Inputs
  > = async values => {
    let config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/email`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        to: emailTo,
        from: values.email,
        subject: values.subject
          ? `${values.subject} - from HD`
          : 'Email from DH portfolio website',
        text: values.emailMessage,
      },
    };

    try {
      const resp = await axios(config);

      if (resp.status == 200) {
        toast.success('Message sent successfully!');
        reset();
      }
    } catch (err) {
      toast.error(
        'An unexpected error occurred, please try again'
      );
    }
  };

  return (
    <EmailFormStyles
      isDirty={isDirty}
      onSubmit={handleSubmit(onSubmitForm)}
      ref={ref}
      inView={inView}
    >
      <div className='form'>
        <h2>Contact Me</h2>

        <fieldset className='input-field'>
          <label
            className={
              dirtyFields.name ? 'label-dirty' : ''
            }
            htmlFor='name'
          >
            Name
          </label>
          <input
            id='name'
            type='text'
            {...register('name', {
              required: 'Name is required',
            })}
          />
          {
            <span className='input-error'>
              {errors?.name?.message}
            </span>
          }
        </fieldset>

        <fieldset className='input-field'>
          <label
            className={
              dirtyFields.email ? 'label-dirty' : ''
            }
            htmlFor='email'
          >
            Email
          </label>
          <input
            id='email'
            type='email'
            {...register('email', {
              required: 'Email is required',
            })}
          />
          {
            <span className='input-error'>
              {errors?.email?.message}
            </span>
          }
        </fieldset>

        <fieldset className='input-field'>
          <label
            className={
              dirtyFields.subject ? 'label-dirty' : ''
            }
            htmlFor='subject'
          >
            Subject
          </label>
          <input
            id='subject'
            type='string'
            {...register('subject', {
              required: false,
            })}
          />
          {
            <span className='input-error'>
              {errors?.subject?.message}
            </span>
          }
        </fieldset>

        <fieldset className='input-field'>
          <label
            className={
              dirtyFields.emailMessage ? 'label-dirty' : ''
            }
            htmlFor='message'
          >
            Message
          </label>
          <textarea
            id='message'
            rows={6}
            {...register('emailMessage', {
              required: 'Message is required',
              minLength: {
                value: 5,
                message: 'Tell me a bit more',
              },
            })}
          />
          {
            <span className='input-error'>
              {errors?.emailMessage?.message}
            </span>
          }
        </fieldset>

        <EmailSendBtn type='submit' disabled={isSubmitting}>
          {isSubmitting ? (
            <PulseLoader
              color={'orange'}
              loading={true}
              size={10}
            />
          ) : (
            <span>Send</span>
          )}
        </EmailSendBtn>
      </div>
    </EmailFormStyles>
  );
};
