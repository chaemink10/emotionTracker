import { database } from './firebase.js';

class Database {
  save(tracker) {
    database.ref(`users/tracker/${tracker.id}`).set(tracker);
  }

  load(onUpdate, serviceName) {
    const ref = database.ref(`users/${serviceName}`);
    ref.on('value', (snapshot) => {
      const tracker = snapshot.val();
      tracker && onUpdate(tracker);
    });
    return () => ref.off();
  }

  remove(deleteTracker) {
    database.ref(`users/tracker/${deleteTracker.id}`).remove();
  }

  saveEmotion(addEmotion) {
    database.ref(`users/emotion/${addEmotion.id}`).set(addEmotion);
  }
}

export default Database;
