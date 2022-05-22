import styled from 'styled-components';

const EmailFormStyles = styled.form`
  color: white;

  label {
    font-size: 1.5rem;
    display: block;
    padding: 3rem;
    textarea {
      display: block;
    }
    input {
      display: block;
      width: 30rem;
      height: 3rem;
    }
  }
`;

export { EmailFormStyles };
