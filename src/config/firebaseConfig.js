import { initializeApp } from 'firebase/app'

import 'firebase/storage'

// Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyD8dmbmUB4cMiSamM9oTiFo9fiqsGc5eVA',
    authDomain: 'findtest-72b1e.firebaseapp.com',
    projectId: 'findtest-72b1e',
    storageBucket: 'findtest-72b1e.appspot.com',
    messagingSenderId: '585670836930',
    appId: '1:585670836930:web:eca2bb604745f8cddd715b',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

export default firebaseApp
