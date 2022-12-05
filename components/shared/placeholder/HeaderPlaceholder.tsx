import styled from 'styled-components';

const HeaderPlaceholderStyles = styled.div`
  height: 2.5rem;
  margin: 2rem 3rem;
  width: 35%;
`;

export const HeaderPlaceholder = () => {
  return (
    <HeaderPlaceholderStyles className='placeholder'></HeaderPlaceholderStyles>
  );
};
