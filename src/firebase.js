
import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyCUtFfCKl2vthdYfyCxWnq4J7x2oN0_Ln4",
    authDomain: "porter-proj98.firebaseapp.com",
    databaseURL: "https://porter-proj98-default-rtdb.firebaseio.com",
    projectId: "porter-proj98",
    storageBucket: "porter-proj98.appspot.com",
    messagingSenderId: "607614204717",
    appId: "1:607614204717:web:3050c34bb9db13472431a4"
}
const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.firestore()
export default { firebase, db };