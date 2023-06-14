import Media from '../Media';
import { MediaFooterStyles } from './MediaFooterStyles';

const MediaFooter = ({ inView }: { inView: boolean }) => {
  return (
    <MediaFooterStyles inView={inView}>
      <Media />
    </MediaFooterStyles>
  );
};

export default MediaFooter;
