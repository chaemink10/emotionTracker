import firebase from 'firebase/app';
import { auth } from './firebase.js';

class AuthService {
  login(service) {
    const provider = new firebase.auth[`${service}AuthProvider`]();
    return auth.signInWithPopup(provider);
  }

  onAuthChange(onUserChanged) {
    firebase.auth().onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }

  logout() {
    firebase.auth().signOut();
  }
}

export default AuthService;
