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
          <Route key={idx} path={getDecoratedRoute(route)} exact component={closureComponent(filePath)} />
        ))}
        <Route exact path={getDecoratedRoute('/home')} component={Home} />
        <Route exact path={getDecoratedRoute('/')} component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function closureComponent (component: string) {
  return function LazyWrapper () {
    const Component = lazy(() => {
      return import(`./projects${component}`)
        .catch(e => import('./components/NotFound'));
    });

    return (
      <Suspense fallback={<Loading />}><Component /></Suspense >
    );
  }
}
/*
This is added for handling routing in Github pages 
Reference: https://github.com/facebook/create-react-app/issues/1765
*/
export function getDecoratedRoute (route: string): string {
  return `${process.env.PUBLIC_URL}${route}`;
}