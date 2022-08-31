import styled from 'styled-components';

const TextPlLineStyles = styled.div`
  height: 2rem;
  margin: 1rem 3rem;
`;

export const TextPlLine = () => {
  return (
    <TextPlLineStyles className='placeholder'></TextPlLineStyles>
  );
};

export const TextPlaceholder = () => {
  return (
    <>
      <TextPlLine />
      <TextPlLine />
      <TextPlLine />
      <TextPlLine />
    </>
  );
};
