import styled, { keyframes } from 'styled-components';

const blick = keyframes`
   0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const Placeholder = styled.div`
  width: 70vw;
  margin: 5rem auto;
  border-radius: 1rem;
  background: var(--white);
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
  padding: 1rem;

  .placeholder {
    background: var(--lightGray);
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
    animation: ${blick} 1.5s infinite ease-in-out;
  }

  .title-placeholder {
    height: 3rem;
    margin: 5rem 0;
    width: 70%;
    margin: 4rem auto;
  }
  .header-placeholder {
    height: 2.5rem;
    margin: 2rem 3rem;
    width: 30%;
  }
  .text-placeholder {
    height: 2rem;
    margin: 1rem 3rem;
  }
`;

const Text = () => {
  return (
    <>
      <div className='header-placeholder placeholder'></div>
      <div className='text-placeholder placeholder'></div>
      <div className='text-placeholder placeholder'></div>
      <div className='text-placeholder placeholder'></div>
      <div className='text-placeholder placeholder'></div>
    </>
  );
};

const DocumentPlaceholder = () => {
  return (
    <Placeholder>
      <div className='title-placeholder placeholder'></div>
      <div className='text-placeholder placeholder'></div>
      <Text />
      <Text />
      <Text />
      <Text />
    </Placeholder>
  );
};

export default DocumentPlaceholder;
