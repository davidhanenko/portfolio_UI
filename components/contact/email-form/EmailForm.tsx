import { EmailFormStyles } from './EmailFormStyles';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

type Inputs = {
  name: string;
  email: string;
  emailMessage: string;
  to: string;
};

export const EmailForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

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
        to: process.env.NEXT_PUBLIC_API_EMAIL_TO,
        text: values.emailMessage,
        subject: 'test/next',
        from: values.email,
      },
    };

    try {
      const resp = await axios(config);
      if (resp.data.status == 200) {
        reset();
        console.log('success');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <EmailFormStyles onSubmit={handleSubmit(onSubmitForm)}>
      <h2>Contact Me</h2>
      <div className='form'>
        <label>
          Name
          <input
            type='text'
            {...register('name', {
              required: 'Name is required',
            })}
            placeholder='name'
          />
          {
            <span className='input-error'>
              {errors?.name?.message}
            </span>
          }
        </label>
        <label>
          Email
          <input
            type='email'
            {...register('email', {
              required: 'Email is required',
            })}
            placeholder='email'
          />
          {errors.email && (
            <span className='input-error'>
              This field is required
            </span>
          )}
        </label>
        <label>
          Message
          <textarea
            rows={5}
            cols={50}
            {...register('emailMessage', {
              required: 'Message is required',
              minLength: {
                value: 5,
                message: 'Tell me a bit more',
              },
            })}
            placeholder='Type your message...'
          />
          {errors.emailMessage && (
            <span className='input-error'>
              {errors.emailMessage.message}
            </span>
          )}
        </label>
        <button type='submit'>Submit</button>
      </div>
    </EmailFormStyles>
  );
};
