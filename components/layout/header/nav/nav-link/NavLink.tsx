import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useNav } from '../../../../../lib/useNav';
import { NavLinkStyles } from './NavLinkStyles';

type Props = {
  link?: string;
  title: string;
  href?: string;
} & React.ComponentPropsWithoutRef<'button'>;

// eslint-disable-next-line react/display-name
const LinkBnt = React.forwardRef(
  (
    { href, title, link }: Props,
    ref: React.LegacyRef<HTMLAnchorElement> | undefined
  ) => {
    const router = useRouter();
    const { closeNav } = useNav();

    return (
      <a
        href={href}
        ref={ref}
        onClick={closeNav}
        className={
          router.asPath.split('/')[1] === title
            ? 'active-link'
            : ''
        }
      >
        {title}
      </a>
    );
  }
);

export const NavLink: React.FC<Props> = ({
  link,
  title,
}) => {
  return (
    <NavLinkStyles>
      <Link href={`/${link}`} passHref>
        <LinkBnt title={title} />
      </Link>
    </NavLinkStyles>
  );
};
