import styled from 'styled-components';
import PuffLoader from 'react-spinners/PuffLoader';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderPuff = () => {
  return (
    <LoaderWrapper>
      <PuffLoader
        size={100}
        color={'orange'}
        speedMultiplier={1.5}
      />
    </LoaderWrapper>
  );
};
