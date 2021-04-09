import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EmotionTracker from './components/emotionTracker/EmotionTracker';
import Login from './components/login/Login';
import RegisterConts from './components/register/RegisterConts';

function App({ firebase, authService }) {
  return (
    <BrowserRouter basename='/emotionTracker'>
      <Switch>
        <Route exact path={['/', '/login']}>
          <Login authService={authService} />
        </Route>
        <Route path='/register'>
          <RegisterConts authService={authService} />
        </Route>
        <Route path='/emotion'>
          <EmotionTracker firebase={firebase} authService={authService} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
