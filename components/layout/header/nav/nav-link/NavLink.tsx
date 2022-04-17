import Link from 'next/link';
import React from 'react';
import { NavLinkStyles } from './NavLinkStyles';

type Props = {
  link?: string;
  page: string;
  href?: string;
  // onClick: (id: string) => void;
} & React.ComponentPropsWithoutRef<'button'>;

// eslint-disable-next-line react/display-name
const LinkBnt = React.forwardRef(
  (
    { href, page, link }: Props,
    ref: React.LegacyRef<HTMLAnchorElement> | undefined
  ) => {
    return (
      <a href={href} ref={ref}>
        {page}
      </a>
    );
  }
);

export const NavLink: React.FC<Props> = ({
  link,
  page,
}) => {
  return (
    <NavLinkStyles>
      <Link href={`/${link}`} passHref>
        <LinkBnt page={page} />
      </Link>
    </NavLinkStyles>
  );
};
