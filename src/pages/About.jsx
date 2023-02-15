import React from 'react'

const About = () => {
  return (
    <div className='about section container'>
      <div className="grid grid-two-col">
        <h1>Our Gems</h1>
        <img src="./images/about.png" className='abt' alt="" />
      </div>
      <div className="grid grid-two-col section">
        <div className="r-img">
          <img src="./images/m1.jpg" className='img r-img' alt="" />
        </div>
        <div className="view">
          <h2>Arthur William</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cum assumenda temporibus soluta tempora, dolorum ab fuga libero ad pariatur accusamus quam inventore commodi, provident facere ducimus perferendis! Repellendus eaque voluptate, obcaecati delectus neque vel excepturi repellat ex eveniet ducimus odio? Illo eveniet culpa ex. Voluptas architecto blanditiis accusamus possimus?</p>
        </div>
      </div>
      <div className="grid grid-two-col section">
        <div className="view">
          <h2>Adam Roy </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cum assumenda temporibus soluta tempora, dolorum ab fuga libero ad pariatur accusamus quam inventore commodi, provident facere ducimus perferendis! Repellendus eaque voluptate, obcaecati delectus neque vel excepturi repellat ex eveniet ducimus odio? Illo eveniet culpa ex. Voluptas architecto blanditiis accusamus possimus?</p>
        </div>
        <div className="r-img">
          <img src="./images/m2.jpg" className='img r-img' alt="" />
        </div>
      </div>
    </div>
  )
}

export default About;
