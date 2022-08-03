import styled from 'styled-components';

type HeaderProps = {
  nameAnimationEnd: boolean;
};

const HeaderStyles = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;

  height: var(--headerHeight);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: var(--orange);
  font-size: 7rem;
  opacity: 0;
  transition: 0.5s;

  ${(props: HeaderProps) =>
    props.nameAnimationEnd && `opacity:1;`}

  @media (max-width: 768px) {
    background: var(--dark);
  }
`;

export { HeaderStyles };
