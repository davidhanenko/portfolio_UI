import styled from 'styled-components';

const EmailFormStyles = styled.form`
  color: var(--white);
  width: 100%;
  max-width: 450px;

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
      padding: 1.4rem;

      position: relative;

      textarea {
        font-size: 1.5rem;
        display: block;
        padding: 1rem;
        width: 100%;

        &::placeholder {
          color: #bdbbbb;
        }
      }
      input {
        font-size: 1.5rem;
        display: block;
        width: 100%;
        height: 3rem;
        margin: 0.4rem 0;
        padding: 1rem;

        &::placeholder {
          color: #bdbbbb;
        }
      }

      .input-error {
        position: absolute;
        color: #ae310b;
        font-size: 1.4rem;
        right: 1.4rem;
        padding-top: 0.5rem;
      }
    }

    button {
      font-size: 2rem;
      background: orange;
      padding: 1rem;
      border-radius: 0.5rem;
      margin: 1rem 0 0 1.4rem;
    }
  }
`;

export { EmailFormStyles };
