const firebaseConfig = {
  apiKey: "AIzaSyAlOOphPrNHkimFha2nHfnBK_Fi7gmMlls",
  authDomain: "meunoovapp.firebaseapp.com",
  databaseURL: "https://meunoovapp.firebaseio.com",
  projectId: "meunoovapp",
  storageBucket: "meunoovapp.appspot.com",
  messagingSenderId: "174698052888",
  appId: "1:174698052888:web:879daf389e69ae95"
};

// Cloud Functions
const backendUrl = `https://us-central1-${
  firebaseConfig.projectId
}.cloudfunctions.net/api`;

// App Engine
// const backendUrl = `<insert app engine url here>`;

export default {
  firebaseConfig,
  backendUrl,
};
