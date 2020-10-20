import React from 'react';


const Hero = () => {
  return (
    <section className="hero">

      <div className="hero__intro">
        <h1 className="xlargeTitle">Music</h1>
        <p className="smallTitle">Find new music. Share your music. Connect with friends.</p>
      </div>
      
      <div className="buttons">
        <button className="button">Join Now</button>
        <button className="button">Login</button>
      </div>
    </section>
  );
}

export default Hero;