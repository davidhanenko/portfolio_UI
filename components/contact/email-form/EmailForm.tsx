import { EmailFormStyles } from './EmailFormStyles';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  message: string;
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
          {...register('name', { required: 'required'})}
          placeholder='name'
        />
      </label>
      <label>
        Email
        <input
          {...register('email', { required: true })}
          placeholder='email'
        />
        {errors.email && (
          <span>This field is required</span>
        )}
      </label>{' '}
      <button type='submit'>Submit</button>
    </EmailFormStyles>
  );
};
