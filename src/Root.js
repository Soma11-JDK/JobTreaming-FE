import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from 'Components/App';
import { Provider } from 'react-redux';

// eslint-disable-next-line react/prop-types
const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={App} />
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
