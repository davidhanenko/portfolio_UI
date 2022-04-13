import { useState } from 'react';
import { NavStyled } from './NavStyles';
import { Squash as Hamburger } from 'hamburger-react';

export const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <NavStyled isOpen={isOpen}>
      <Hamburger
        size={48}
        hideOutline={false}
        label='Show menu'
        toggled={isOpen}
        toggle={setIsOpen}
      />
      <ul className='nav-links'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </NavStyled>
  );
};
