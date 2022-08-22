import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';
import { routes } from '../routes/Routes';
import './App.css';

const Application: React.FunctionComponent<{}> = props => {

  useEffect(() => {
    // logging.info('Loading application.');
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                render={(props: RouteComponentProps<any>) => (
                  <route.layout>
                    <route.component
                      name={route.name}
                      {...props}
                      {...route.props}
                    />
                  </route.layout>
                )}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Application;