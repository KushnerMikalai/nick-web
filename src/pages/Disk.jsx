import React from 'react';
import styled from 'styled-components';
import gapi from 'gapi-client';
import Global from '../styles/globalComponents';

const init = () => {
  const CLIENT_ID = '607708173368-p7f35cesqrsv25nhcr9kh1guhbaanmu1.apps.googleusercontent.com';
  const API_KEY = 'AIzaSyAbXFVbsZEeOVeWQDnjBYvukRFpOvRqc0g';
  const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
  const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

};

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
