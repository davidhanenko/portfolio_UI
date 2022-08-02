import Image from 'next/image';
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
      {data &&
        <Image
          src={logoImgUrl!}
          alt={logoAltText!}
          width={75}
          height={75}
        />
      }
    </LogoStyles>
  );
};
