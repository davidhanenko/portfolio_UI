import Image from 'next/image';
import { useRouter } from 'next/router';
import { LogoStyles } from './LogoStyles';
import logo from '../../../../public/HD.png';

export const Logo: React.FC = () => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push('/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <LogoStyles onClick={handleLogoClick}>
      <Image
        src={logo!}
        alt='logo'
        width={100}
        height={55}
        objectFit='scale-down'
      />
    </LogoStyles>
  );
};
