import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const Bootstrap = () => {
  return (
    <div>

    <Card style={{ width: '18rem', margin:'50px'}}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </div>
  );
}

export default Bootstrap;
