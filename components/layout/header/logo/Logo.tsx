import Image from 'next/image';
import Link from 'next/link';
import { LogoStyles } from './LogoStyles';
import logo from '../../../../public/HD.png';

export const Logo: React.FC = () => {
  return (
    <LogoStyles>
      <Link href='/'>
        <a>
          <Image
            src={logo!}
            alt='logo'
            width={100}
            height={55}
            objectFit='scale-down'
          />
        </a>
      </Link>
    </LogoStyles>
  );
};
