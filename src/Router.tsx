import React, { lazy, Suspense, ReactElement } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import Loading from './components/Loading';
import NotFound from './components/NotFound';
import routes from './routes';


export default function _Router (): ReactElement {
  return (
    <Router>
      <Switch>
        {routes.map(({ filePath, route, exact = true }, idx) => (
          <Route key={idx} path={route} exact={exact} component={LazyComponent(filePath)} />
        ))}
        <Route exact path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function LazyComponent (component: string) {
  return function Wrapper () {
    const Component = lazy(() => import(`./projects${component}`)
      .catch(() => import('./components/NotFound')));

    return (
      <Suspense fallback={<Loading />}><Component /></Suspense >
    );
  }
}
