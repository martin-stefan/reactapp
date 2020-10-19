const functions = require('firebase-functions');
const { admin, db } = require('./util/admin');

const express = require('express');
const app = express();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//


app.get('/posts', (req, res) => {
  db.collection("posts")
  .orderBy('datePosted')
  .get()
  .then(data => {
    let posts = [];
    data.forEach(doc => {
      posts.push({
        postId: doc.id,
        ...doc.data()
      });
    });
    return res.json(posts);
  })
  .catch(err => console.error(err));
});

app.post('/post', (req, res) => {
  const newPost = {
    title: req.body.title,
    artist: req.body.artist,
    commentNum: 0,
    comments: [],
    datePosted: new Date().toISOString(),
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

exports.api = functions.region('northamerica-northeast1').https.onRequest(app);