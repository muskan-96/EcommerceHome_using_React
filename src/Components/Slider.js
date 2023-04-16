import './Home.css'
import Image0 from "../Images/Womens/w9.jpg";
import Image1 from "../Images/kids/k2.jpg";
import Image2 from "../Images/Womens/w1.jpg"
import image3 from "../Images/Men/m1.jpeg"
import image4 from "../Images/Men/m2.jpg";
import Image5 from "../Images/Womens/w10.webp";
import Image6 from "../Images/Men/m7.jpg";
import Image7 from "../Images/Womens/w3.jpeg";
import Image8 from "../Images/kids/k10.jpg";
import Image9 from "../Images/Womens/w2.webp";
import Image10 from "../Images/Womens/w12.jpeg";
import image11 from "../Images/Men/m5.jpeg";
import image12 from "../Images/Womens/w14.jpg";
import image13 from "../Images/Men/m10.jpeg";
import image14 from "../Images/Womens/w6.jpg";


export function Slider() {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel  carousel-dark slide  d-none d-sm-block  	d-sm-none d-md-block 	d-md-none d-lg-block   "
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <h2>Featured Products</h2>
          <div className="carousel-item active">
            <div className="cards-wrapper">
              <div className="card">
                <img
                  className="image"
                  src={Image0}
                  alt="..."
                  style={{ height: 290 }}
                />
                <div className="card-body">
                  <h5 className="card-title">Black Coat</h5>
                  <span style={{ fontWeight: "bolder", marginLeft: 60 }}>$45</span>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="cart.html" type="button" className="cart-button">
                    <i className="fa-solid fa-cart-shopping" /> Add To Cart
                  </a>
                </div>
              </div>
              <div className="card">
                <img
                  className="image"
                  src={Image1}
                  alt="..."
                  style={{ height: 290 }}
                />
                <div className="card-body">
                  <h5 className="card-title">White sweater</h5>
                  <span style={{ fontWeight: "bolder", marginLeft: 60 }}>$45</span>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="cart.html" type="button" className="cart-button">
                    <i className="fa-solid fa-cart-shopping" /> Add To Cart
                  </a>
                </div>
              </div>
              <div className="card">
                <img
                  className="image"
                  src={Image2}
                  alt="..."
                  style={{ height: 290 }}
                />
                <div className="card-body">
                  <h5 className="card-title">Punjabi Dress</h5>
                  <span style={{ fontWeight: "bolder", marginLeft: 60 }}>$15</span>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="cart.html" type="button" className="cart-button">
                    <i className="fa-solid fa-cart-shopping" /> Add To Cart
                  </a>
                </div>
              </div>
              <div className="card">
                <img
                  className="image"
                  src={image3}
                  alt="..."
                  style={{ height: 290 }}
                />
                <div className="card-body">
                  <h5 className="card-title">Suit</h5>
                  <span style={{ fontWeight: "bolder", marginLeft: 60 }}>$20</span>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="cart.html" type="button" className="cart-button">
                    <i className="fa-solid fa-cart-shopping" /> Add To Cart
                  </a>
                </div>
              </div>
              <div className="card ">
                <img
                  className="image"
                  src={image4}
                  alt="..."
                  style={{ height: 290 }}
                />
                <div className="card-body">
                  <h5 className="card-title">White Formal</h5>
                  <span style={{ fontWeight: "bolder", marginLeft: 60 }}>$35</span>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="cart.html" type="button" className="cart-button">
                    <i className="fa-solid fa-cart-shopping" /> Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <h1>Featured Products</h1> */}
          <div className="carousel-item">
            <div className="cards-wrapper">
              <div className="card">
                <img
                  className="image"
                  src={Image5}
                  alt="..."
                  style={{ height: 290 }}
                />
                <div className="card-body">
                  <h5 className="card-title">Grey  Top</h5>
                  <span style={{ fontWeight: "bolder", marginLeft: 60 }}>$10</span>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="cart.html" type="button" className="cart-button">
                    <i className="fa-solid fa-cart-shopping" /> Add To Cart
                  </a>
                </div>
              </div>
              <div className="card">
                <img
                  className="image"
                  src={Image6}
                  alt="..."
                  style={{ height: 290 }}
                />
                <div className="card-body">
                  <h5 className="card-title">Ethnic Wear</h5>
                  <span style={{ fontWeight: "bolder", marginLeft: 60 }}>$50</span>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="cart.html" type="button" className="cart-button">
                    <i className="fa-solid fa-cart-shopping" /> Add To Cart
                  </a>
                </div>
              </div>
              <div className="card ">
                <img
                  className="image"
                  src={Image7}
                  style={{ height: 290 }}
                />
                <div className="card-body">
                  <h5 className="card-title">Sherwani</h5>
                  <span style={{ fontWeight: "bolder", marginLeft: 60 }}>$65</span>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="cart.html" type="button" className="cart-button">
                    <i className="fa-solid fa-cart-shopping" /> Add To Cart
                  </a>
                </div>
              </div>
              <div className="card">
                <img
                  className="image"
                  src={Image8}
                  alt="..."
                  style={{ height: 290 }}
                />
                <div className="card-body">
                  <h5 className="card-title">Kids black coat</h5>
                  <span style={{ fontWeight: "bolder", marginLeft: 60 }}>$35</span>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="cart.html" type="button" className="cart-button">
                    <i className="fa-solid fa-cart-shopping" /> Add To Cart
                  </a>
                </div>
              </div>
              <div className="card">
                <img
                  className="image"
                  src={Image9}
                  alt="..."
                  style={{ height: 290 }}
                />
                <div className="card-body">
                  <h5 className="card-title">Stylish Dress</h5>
                  <span style={{ fontWeight: "bolder", marginLeft: 60 }}>$35</span>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="cart.html" type="button" className="cart-button">
                    <i className="fa-solid fa-cart-shopping" /> Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="cards-wrapper">
              <div className="card">
                <img
                  className="image"
                  src={Image10}
                  alt="..."
                  style={{ height: 290 }}
                />
                <div className="card-body">
                  <h5 className="card-title">Yellow JumpSuit</h5>
                  <span style={{ fontWeight: "bolder", marginLeft: 60 }}>$50</span>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="cart.html" type="button" className="cart-button">
                    <i className="fa-solid fa-cart-shopping" /> Add To Cart
                  </a>
                </div>
              </div>
              <div className="card">
                <img
                  className="image"
                  src={image11}
                  alt="..."
                  style={{ height: 290 }}
                />
                <div className="card-body">
                  <h5 className="card-title">long Coat</h5>
                  <span style={{ fontWeight: "bolder", marginLeft: 60 }}>$30</span>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="cart.html" type="button" className="cart-button">
                    <i className="fa-solid fa-cart-shopping" /> Add To Cart
                  </a>
                </div>
              </div>
              <div className="card">
                <img
                  className="image"
                  src={image12}
                  alt="..."
                  style={{ height: 290 }}
                />
                <div className="card-body">
                  <h5 className="card-title">Pink Frock</h5>
                  <span style={{ fontWeight: "bolder", marginLeft: 60 }}>$10</span>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="cart.html" type="button" className="cart-button">
                    <i className="fa-solid fa-cart-shopping" /> Add To Cart
                  </a>
                </div>
              </div>
              <div className="card">
                <img
                  className="image"
                  src={image13}
                  alt="..."
                  style={{ height: 290 }}
                />
                <div className="card-body">
                  <h5 className="card-title">T-shirt</h5>
                  <span style={{ fontWeight: "bolder", marginLeft: 90 }}>$30</span>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="cart.html" type="button" className="cart-button">
                    <i className="fa-solid fa-cart-shopping" /> Add To Cart
                  </a>
                </div>
              </div>
              <div className="card">
                <img
                  className="image"
                  src={image14}
                  alt="..."
                  style={{ height: 290 }}
                />
                <div className="card-body">
                  <h5 className="card-title">Blue Frock</h5>
                  <span style={{ fontWeight: "bolder", marginLeft: 90 }}>$30</span>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="cart.html" type="button" className="cart-button">
                    <i className="fa-solid fa-cart-shopping" /> Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* carousel card for xsmaller screen */}
      <div
        id="carouselExampleControlxsmall"
        className="carousel slide  	d-block d-sm-none"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <h1 style={{ textAlign: "center" }}>Featured Products</h1>
          <div className="carousel-item active">
            <div className="card">
              <img
                className="image"
                src={image11}
                alt="..."
                style={{ height: 290 }}
              />
              <div className="card-body">
                <h5 className="card-title">Black Coat</h5>
                <span style={{ fontWeight: "bolder", marginLeft: 40}}>$45</span>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <a
                  href="cart.html"
                  type="button"
                  className="cart-button"
                  style={{ fontWeight: "bolder"}}
                >
                  <i className="fa-solid fa-cart-shopping" /> Add To Cart
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <img
                className="image"
                src={image3}
                alt="..."
                style={{ height: 290 }}
              />
              <div className="card-body">
                <h5 className="card-title">Top</h5>
                <span style={{ fontWeight: "bolder", marginLeft: 40}}>$45</span>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <a
                  href="cart.html"
                  type="button"
                  className="cart-button"
                  style={{ fontWeight: "bolder"}}
                >
                  <i className="fa-solid fa-cart-shopping" /> Add To Cart
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <img
                className="image"
                src={image4}
                alt="..."
                style={{ height: 290 }}
              />
              <div className="card-body">
                <h5 className="card-title">Punjabi Dress</h5>
                <span style={{ fontWeight: "bolder", marginLeft: 40}}>$45</span>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <a
                  href="cart.html"
                  type="button"
                  className="cart-button"
                  style={{ fontWeight: "bolder"}}
                >
                  <i className="fa-solid fa-cart-shopping" /> Add To Cart
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlxsmall"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlxsmall"
          a=""
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* carousel for smaller screen */}
      <div
        id="carouselExampleControlsmall"
        className="carousel slide d-none d-sm-block d-md-none "
        data-bs-ride="carousel"
      >
        <h2>Featured Products</h2>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card">
              <img
                className="image"
                src={Image8}
                alt="..."
                style={{ height: 290 }}
              />
              <div className="card-body">
                <h5 className="card-title">Black Coat</h5>
                <span style={{ fontWeight: "bolder", marginLeft:  50 }}>$45</span>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <a
                  href="cart.html"
                  type="button"
                  className="cart-button"
                  style={{ fontWeight: "bolder"}}
                >
                  <i className="fa-solid fa-cart-shopping" /> Add To Cart
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <img
                className="image"
                src={Image10}
                alt="..."
                style={{ height: 290 }}
              />
              <div className="card-body">
                <h5 className="card-title">JumpSuit</h5>
                <span style={{ fontWeight: "bolder", marginLeft:  50 }}>$45</span>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <a
                  href="cart.html"
                  type="button"
                  className="cart-button"
                  style={{ fontWeight: "bolder"}}
                >
                  <i className="fa-solid fa-cart-shopping" /> Add To Cart
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card ">
              <img
                className="image"
                src={image13}
                alt="..."
                style={{ height: 290 }}
              />
              <div className="card-body">
                <h5 className="card-title">White T-shirt</h5>
                <span style={{ fontWeight: "bolder", marginLeft:  50 }}>$45</span>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <a
                  href="cart.html"
                  type="button"
                  className="cart-button"
                  style={{ fontWeight: "bolder"}}
                >
                  <i className="fa-solid fa-cart-shopping" /> Add To Cart
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsmall"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsmall"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* carousel card for medium screen  */}
      <div
        id="carouselExampleControlmedium"
        className="carousel slide  	d-none d-md-block d-lg-none"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <h2>Featured Products</h2>
          <div className="carousel-item active">
            <div className="cards-wrapper">
              <div className="card">
                <img
                  className="image"
                  src={Image9}
                  alt="..."
                  style={{ height: 290 }}
                />
                <div className="card-body">
                  <h5 className="card-title">Cut Top</h5>
                  <span style={{ fontWeight: "bolder", marginLeft: 60 }}>$10</span>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="cart.html" type="button" className="cart-button">
                    <i className="fa-solid fa-cart-shopping" /> Add To Cart
                  </a>
                </div>
              </div>
              <div className="card">
                <img
                  className="image"
                  src={image14}
                  alt="..."
                  style={{ height: 290 }}
                />
                <div className="card-body">
                  <h5 className="card-title">Coat with Tie</h5>
                  <span style={{ fontWeight: "bolder", marginLeft: 60 }}>$50</span>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="cart.html" type="button" className="cart-button">
                    <i className="fa-solid fa-cart-shopping" /> Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="cards-wrapper">
              <div className="card">
                <img
                  className="image"
                  src={Image0}
                  alt="..."
                  style={{ height: 290 }}
                />
                <div className="card-body">
                  <h5 className="card-title">Blue Frock</h5>
                  <span style={{ fontWeight: "bolder", marginLeft: 60 }}>$50</span>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="cart.html" type="button" className="cart-button">
                    <i className="fa-solid fa-cart-shopping" /> Add To Cart
                  </a>
                </div>
              </div>
              <div className="card">
                <img
                  className="image"
                  src={Image10}
                  alt="..."
                  style={{ height: 290 }}
                />
                <div className="card-body">
                  <h5 className="card-title">JumpSuit</h5>
                  <span style={{ fontWeight: "bolder", marginLeft: 60 }}>$30</span>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="cart.html" type="button" className="cart-button">
                    <i className="fa-solid fa-cart-shopping" /> Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="cards-wrapper">
              <div className="card">
                <img
                  className="image"
                  src={Image9}
                  alt="..."
                  style={{ height: 290 }}
                />
                <div className="card-body">
                  <h5 className="card-title">Black Coat</h5>
                  <span style={{ fontWeight: "bolder", marginLeft: 60 }}>$45</span>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="cart.html" type="button" className="cart-button">
                    <i className="fa-solid fa-cart-shopping" /> Add To Cart
                  </a>
                </div>
              </div>
              <div className="card">
                <img
                  className="image"
                  src={Image2}
                  alt="..."
                  style={{ height: 290 }}
                />
                <div className="card-body">
                  <h5 className="card-title"> long coat</h5>
                  <span style={{ fontWeight: "bolder", marginLeft: 60 }}>$15</span>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <a href="cart.html" type="button" className="cart-button">
                    <i className="fa-solid fa-cart-shopping" /> Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlmedium"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlmedium"
          data-bs-slide="next"

        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
            style={{ color: "rgb(202, 228, 33)" }}
          />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>

  );
}