import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import loksewa from "../../assets/loksewa.mp4";
import "./Hero.css";

const Hero = () => {
  return (
    <Container className="hero-container">
      <Row>
        <Col sm={6}>
          <Container>
            <div className="hero-info">
              <h3>नेपालको पहिलो अनलाइन</h3>
              <h2>
                <strong>लोकसेवा संजिबिनी</strong>
              </h2>
              <p>
                लोकसेवाको लागि पुर्र्ण तयारि हुने गरि बनाइएको नेपालको पहिलो
                अनलाइन वेव्साइट्मा यहाहरुलाई स्वागत छ । यस साइटमा सम्पुर्ण
                विवरण, विषयगत तयारिका साथसाथै महत्त्वपूर्ण कुराहरु नि पढाइनेछ।
                यस वेवसाइटको सम्पुर्ण जानकारी लिन र आफुलाई लोकसेवाको परिक्षामा
                उत्तिर्ण हुनको निम्ति तलको बटन थिचेर हामीसंग जोडिन सक्नुहुन्छ।{" "}
              </p>
            </div>

            <button class="login-btn">जोडिनुहोस</button>
          </Container>
        </Col>
        <Col sm={6}>
          <Container className="center-make">
            <video width="auto" height="300" autoPlay loop>
              <source src={loksewa} type="video/mp4"></source>
              Your browser does not support the video tag.
            </video>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
