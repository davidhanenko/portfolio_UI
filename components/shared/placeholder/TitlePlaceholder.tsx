import styled from 'styled-components';

const TitlePlaceholderStyles = styled.div`
    height: 3rem;
    margin: 5rem 0;
    width: 70%;
    margin: 4rem auto;
  
`;

export const TitlePlaceholder = () => {
  return (
    <TitlePlaceholderStyles className='placeholder'></TitlePlaceholderStyles>
  );
};
