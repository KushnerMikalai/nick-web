import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    document.title = `You click ${count}`;
    console.log('useEffect, (componentDidMount, componentDidUpdate)');

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
  <div className="app">
    <header className="App-header">
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
    </header>
  </div>
);

export default App;
