import styled, { keyframes } from 'styled-components';

type PropsTypes = {
  isDirty: boolean;
  inView: boolean;
};

const slideIn = keyframes`
  0% {
    transform: translateX(-900px); 
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const EmailFormStyles = styled.form<PropsTypes>`
  position: absolute;
  bottom: 10%;
  left: 10%;
  color: var(--white);
  width: 30vw;
  min-width: 300px;
  max-width: 400px;
  text-align: end;

  
  @media (min-width: 768px) {
    opacity: 0;
    animation: ${props => props.inView && slideIn};
    animation-fill-mode: forwards;
    animation-duration: 1.2s;

    z-index: 2;
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
    background: var(--bgDark);

    border: 1px solid var(--white);
    padding: 2rem;

     @media (max-width: 768px) {
       width: 90vw;
       margin-bottom: 5rem;
     }

    .input-field {
      border: none;
      outline: none;
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
        padding: 0.5rem 0.5rem 0.6rem 0;
        width: 100%;
        font-size: 1.6rem;
        border-bottom: solid 1px var(--white);
        color: var(--white);
        font-weight: 200;
        transition: all 0.5s ease;
        background: transparent;

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

  &:hover span {
    letter-spacing: 0.4rem;
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

  &:hover::before {
    opacity: 1;
    transform: scale(1, 1);
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

  &:hover::after {
    opacity: 0;
    transform: scale(0.1, 1);
  }
`;

export { EmailFormStyles, EmailSendBtn };
