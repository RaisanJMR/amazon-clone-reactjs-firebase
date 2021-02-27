import React from 'react';
import './Home.css';
import Product from '../Product/Product';

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://m.media-amazon.com/images/G/31/AmazonVideo/2019/1102620_MLP_1440x675_apv189_V3._SY1200_FMJPG_.jpg"
        alt=""
      />
      <div className="home__text">
        <h1 className="home__textHeader">Welcome to prime video</h1>
        <p className="home__textDesc">
          Join Prime to watch the latest movies, TV shows and award-winning{' '}
          <br></br>
          Amazon Originals
        </p>
        <button className="home__textBtn">Start your 30-day free trail</button>
        <small className="home__textSm">
          with any credit card or debit card
        </small>
        <button className="home__textBtn">get prime at $6 per month</button>
        <small className="home__textSm">
          with any credit card or debit card
        </small>
      </div>
      {/* Product id,title,rating,image */}
      <div className="home__row">
        <Product
          id="12345"
          title="Mac Pro is designed for pros who need to build high-bandwidth capabilities into their systems. With four double-wide slots"
          price={110.25}
          rating={5}
          image="https://source.unsplash.com/qHt7oEgE9gg/400x400"
        />
        <Product
          id="12346"
          title="Galaxy Note10 Lite- S Pen with Air Actions & much more
          Pro-Grade Camera with Dual Pixel Technology
          4,500mAh Super Fast Charging Battery
          128GB Storage, Expandable by 1TB."
          price={78.99}
          rating={4}
          image="https://source.unsplash.com/F_cfF1uX7qY/400x400"
        />
        <Product
          id="12304"
          title="iPad Air is the perfect way to stay connected with Wi‑Fi and 4G LTE. Host a FaceTime call, join a video conference or start a group project with friends."
          price={45.28}
          rating={5}
          image="https://source.unsplash.com/A5Z9g4xP6Yw/400x400"
        />
        <Product
          id="12434"
          title="Apple Watch Nike Series 6. Front view Silver Aluminium Case with Nike Sport Band."
          price={99.99}
          rating={4}
          image="https://source.unsplash.com/2wFoa040m8g/400x400"
        />
      </div>

      <div className="home__row">
        <Product
          id="120234"
          title="QLED 8K - Turn ordinary days into extraordinary discoveries.
          Bring out the emotion in every moment"
          price={784}
          rating={5}
          image="https://source.unsplash.com/zhvaeh-R9rA/400x400"
        />
        <Product
          id="128434"
          title="Jordan MA2 Shatter the sneaker status quo in the Jordan MA2. Made from a mix of suede, full-grain leather and a variety of textiles, it features unconventional labels, technical micro-graphics and raw foam edges for a balance of new and classic"
          price={11.25}
          rating={5}
          image="https://source.unsplash.com/164_6wVEHfI/400x400"
        />
      </div>
    </div>
  );
}

export default Home;
