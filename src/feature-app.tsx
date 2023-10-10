import {FeatureAppDefinition} from '@feature-hub/core';
import {ReactFeatureApp} from '@feature-hub/react';
import * as React from 'react';

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <main>
      <h1>Hello, world!</h1>
      <button
        onClick={() => setCount((prevCount) => prevCount - 1)}
        type="button"
      >
        -
      </button>
      <span style={{margin: '0 .5rem'}}>{count}</span>
      <button
        onClick={() => setCount((prevCount) => prevCount + 1)}
        type="button"
      >
        +
      </button>
    </main>
  );
}

const featureAppDefinition: FeatureAppDefinition<ReactFeatureApp> = {
  create: () => ({render: () => <App />}),
};

export default featureAppDefinition;
