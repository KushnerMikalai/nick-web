import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Global from './styles/globalComponents';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    // document.title = `You click ${count}`;
    console.log(count, 'useEffect, (componentDidMount, componentDidUpdate)');

    return () => {
      console.log(count, '<--- useEffect (componentWillUnmount)');
    };
  }, [count]);


  return (
    <>
      <p>
        You click
        {' '}
        {count}
        .
      </p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me!
      </button>
    </>
  );
}

const App = () => (
  <S.App>
    <Global.Container>
      <div>
        {process.env.NODE_ENV}
      </div>
      <p>
        <code>src/App.js</code>
        and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Puk Puk
      </a>
      <Example />
    </Global.Container>
  </S.App>
);

const S = {};

S.App = styled.div`
  display: block;
`;

export default App;
