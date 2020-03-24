import app from 'firebase/app';
import 'firebase/auth';
import 'dotenv/config';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}
export default Firebase;

//   < !--The core Firebase JS SDK is always required and must be listed first-- >
//     <script src="https://www.gstatic.com/firebasejs/7.12.0/firebase-app.js"></script>

//     <!--TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries -->

// <script>
//   // Your web app's Firebase configuration
//     var firebaseConfig = {
//         apiKey: "AIzaSyC2lPKVFSNtBYH6hcWvoI-sook1x4xlMWw",
//     authDomain: "astute-strategy-272015.firebaseapp.com",
//     databaseURL: "https://astute-strategy-272015.firebaseio.com",
//     projectId: "astute-strategy-272015",
//     storageBucket: "astute-strategy-272015.appspot.com",
//     messagingSenderId: "61676321889",
//     appId: "1:61676321889:web:d22f9e491641e98c683e20"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>