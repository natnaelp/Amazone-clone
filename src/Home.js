import React from "react";
import "./Home.css";
import Product from "./Product";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel Carousel className="carousel home__image">
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src="https://m.media-amazon.com/images/I/61Qy3bz0VnL._SX3000_.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src="https://m.media-amazon.com/images/I/616+IbYGVGL._SX3000_.jpg"
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 "
              src="https://m.media-amazon.com/images/I/71SFwcLgeOL._SX3000_.jpg"
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 "
              src="https://m.media-amazon.com/images/I/715-D1eYjLL._SX3000_.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src="https://m.media-amazon.com/images/I/71JpaVQRyFL._SX3000_.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>

        <div>
          <Container fluid className="Wrapper">
            <Row className="home__row j">
              <Col sm="12" md="6" lg="6">
                <Product
                  id="12321341"
                  title={
                    "Bwine GPS 75 Mins Foldable 4K Drone with Camera for Adults Beginners，3-Aix Gimbal，9800ft | 5GHz | FPV | Video Transmission Hover Hold Quadcopter Imported Brushless Motor L6 Wind Resistance"
                  }
                  price="529.99"
                  rating={5}
                  image="https://m.media-amazon.com/images/I/81nKAR2wqAL._AC_SL1500_.jpg"
                />
              </Col>
              <Col sm="12" md="6" lg="6">
                <Product
                  id="49538094"
                  title="adidas unisex-adult FIFA World Cup Qatar 2022 Al Rihla Club Soccer Ball"
                  price={39.99}
                  rating={4}
                  image="https://m.media-amazon.com/images/I/61BjiXtBXkL._AC_SL1000_.jpg"
                />
              </Col>
            </Row>

            <Row className="home__row ">
              <Col sm="12" md="6" lg="4">
                <Product
                  id="4903850"
                  title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                  price={199.99}
                  rating={3}
                  image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />
              </Col>
              <Col sm="12" md="6" lg="4">
                <Product
                  id="23445930"
                  title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                  price={98.99}
                  rating={5}
                  image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
              </Col>
              <Col sm="12" md="6" lg="4">
                <Product
                  id="3254354345"
                  title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                  price={598.99}
                  rating={4}
                  image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                />
              </Col>
            </Row>

            <Row className="home__row">
              <Col sm="12">
                <Product
                  id="90829332"
                  title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                  price={1094.98}
                  rating={4}
                  image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                />
              </Col>
            </Row>

            <Row className="home__row">
              <Col sm="12" md="6" lg="3">
                <Product
                  id="90824673"
                  title="ULTIMATE EARS WONDERBOOM 3, Small Portable Wireless Bluetooth Speaker, Big Bass 360-Degree Sound for Outdoors, Waterproof, Dustproof IP67, Floatable, 131 ft Range - Performance Blue"
                  price={95.0}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/81AQVyQx3TL._AC_SL1500_.jpg"
                />
              </Col>
              <Col sm="12" md="6" lg="3">
                <Product
                  id="90857893"
                  title="NELEUS Women's Lightweight Running Shorts Workout Athletic Short for Yoga with Pocket"
                  price={37.86}
                  rating={4}
                  image="https://m.media-amazon.com/images/I/7129xeuyLLL._AC_UY550_.jpg"
                />
              </Col>
              <Col sm="12" md="6" lg="3">
                <Product
                  id="89755634"
                  title="2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 2TB) - Silver"
                  price={1748.0}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/71i33xbZxLL._AC_SL1500_.jpg"
                />
              </Col>
              <Col sm="12" md="6" lg="3">
                <Product
                  id="78776541"
                  title="Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 256 GB"
                  price={494.0}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/71ku9xsMRTL._SL1500_.jpg"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Home;
