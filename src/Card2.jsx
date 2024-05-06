import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import paffaImage from './assets/paffa.png'; // Adjust path accordingly

function Card2() {
  return (
    <Card style={{ width: '20rem', minHeight: '28rem', margin: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden' }}>
      {/* Card Image */}
      <Card.Img
        variant="top"
        src={paffaImage}
        alt="Paffa Logo"
        style={{ width: '50%', height: 'auto', marginBottom: '10px' }}
      />

      {/* Card Body */}
      <Card.Body style={{ textAlign: 'center', padding: '15px' }}>
        <Card.Title>Paffa Card</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
      </Card.Body>

      {/* List Group */}
      <ListGroup className="list-group-flush" style={{ textAlign: 'center' }}>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>

      {/* Footer Links */}
      <Card.Body style={{ textAlign: 'center', padding: '15px', marginTop: 'auto', backgroundColor: '#f0f0f0' }}>
        <Card.Link href="#" style={{ marginRight: '10px' }}>Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Card2;
