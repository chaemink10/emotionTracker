import { database } from './firebase.js';

class Database {
  save(tracker) {
    database.ref(`users/${tracker.id}`).set(tracker);
  }

  load(onUpdate) {
    const ref = database.ref('users/');
    ref.on('value', (snapshot) => {
      const tracker = snapshot.val();
      tracker && onUpdate(tracker);
    });
    return () => ref.off();
  }

  remove(deleteTracker) {
    database.ref(`users/${deleteTracker.id}`).remove();
  }
}

export default Database;
