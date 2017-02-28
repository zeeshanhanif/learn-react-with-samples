// This separate configuration file
import * as firebase from 'firebase'

// adding firebase configuration
var firebaseConfig = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com"
}

firebase.initializeApp(firebaseConfig);
