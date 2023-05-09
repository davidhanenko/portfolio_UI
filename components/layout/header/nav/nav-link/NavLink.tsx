import React from 'react';
import Link from 'next/link';

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
    const { active, closeNav, setActive } = useNav();

    const handleClick = () => {
      setActive(title);
      closeNav();
    };

    return (
      <a
        href={href}
        ref={ref}
        onClick={handleClick}
        className={active === title ? 'active-link' : ''}
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
      <Link href={`#${link}`} passHref>
        <LinkBnt title={title} />
      </Link>
    </NavLinkStyles>
  );
};
