import React from 'react';
import Aux from '../hoc/Auxiliary';

const User = () => {
  return (
    <Aux>
      <header className="userHeader">
        <h1 className="userTitle">John Doe</h1>
        <h4 className="username">@johndoe</h4>
        <div className="userStats">

          <div className="userStats__item">
            <h3 className="userStats__item--info">Followers</h3>
            <h3 className="userStats__item--info">333k</h3>
          </div>

          <div className="userStats__item">
            <h3 className="userStats__item--info">Following</h3>
            <h3 className="userStats__item--info">152</h3>
          </div>

          <div className="userStats__item">
            <h3 className="userStats__item--info">Likes</h3>
            <h3 className="userStats__item--info">1.1m</h3>
          </div>

          <p className="userBio">Aspiring song artist just trying to share 
            my music with the world. </p>
        </div>
      </header>
    </Aux>
  
  );
}

export default User;