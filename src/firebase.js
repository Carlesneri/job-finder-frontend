import firebase from 'firebase/app'
import 'firebase/firebase-firestore'
import 'firebase/firebase-auth'
import { firebaseConfig } from '../firebaseConfig.js'

firebase.initializeApp(firebaseConfig)

firebase.auth().signInAnonymously().catch(err => console.log(err))

const jobsDB = firebase.firestore()

export default jobsDB
