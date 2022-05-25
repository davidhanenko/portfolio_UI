import styled, { keyframes } from 'styled-components';

const inputFocus = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1; 
    transform: translateX(100%);
  }
`;

const EmailFormStyles = styled.form`
  /* color: var(--white); */
  width: 100%;

  position: relative;

  h2 {
    text-align: center;
    font-size: 3rem;
    padding-bottom: 2rem;
  }

  .form {
    border: 1px solid var(--white);
    background: white;
    padding: 2rem;
    width: 90%;
    max-width: 400px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .input-field {
      border: none;
      outline: none;
      position: relative;
      margin-bottom: 2rem;
      padding: 0;

      &:focus-within label {
        color: orange;
        opacity: 1;
        transform: translateY(-2rem) scale(0.5);
        transform-origin: left;
      }

      input,
      textarea {
        border: none;
        outline: none;
        padding: 0.5rem 0.5rem 0.6rem 0;
        width: 100%;
        font-size: 1.5rem;
        border-bottom: solid 1px #efefef;
        transition: all 0.5s ease;

        &:focus {
          border-bottom: solid 1px orange;
        }
      }

      label {
        opacity: 0.5;
        position: absolute;
        top: 0;
        left: 0;
        transition: all 0.2s ease;
        font-size: 1.8rem;
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
