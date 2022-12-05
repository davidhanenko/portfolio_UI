import { GreetTxt, GreetProps } from './GreetStyles';

import { NAME_ANIMATION_DURATION as nameAnimationDuration } from '../../../config';
import { useAnimation } from '../../../lib/useAnimation';

interface IGreetProps extends GreetProps {
  greetText: string;
}

export const Greet: React.FC<IGreetProps> = ({
  greetText,
} ) => {
  
   const { nameAnimationEnd } = useAnimation();

  return (
    <GreetTxt nameAnimationEnd={nameAnimationEnd}>
      <p>{greetText}</p>
    </GreetTxt>
  );
};
