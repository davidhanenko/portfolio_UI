import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
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
      <Footer />
    </>
  );
};
