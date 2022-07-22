import {
  FaLinkedin,
  FaGithub,
  FaFacebookSquare,
} from 'react-icons/fa';
import { GrDocument } from 'react-icons/gr';
import { MediaStyles } from './MediaStyles';

const Media: React.FC = ({ inView }) => {
  return (
    <MediaStyles inView={inView}>
      <FaLinkedin />
      <FaGithub />
      <FaFacebookSquare />
      <GrDocument />
    </MediaStyles>
  );
};

export default Media;
