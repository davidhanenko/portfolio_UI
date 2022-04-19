import Image from 'next/image';
import { StackStyles } from './StackStyles';

import js from '../../../public/img/js.png';

export const Stack: React.FC = () => {
  return (
    <StackStyles>
      <Image src={js} alt={'js'} width={55} height={55} />
      <Image src={js} alt={'js'} width={55} height={55} />
      <Image src={js} alt={'js'} width={55} height={55} />
      <Image src={js} alt={'js'} width={55} height={55} />
    </StackStyles>
  );
};
