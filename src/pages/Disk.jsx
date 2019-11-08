import React from 'react';
import styled from 'styled-components';
import gapi from 'gapi-client';
import Global from '../styles/globalComponents';

const Drive = () => {
  return (
    <S.Main>
      <Global.Container>
        <h1>Disk</h1>
        <p>Drive API Quickstart</p>

        <button type="button" id="authorize_button" style={{ display: 'none' }}>Authorize</button>
        <button type="button" id="signout_button" style={{ display: 'none' }}>Sign Out</button>
        <pre id="content" style={{ whiteSpace: 'pre-wrap' }} />
      </Global.Container>
    </S.Main>
  );
};

const S = {};

S.Main = styled.main`
  display: block;
`;

export default Drive;
