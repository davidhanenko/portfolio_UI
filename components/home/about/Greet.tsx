import { GreetStyles, IGreetProps } from './GreetStyles';

import { NAME_ANIMATION_DURATION as nameAnimationDuration } from '../../../config';


export const Greet: React.FC<IGreetProps> = () => {
  return (
    <GreetStyles
      nameAnimationDuration={`${nameAnimationDuration}s`}
    >
      <p>
        Self-taught, quick-learning JavaScript developer.
        Experienced with the whole process of building
        applications plus modern frameworks
      </p>
    </GreetStyles>
  );
};
