let firebaseConfig = {};

const setFirebaseConfig = (config) => {
  firebaseConfig = config;
};

const getFbConfig = () => {
  return firebaseConfig;
};

const getFirebaseConfig = () => {
  return new Promise ((resolve, reject) => {
    $.ajax('../db/firebase.json').done((data) => {
      resolve(data);
    }).fail((err) => {
      reject(err);
    });
  });
};

const callFirebaseConfig = () => {
  getFirebaseConfig().then((data) => {
    firebase.initializeApp(data.firebase);
    setFirebaseConfig(data.firebase);
  }).catch((err) => {
    console.error('Firebase config not grabbed. ', err);
  });
};

module.exports = {
  callFirebaseConfig,
  getFbConfig,
};
