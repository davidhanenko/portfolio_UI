import styled from 'styled-components';

const TextPlLineStyles = styled.div`
  height: 2rem;
  margin: 1rem 3rem;
`;

const TextPlaceholderStyles = styled.div`
  margin: 2rem 0;
`;

export const TextPlLine = () => {
  return (
    <TextPlLineStyles className='placeholder'></TextPlLineStyles>
  );
};

export const TextPlaceholder = () => {
  return (
    <TextPlaceholderStyles>
      <TextPlLine />
      <TextPlLine />
      <TextPlLine />
      <TextPlLine />
    </TextPlaceholderStyles>
  );
};
