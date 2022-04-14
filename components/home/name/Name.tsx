import { NameStyles } from './NameStyles';
export const Name = () => {
  return (
    <NameStyles>
      <div className='name'>
        <div className='first-name'>
          <span className='first-name-1'>D</span>
          <span className='first-name-rest'>avid</span>
        </div>
        <div className='last-name'>
          <span className='last-name-1'>H</span>
          <span className='last-name-rest'>anenko</span>
        </div>
      </div>
      <span className='last-name-overlay'></span>
    </NameStyles>
  );
};
