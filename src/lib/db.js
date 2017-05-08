// @flow

import firebase from 'firebase'

try {
  firebase.initializeApp({
    apiKey: "AIzaSyCylSspQxjnzMP8lmV8XXJfJvszsFBrkk4",
    authDomain: "simple-chat-70638.firebaseapp.com",
    databaseURL: "https://simple-chat-70638.firebaseio.com",
    projectId: "simple-chat-70638",
    storageBucket: "simple-chat-70638.appspot.com",
    messagingSenderId: "348697889366"
  })
} catch (err) {
  // we skip the "already exists" message which is
  // not an actual error when we're hot-reloading
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}

const root = firebase.database().ref()

export default root
