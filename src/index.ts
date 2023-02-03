import ReactDOM from 'react-dom/client';

import './sass/main.scss';
import initApp from './initApp';

const app = (): void => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    const myApp = initApp();
    root.render(myApp);
  }
};

app();
