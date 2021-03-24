import React from 'react';
import EmotionTracker from './components/emotionTracker/EmotionTracker';

function App({ firebase }) {
  return <EmotionTracker firebase={firebase}></EmotionTracker>;
}

export default App;
