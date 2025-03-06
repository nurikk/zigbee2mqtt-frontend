import 'react-app-polyfill/stable';
import 'react-notifications-component/dist/theme.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/styles.global.scss';

import React from 'react';
import { createRoot } from 'react-dom/client';

import api from './ws-client';

import { Main } from './Main';

api.connect();

const domNode = document.getElementById('root');
if (domNode) {
    createRoot(domNode).render(<Main />);
}

// https://vite.dev/guide/build#load-error-handling
window.addEventListener('vite:preloadError', () => {
    window.location.reload();
});
