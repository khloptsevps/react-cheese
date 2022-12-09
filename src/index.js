import ReactDOM from 'react-dom/client';

import './sass/main.scss';
import initApp from './initApp.js';

const app = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const myApp = initApp();
  root.render(myApp);
};

app();
