import styled, { keyframes } from 'styled-components';

const fadeInH = keyframes`
    0% {
      transform: translate(0%);
    }
    100% {
        transform: translate(15%);
    } 
  `;
const fadeInR = keyframes`
    0% {
      transform: translate(50%);
      visibility: hidden;   
     
    }
    100% {
        transform: translate(150%);
        visibility: visible; 
    } 
  `;

const fadeInL = keyframes`
    0% {
      transform: translate(100%);
      /* visibility: hidden;    */
    }
    100% {
        transform: translate(0%);
        visibility: visible;
    } 
  `;

const NameStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .first-name {
    color: var(--orange);
    font-size: 10rem;
    /* background: #d6bbbb; */
    margin-right: 1rem;
    transform: translateX(100%);

    position: relative;
    overflow: hidden;
    z-index: 1;
    animation: ${fadeInL} 7s;
    /* animation-delay: 2s; */
    animation-fill-mode: forwards;

    .first-name-rest {
      /* visibility: hidden; */
    }
  }
  .last-name {
    color: var(--orange);
    font-size: 10rem;
    /* background: white; */
    transform: translateX(-15%);
    /* visibility: hidden; */

    animation: ${fadeInH} 5s;
    /* animation-delay: 2s; */

    animation-fill-mode: forwards;
    .last-name-rest {
      /* visibility: hidden; */
    }
    z-index: 2;
  }

  .test {
    position: absolute;
    left: 49%;
    height: 100px;
    width: 350px;
    background: black;
    z-index: 2;
  }

  .test-1 {
    position: absolute;
    height: 100px;
    width: 400px;
    background: white;
    z-index: 2;
    transform: translateX(150%);

    animation: ${fadeInR} 5s;
    /* animation-delay: 2s; */
  }
`;
export { NameStyles };
