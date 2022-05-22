import styled from 'styled-components';

const EmailFormStyles = styled.form`
  color: var(--white);

  h2 {
    text-align: center;
    font-size: 3rem;
    padding-bottom: 2rem;
  }

  .form {
    border: 1px solid var(--white);
    padding: 2rem;

    label {
      font-size: 1.2rem;
      display: block;
      padding: 3rem;
      textarea {
        font-size: 1.5rem;
        display: block;
      }
      input {
        font-size: 1.5rem;
        display: block;
        width: 100%;
        height: 3rem;
        margin: 0.4rem 0;
      }

      .input-error {
        color: #ae310b;
        font-size: 1.4rem;
        display: flex;
        justify-content: end;
      }
    }

    button {
      font-size: 2rem;
      background: orange;
      padding: 1rem;
      border-radius: 0.5rem;
      margin-left: 3rem;
    }
  }
`;

export { EmailFormStyles };
