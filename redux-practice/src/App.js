import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CounterContainer from './containers/CounterContainer';
import TodoContainer from './containers/TodoContainer';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={CounterContainer} exact />
        <Route path="/todos" component={TodoContainer} exact />
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다.</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
