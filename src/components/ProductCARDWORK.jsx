import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({product}) {
    // const {id, title, price, desc, image} = data;
  return (
    <Card style={{ width: '18rem', height: "25rem", textAlign: "left" }}>
      <Card.Img variant="top" src={product?.image} style={{width: "100%", height: "200px"}} />
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text>{product?.desc}</Card.Text>
        <Card.Text>{product?.price}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;