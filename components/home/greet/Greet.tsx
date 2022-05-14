import { GreetStyles, GreetProps } from './GreetStyles';

import { NAME_ANIMATION_DURATION as nameAnimationDuration } from '../../../config';

interface IGreetProps extends GreetProps {
  greetText: string;
}

export const Greet: React.FC<IGreetProps> = ({
  greetText,
}) => {
  return (
    <GreetStyles
      nameAnimationDuration={`${nameAnimationDuration}s`}
    >
      <p>{greetText}</p>
    </GreetStyles>
  );
};
