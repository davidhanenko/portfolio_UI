import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import { Header } from './header/Header';

const InnerStyles = styled.div`
  width: 100%;
  margin: 0 auto;
`;
interface IPageProps {
  children: React.ReactNode;
}

export const Page = ({ children }: IPageProps) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </>
  );
};
