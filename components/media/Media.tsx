import {
  FaLinkedin,
  FaGithub,
  FaFacebookSquare,
} from 'react-icons/fa';
import { CgFileDocument } from 'react-icons/cg';
import { MediaStyles } from './MediaStyles';


const Media: React.FC = () => {
  return (
    <MediaStyles>
      <FaLinkedin />
      <FaGithub />
      <FaFacebookSquare />
      <CgFileDocument />
    </MediaStyles>
  );
};

export default Media;
