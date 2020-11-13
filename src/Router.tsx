import React, { lazy, Suspense, ReactElement } from 'react';
import {
  BrowserRouter as Router,
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
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}


function closureComponent (component: string) {
  return function LazyWrapper () {
    const Component = lazy(() => import(`./projects${component}`));
    return (
      <Suspense fallback={<Loading />}><Component /></Suspense >
    );
  }
}
