const functions = require('firebase-functions');
const { db } = require('./util/admin');


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});


exports.getPosts = functions.https.onRequest((req, res) => {
  db.collection("post")
    .get()
    .then(data => {
      let posts = [];
      data.forEach(doc => {
        posts.push({
          title: doc.data().title,
          artist: doc.data().artist,
          commentNum: doc.data().commmentNum,
          comments: doc.data().comments,
          datePosted: doc.data().datePosted,
          likes: doc.data().likes,
          user: doc.data().user
        });
      });
      return res.json(posts);
    })
    .catch(err => console.error(err));
});