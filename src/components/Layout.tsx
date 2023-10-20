import styled from 'styled-components';
import HeaderBurger from "./HeaderBurger";

type LayoutProps = {
  children: React.ReactNode
}

const LayoutSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  position: relative;
`;

function Layout (props: LayoutProps): JSX.Element {
  return (
    <LayoutSection>
      <HeaderBurger />
      <main>
        {props.children}
      </main>
      
    </LayoutSection>
  );
}

export default Layout;
