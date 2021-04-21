import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import EmotionTracker from './components/emotionTracker/EmotionTracker';
import Login from './components/login/Login';
import NewRegister from './components/newRegister/NewRegister';

function App({ firebase, authService }) {
  return (
    <HashRouter basename='/emotionTracker'>
      <Switch>
        <Route exact path={['/', '/login']}>
          <Login authService={authService} />
        </Route>
        <Route path='/register'>
          <NewRegister authService={authService} />
        </Route>
        <Route path='/emotion'>
          <EmotionTracker firebase={firebase} authService={authService} />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
