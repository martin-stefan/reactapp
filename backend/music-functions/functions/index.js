const functions = require('firebase-functions');
const { admin, db } = require('./util/admin');


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.getPosts = functions.https.onRequest((req, res) => {
  db.collection("posts")
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

exports.newPost = functions.https.onRequest((req, res) => {
  const newPost = {
    title: req.body.title,
    artist: req.body.artist,
    commentNum: 0,
    comments: [],
    datePosted: admin.firestore.Timestamp.fromDate(new Date()),
    likes: 0,
    user: req.body.user
  };

  db.collection("posts")
    .add(newPost)
    .then(doc => {
      return res.json({ message: `Post ${doc.id} was created successfully`});
    })
    .catch(err => {
      res.status(500).json({ error: `Post was not created successfully`});
      console.error(err);
    });
});