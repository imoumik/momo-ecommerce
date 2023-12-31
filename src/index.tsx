import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { UserProvider } from './contexts/UserContext';
// import { CategoriesProvider } from './contexts/CategoriesContext';
import { CartProvider } from './contexts/CartContext';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>{/*loading null renders nothing untill persis rehydrating is finished*/}
          <BrowserRouter>
            {/* <UserProvider> */}
            {/* <CategoriesProvider> */}
            {/* <CartProvider> */}
            <App />
            {/* </CartProvider> */}
            {/* </CategoriesProvider> */}
            {/* </UserProvider> */}
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
