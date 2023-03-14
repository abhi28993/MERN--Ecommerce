import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CategoryCardComponent = ({ category, idx }) => {
  const images = [
    "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51ZTjQRvWlS._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
    "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51ZTjQRvWlS._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
    "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51ZTjQRvWlS._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
    "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51ZTjQRvWlS._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
    "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51ZTjQRvWlS._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
    "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51ZTjQRvWlS._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
    "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51ZTjQRvWlS._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
  ];
  return (
    <Card>
      <Card.Img
        variant="top"
        crossOrigin="https://i.pinimg.com/"
        src={images[idx]}
      />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <LinkContainer to="/product-list">
          <Button variant="primary">Go somewhere</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default CategoryCardComponent;
