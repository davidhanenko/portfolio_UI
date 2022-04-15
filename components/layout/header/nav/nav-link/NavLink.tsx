import Link from 'next/link';
import React, {
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import { NavLinkStyles } from './NavLinkStyles';

type Props = {
  link: string;
  href?: string | undefined;
  // onClick: (id: string) => void;
} & React.ComponentPropsWithoutRef<'button'>;

// eslint-disable-next-line react/display-name
const LinkBnt = React.forwardRef(
  (
    { href, link }: Props,
    ref: React.LegacyRef<HTMLAnchorElement> | undefined
  ) => {
    return (
      <a href={href} ref={ref}>
        {link}
      </a>
    );
  }
);

export const NavLink: React.FC<Props> = ({ link }) => {
  return (
    <NavLinkStyles>
      <Link href={`/${link}`} passHref>
        <LinkBnt link={link} />
      </Link>
    </NavLinkStyles>
  );
};
