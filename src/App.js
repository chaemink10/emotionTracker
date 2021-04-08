import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EmotionTracker from './components/emotionTracker/EmotionTracker';
import Login from './components/login/Login';

function App({ firebase, authService }) {
  return (
    <BrowserRouter basename='/'>
      <Switch>
        <Route exact path={['/', '/login']}>
          <Login authService={authService} />
        </Route>
        <Route path='/emotion'>
          <EmotionTracker firebase={firebase} authService={authService} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
