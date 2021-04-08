import { database } from './firebase.js';

class Database {
  save(tracker, user) {
    database.ref(`users/${user}/tracker/${tracker.id}`).set(tracker);
  }

  load(onUpdate, serviceName, user) {
    const ref = database.ref(`users/${user}/${serviceName}`);
    ref.on('value', (snapshot) => {
      const tracker = snapshot.val();
      tracker && onUpdate(tracker);
    });
    return () => ref.off();
  }

  remove(deleteTracker, user) {
    database.ref(`users/${user}/tracker/${deleteTracker.id}`).remove();
  }

  saveEmotion(addEmotion, user) {
    database.ref(`users/${user}/emotion/${addEmotion.id}`).set(addEmotion);
  }
}

export default Database;
