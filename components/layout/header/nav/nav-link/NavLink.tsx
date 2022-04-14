import Link from 'next/link';
import React from 'react';
import { NavLinkStyles } from './NavLinkStyles';

type Props = {
  link: string;
  href?: string;
};

const LinkBnt = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<Props>
>(({ href, link }, ref) => {
  return (
    <a href={href} href={ref}>
      {link}
    </a>
  );
});

export const NavLink: React.FC<Props> = ({ link }) => {
  return (
    <NavLinkStyles>
      <Link href={`/${link}`} passHref>
        <LinkBnt link={link} />
      </Link>
    </NavLinkStyles>
  );
};
