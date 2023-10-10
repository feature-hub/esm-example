import {createFeatureHub} from '@feature-hub/core';
import {FeatureAppLoader, FeatureHubContextProvider} from '@feature-hub/react';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

const {featureAppManager} = createFeatureHub('integrator', {
  moduleLoader: (url) => import(url),
});

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <FeatureHubContextProvider value={{featureAppManager}}>
      <FeatureAppLoader featureAppId="hello-world" src="./feature-app.js" />
    </FeatureHubContextProvider>
  </React.StrictMode>,
);

if (process.env.NODE_ENV !== 'production') {
  new EventSource('/esbuild').addEventListener('change', () =>
    location.reload(),
  );
}
