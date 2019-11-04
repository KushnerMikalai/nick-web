import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Global from '../styles/globalComponents';

const Header = () => (
  <Header.Content>
    <Global.Container>
      <Header.Row>
        <Header.Logo href="/">Nick Web</Header.Logo>
        <Header.Nav>
          <Header.List>
            <Header.ListItem>
              <Header.Link to="/">Home</Header.Link>
            </Header.ListItem>
            <Header.ListItem>
              <Header.Link to="/contact">Contact</Header.Link>
            </Header.ListItem>
          </Header.List>
        </Header.Nav>
        <Header.User>Login</Header.User>
      </Header.Row>
    </Global.Container>
  </Header.Content>
);

Header.Content = styled.header`
  background: rgba(255, 255, 255, 0.98);
  pointer-events: auto;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, .05);
`;

Header.Logo = styled.a`
  display: inline-block;
  text-decoration: none;
`;

Header.Nav = styled.nav`
  // TODO
`;

Header.User = styled.div`
  font-size: 1rem;
`;

Header.Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 6rem;
`;

Header.List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;  
`;

Header.ListItem = styled.li`
  display: inline-block;
  margin: 0 1rem 0 0;
`;

Header.Link = styled(Link)`
  color: ${(props) => props.theme.blue};
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default Header;
