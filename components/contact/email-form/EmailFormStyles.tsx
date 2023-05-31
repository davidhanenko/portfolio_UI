import styled, { keyframes } from 'styled-components';

type PropsTypes = {
  readonly isDirty: boolean;
  readonly inView: boolean;
};

const slideIn = keyframes`
  0% {
    transform: translateX(-900px); 
  }

  100% {
    transform: translateX(0);
  }
`;

const Form = styled.form<PropsTypes>`
  position: absolute;
  bottom: 10%;
  left: 10%;
  color: var(--white);
  width: 30vw;
  min-width: 300px;
  max-width: 400px;
  text-align: end;

  @media (min-width: 768px) {
    transform: translateX(-900px);
    animation: ${props => props.inView && slideIn};
    animation-fill-mode: forwards;
    animation-duration: 1.2s;
    animation-delay: 0.5s;
    animation-timing-function: cubic-bezier(
      0.17,
      0.48,
      0.45,
      1.05
    );

    z-index: 1;
  }
  @media (max-width: 768px) {
    position: static;
    width: 100%;
    display: flex;
    justify-content: center;
    min-width: 100%;
    height: auto;
  }

  h2 {
    text-align: center;
    font-size: 3rem;
    padding-bottom: 3rem;
    color: var(--orange);
  }

  .form {
    background: var(--darkOp);
    padding: 2rem;
    box-shadow: 3px 10px 15px -3px var(--darkOp);

    @media (max-width: 768px) {
      width: 90vw;
      margin-bottom: 5rem;
    }

    .input-field {
      border: none;
      outline: none;
      box-shadow: none;
      position: relative;
      margin-bottom: 2rem;
      padding: 0;

      &:focus-within label {
        color: var(--orange);
        opacity: 1;
        transform: translateY(-2rem) scale(0.6);
        transform-origin: left;
      }

      input,
      textarea {
        border: none;
        outline: none;
        box-shadow: none;
        padding: 0.5rem 0.5rem 0.6rem 0;
        width: 100%;
        font-size: 1.6rem;
        line-height: 1.6rem;
        border-bottom: solid 1px var(--white);
        border-radius: none;
        color: var(--white);
        font-weight: 200;
        transition: all 0.5s ease;
        background: transparent;

        &:focus {
          border-bottom: solid 1px orange;
          outline: none;
          box-shadow: none;
          border-radius: none;
        }
      }

      label {
        opacity: 0.5;
        position: absolute;
        top: 0;
        left: 0;
        transition: all 0.2s ease;
        font-size: 1.9rem;
      }

      .label-dirty {
        color: var(--orange);
        opacity: 1;
        transform: translateY(-2rem) scale(0.6);
        transform-origin: left;
      }

      .input-error {
        position: absolute;
        color: #ae310b;
        font-size: 1.4rem;
        right: 1.4rem;
        padding-top: 0.5rem;
      }
    }
  }
`;

const EmailSendBtn = styled.button`
  border: none;
  outline: none;
  background: transparent;

  line-height: 4rem;
  height: 4rem;
  text-align: center;
  width: 20rem;
  cursor: pointer;

  color: var(--orange);
  transition: all 0.3s;
  position: relative;

  span {
    transition: all 0.3s;
    text-transform: uppercase;
    font-size: 1.7rem;
  }

  @media (hover: hover) {
    &:hover span {
      letter-spacing: 0.4rem;
    }
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    transform: scale(0.1, 1);
  }
  @media (hover: hover) {
    &:hover::before {
      opacity: 1;
      transform: scale(1, 1);
    }
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.3s;
    background-color: rgba(255, 255, 255, 0.038);
  }

  @media (hover: hover) {
    &:hover::after {
      opacity: 0;
      transform: scale(0.1, 1);
    }
  }
`;

export { Form, EmailSendBtn };
