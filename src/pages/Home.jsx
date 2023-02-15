import React from 'react'

const Home = () => {
  return (
    <section className="home section">

      <div class="t-img container">
        <img src="./images/img1.jpg" className="img" alt="img1" />
        <img src="./images/img2.jpg" className="img" alt="img2" />
        <img src="./images/img3.jpg" className="img" alt="img1" />
        <img src="./images/img4.jpg" className="img" alt="img2" />
        <img src="./images/img5.jpg" className="img" alt="img1" />
      </div>

      <div className="container section">
        <div className="main-section">
          <h1>Home is Where <br /> Your Story Begins</h1>
          <p className="main-para">Building a next-generation collaborative platform to connect renters, homeowners,
            and agents. Live the way you want. Beautiful homes. Incredible locations. Pricing that makes sense.
          </p>
        </div>
        {/* <div > */}
          <a href="/working" className="btn">Find Your Home</a>
        {/* </div> */}
      </div>

      <div className="trust">
        <div className="two grid grid-two-col">
          <h2>Trusted by the many <br /> people in US</h2>
          <p>Building a next-generation collaborative platform to connect renters, homeowners,
            and agents. Live the way you want. Beautiful homes. Incredible locations. Pricing that makes
            sense.</p>
        </div>
        <div className="emojis">
          <div className="hand">🙏</div>
          <div className="love">💗</div>
          <div className="E-love">😍</div>
        </div>
      </div>

      <div className="container section">
        <div className="prop">
          <h2>Populer Properties</h2>
          <div className="t-img c-img">
            <img src="./images/img6.jpg" alt="" className="img" />
            <img src="./images/img8.jpg" alt="" className="img" />
            <img src="./images/img7.jpg" alt="" className="img" />
            <img src="./images/img9.jpg" alt="" className="img" />
          </div>
          <div className="p-btn">
            <a href="/working" className="btn">Show All Property </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="container">
          <div className="prop">
            <h2>Reviews</h2>
          </div>
          <div className="review grid grid-two-col">
            <div className="t-img r-img">
              <img src="./images/r1.jpg" alt="" />
            </div>
            <div className="view">
              <h2>Lucas Oliver</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto expedita molestiae fugiat
                earum
                quo excepturi doloremque totam dolor facere ea ducimus voluptates perspiciatis itaque!</p>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
          <div className="review grid grid-two-col">
            <div className="t-img r-img">
              <img src="./images/r3.jpg" alt="" />
            </div>
            <div className="view">
              <h2>James William</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto expedita molestiae fugiat
                earum
                quo excepturi doloremque totam dolor facere ea ducimus voluptates perspiciatis itaque!</p>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="bottom grid grid-two-col">
          <div className="t-img b-img">
            <img src="/images/m1.jpg" alt="" />
            <img src="/images/m2.jpg" alt="" />
          </div>
          <div className="bottom-data">
            <h2>Ready to find your <br /> dream home?</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi repellendus molestias
              exercitationem itaque, velit corrupti voluptas! Vitae quas itaque!</p>
            <div className="b-btn">
              <a href="/working" className="btn ">Find Home</a>
              <a href="/contact" className="btn c-btn">Contact us</a>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Home;
