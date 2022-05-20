import { EmailFormStyles } from './EmailFormStyles';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  emailMessage: string;
};

export const EmailForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data =>
    console.log(data);

  return (
    <EmailFormStyles onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name
        <input
          type='text'
          {...register('name', {
            required: 'Name is required',
          })}
          placeholder='name'
        />
        {<span>{errors?.name?.message}</span>}
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
          <span>This field is required</span>
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
          placeholder='Type your emailMessage...'
        />
        {errors.emailMessage && (
          <span>{errors.emailMessage.message}</span>
        )}
      </label>
      <button type='submit'>Submit</button>
    </EmailFormStyles>
  );
};
