import React, { ReactElement, lazy, Suspense } from 'react';
import { Route, Switch, } from 'react-router-dom';
import { useBodyStyles } from '../../hooks';
import { AppProvider } from './context';
import Loading from '../../components/Loading';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './index.scss';


export default function App (): ReactElement {
  useBodyStyles({
    background: '#f1f5f8'
  });

  return (
    <AppProvider>
      <main className="cocktails_project">
        <Navbar />
        <Switch>
          <Route exact component={Home} path="/cocktails" />
          <Route exact component={() => LazyDetails('About')} path="/cocktails/about" />
          <Route exact component={() => LazyDetails('Details')} path="/cocktails/details/:id" />
        </Switch>
      </main>
    </AppProvider>
  );
}

const LazyDetails = (page: string) => {
  const Component = lazy(() => import(`./pages/${page}`));

  return (
    <Suspense fallback={<Loading />}><Component /></Suspense >
  );
}
