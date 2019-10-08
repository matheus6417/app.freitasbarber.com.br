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
// const backendUrl = `http://localhost:5000/${
//   firebaseConfig.projectId
// }/us-central1/api`;

// App Engine / Debug
const backendUrl = `http://localhost:8080`;

export default {
  firebaseConfig,
  backendUrl,
};
