import styled, { keyframes } from 'styled-components';

const gradient = keyframes`
  0% {
    left: 0%;
  }
  
  100% {
    left: 100%;
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
  }

  .placeholder:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100px;
    background: linear-gradient(
      90deg,
      var(--lightGray),
      #f4f4f4,
      var(--lightGray)
    );
    animation: ${gradient} 1.5s infinite ease-in-out;
  }

  .title-placeholder {
    height: 3rem;
    margin: 5rem 0;
    width: 70%;
    margin: 0 auto;
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
