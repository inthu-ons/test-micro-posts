var admin = require("firebase-admin");

var serviceAccount = require("./test-micro-posts-firebase-adminsdk-hz7my-999aa29fee.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const DB = admin.firestore();
module.exports = {admin , DB};
