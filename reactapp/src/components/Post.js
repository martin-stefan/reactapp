import React from 'react';

const Post = () => {
  return (
    <div className="post">
      <h1 className="post__title">Song Title</h1>
      <h2 className="post__artist">Artist Name</h2>
      <p className="post__album">Album</p>

      <p className="post__user">@johndoe</p>

      <img src="#" alt="Album Cover Image" className="post__img"/>
      
      <p className="post__service">Streaming services</p>
      <p className="post__genre">Genres</p>
     
    </div>
  )
}

export default Post;