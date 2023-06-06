import styled, { keyframes } from 'styled-components';

const animatedMouse = keyframes`
0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
     opacity: 0;
    transform: translateY(6px);
  }

`;

const mouseScroll = keyframes`
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

const ScrollAnimatedStyles = styled.div`

  span {
    display: block;
    width: 5px;
    height: 5px;
    transform: rotate(45deg);
    transform: rotate(45deg);
    transform: rotate(45deg);
    transform: rotate(45deg);
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    margin: 0 0 3px 5px;
  }

  .mouse {
    height: 21px;
    width: 14px;
    border-radius: 10px;
    border: 2px solid #ffffff;
  }

  .down-arrow-1 {
    margin-top: 6px;
  }

  .down-arrow-1,
  .down-arrow-2,
  .down-arrow-3 {
    animation: ${mouseScroll} 1s infinite;
  }
  .down-arrow-1 {
    animation-delay: 0.1s;
    animation-delay: 0.1s;
    animation-direction: alternate;
  }

  .down-arrow-2 {
    animation-delay: 0.2s;
    animation-delay: 0.2s;
    animation-direction: alternate;
  }
  .down-arrow-3 {
    animation-delay: 0.3s;
    animation-delay: 0.3s;
    animation-direction: alternate;
  }

  .mouse-in {
    height: 5px;
    width: 2px;
    display: block;
    margin: 5px auto;
    background: #ffffff;
    position: relative;

    animation: ${animatedMouse} 1.2s ease infinite;
  }
`;

const ScrollAnimated = () => {
  return (
    <ScrollAnimatedStyles>
      <div className='mouse'>
        <div className='mouse-in'></div>
      </div>
      <div>
        <span className='down-arrow-1'></span>
        <span className='down-arrow-2'></span>
        <span className='down-arrow-3'></span>
      </div>
    </ScrollAnimatedStyles>
  );
};

export default ScrollAnimated;
