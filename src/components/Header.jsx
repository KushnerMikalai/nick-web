import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Global from '../styles/globalComponents';

const Header = () => (
  <S.Content>
    <Global.Container>
      <S.Row>
        <S.Logo href="/">NickWeb</S.Logo>
        <S.Nav>
          <S.List>
            <S.ListItem>
              <S.Link to="/">Home</S.Link>
            </S.ListItem>
            <S.ListItem>
              <S.Link to="/disk">Disk</S.Link>
            </S.ListItem>
            <S.ListItem>
              <S.Link to="/contact">Contact</S.Link>
            </S.ListItem>
          </S.List>
        </S.Nav>
        <S.User>+</S.User>
      </S.Row>
    </Global.Container>
  </S.Content>
);

const S = {};

S.Content = styled.header`
  background: rgba(255, 255, 255, .98);
  pointer-events: auto;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, .05);
`;

S.Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 6rem;
`;

S.Logo = styled.a`
  display: inline-block;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${(props) => props.theme.blue};
`;

S.Nav = styled.nav`
  // TODO
`;

S.User = styled.div`
  //font-size: 1rem;
`;

S.List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;  
`;

S.ListItem = styled.li`
  display: inline-block;
  margin: 0 1rem 0 0;
`;

S.Link = styled(Link)`
  color: ${(props) => props.theme.blue};
  font-weight: 500;
  font-size: 1.6rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default Header;
