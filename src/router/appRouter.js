import Cookies from 'js-cookie';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Page from '../router';
import Menu from './../component/Menu';
import Login from './../page/Login';

function AppRouter(props) {
  const accessToken = Cookies.get('accessToken');

  const PageRouter = (Page) => {
    let result = null;
    result = Page.map((value, key) => (
      <Route
        key={key}
        exact={value.exact}
        path={value.path}
        render={(props) => {
          return (
            <>
              <value.main {...props} />
            </>
          );
        }}
      />
    ));
    return result;
  };
  return (
    <>
      {accessToken ? (
        <>
          <Menu />
          <Switch>
            <Redirect strict exact from='/' to='/trang-chu' />
            {PageRouter(Page)}
          </Switch>
        </>
      ) : (
        <Login />
      )}
    </>
  );
}

export default AppRouter;
