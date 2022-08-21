import styled from 'styled-components';

const CvBtnStyles = styled.a`
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: var(--white);

  cursor: pointer;

  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  border: none;

  font-size: 2.5rem;
  font-weight: 600;
  color: var(--orange);

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.35s;

  &:hover {
    color: var(--dark);
  }

  &:active {
    box-shadow: inset 0px 0px 5px 2px
      rgba(120, 120, 120, 0.95);
    transform: translateY(4px);
  }

  @media (max-width: 768px) {
    bottom: 50%;
    transform: translateY(50%);
  }

  @media (max-width: 576px) {
    bottom: -5rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export { CvBtnStyles };
