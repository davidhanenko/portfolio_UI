
import { useAnimation } from '../../../lib/useAnimation';
import { GreetTxt, GreetProps } from './GreetStyles';

interface IGreetProps extends GreetProps {
  greetText: string;
  
}

export const Greet: React.FC<IGreetProps> = ({
  greetText,
}) => {
  const { nameAnimationEnd } = useAnimation();

  if (!greetText) {
    return null;
  }

  return (
    <GreetTxt nameAnimationEnd={nameAnimationEnd}>
      <p>{greetText}</p>
    </GreetTxt>
  );
};
