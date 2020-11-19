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
        {routes.map(({ filePath, route }, idx) => (
          <Route key={idx} path={route} exact component={closureComponent(filePath)} />
        ))}
        <Route exact path={'/'} component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function closureComponent (component: string) {
  return function LazyWrapper () {
    const Component = lazy(() => {
      return import(`./projects${component}`)
        .catch(() => import('./components/NotFound'));
    });

    return (
      <Suspense fallback={<Loading />}><Component /></Suspense >
    );
  }
}
