import {
  FaLinkedin,
  FaGithub,
  FaFacebookSquare,
} from 'react-icons/fa';
import { CgFileDocument } from 'react-icons/cg';
import { MediaStyles } from './MediaStyles';

interface IMediaPropsTypes {
  inView: boolean;
}

const Media: React.FC<IMediaPropsTypes> = ({ inView }) => {
  return (
    <MediaStyles inView={inView}>
      <FaLinkedin />
      <FaGithub />
      <FaFacebookSquare />
      <CgFileDocument />
    </MediaStyles>
  );
};

export default Media;
