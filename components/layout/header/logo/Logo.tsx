import Image from 'next/image';
import Link from 'next/link';
import { useLogoQuery } from '../../../../graphql/logo/logo.generated';
import { LogoStyles } from './LogoStyles';

export const Logo: React.FC = () => {
  const { data, loading, error } = useLogoQuery();

  const logoImgUrl =
    data?.logo?.data?.attributes?.logo?.data?.attributes
      ?.url;
  const logoAltText =
    data?.logo?.data?.attributes?.logo_alt;

  return (
    <LogoStyles>
      {data && (
        <Link href='/'>
          <a>
            <Image
              src={logoImgUrl!}
              alt={logoAltText!}
              width={75}
              height={75}
            />
          </a>
        </Link>
      )}
    </LogoStyles>
  );
};
