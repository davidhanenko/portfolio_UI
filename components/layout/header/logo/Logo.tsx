import { INavState, useNav } from '../../../../lib/useNav';
import { LogoStyles } from './LogoStyles';

export const Logo: React.FC<INavState> = () => {
  const { isOpen } = useNav();
  return (
    <LogoStyles isOpen={isOpen}>
      <span className='logo-1'>H</span>
      <span className='logo-2'>D</span>
    </LogoStyles>
  );
};
