import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './Cards.css'; // Make sure to include this

export default function Cards() {
  return (
    <div className="card-container">
      {/* Repeat your Card component as needed */}
      <Card>
        <Card.Img variant="top" src="/syntechicon.jpg" />
        <Card.Body>
          <Card.Title>CRM</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="info">View</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/syntechicon.jpg" />
        <Card.Body>
          <Card.Title>CRM</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="info">View</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/syntechicon.jpg" />
        <Card.Body>
          <Card.Title>CRM</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="info">View</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/syntechicon.jpg" />
        <Card.Body>
          <Card.Title>CRM</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="info">View</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/syntechicon.jpg" />
        <Card.Body>
          <Card.Title>CRM</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="info">View</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/syntechicon.jpg" />
        <Card.Body>
          <Card.Title>CRM</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="info">View</Button>
        </Card.Footer>
      </Card>
      {/* Include other cards similarly */}
    </div>
  );
}
