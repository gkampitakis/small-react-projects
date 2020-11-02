import React, { ChangeEvent, Component } from 'react';
import './app.css';
import Home from './components/Home';
import Loading from './projects/tours/components/Loading';

const options = [
  { value: 'birthday/Birthday', label: 'Birthday Project' },
  { value: 'tours/Tours', label: 'Tours Project' }
];

class App extends Component<any, { loading: boolean, error: Error | null; Component: any }> {
  constructor (props: any) {
    super(props);
    this.state = {
      loading: false,
      error: null,
      Component: undefined
    };
  }

  dynamicImport = (file: string) => {
    this.setState({
      ...this.state,
      loading: true
    });
    import(`./projects/${file}`)
      .then(c => {
        console.log(c.default);

        this.setState({
          ...this.state,
          Component: c.default
        });
      })
      .catch(e => this.setState({
        ...this.state,
        error: e
      }))
      .finally(() => this.setState({
        ...this.state,
        loading: false
      }));
  }

  loadComponent = (e: ChangeEvent<HTMLSelectElement>) => {
    this.dynamicImport(e.target.value);
  }

  render () {
    const { loading, Component, error } = this.state;
    return (
      <>
        {!Component && <Home
          options={options}
          error={error}
          Component={Component}
          loading={loading}
          loadComponent={this.loadComponent}
        />}
        {Component && <Component />}
      </>
    );
  }
}

export default App;