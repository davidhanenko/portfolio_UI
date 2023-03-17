import styled from 'styled-components';
import { NavStateProvider } from '../../lib/useNav';
import Footer from './footer/Footer';
import GlobalStyles from './GlobalStyles';
import { Header } from './header/Header';

const InnerStyles = styled.div`
  width: 100%;
  margin: 0 auto;

  position: relative;
  user-select: none;
`;
interface IPageProps {
  children: React.ReactNode;
}

export const Page = ({ children }: IPageProps) => {
  return (
    <>
      <GlobalStyles />
      <NavStateProvider>
        <Header />
      </NavStateProvider>
      <InnerStyles>{children}</InnerStyles>
      <Footer />
    </>
  );
};
