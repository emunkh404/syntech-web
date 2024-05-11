import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Cards.css"; // Make sure to include this

export default function Cards() {
  return (
    <div className="card-container">
      {/* Repeat your Card component as needed */}
      <Card>
        <Card.Img variant="top" src="/syntechicon.jpg" />
        <Card.Body>
          <Card.Title>eCommerce</Card.Title>
          <Card.Text>
            A smart interface that any retail company can use without
            difficulty.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="info">View</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/syntechicon.jpg" />
        <Card.Body>
          <Card.Title>Sales</Card.Title>
          <Card.Text>
            Send clear and complete quotations to your prospects. Add product
            descriptions, beautiful images, and …
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
            An intuitive user interface designed for sales. A Dashboard for a
            better overview of the sales activities
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="info">View</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/syntechicon.jpg" />
        <Card.Body>
          <Card.Title>Accounting</Card.Title>
          <Card.Text>
            Invoices are easy to create, beautiful and full featured. (payment
            terms, multiple taxes, disc…
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="info">View</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/syntechicon.jpg" />
        <Card.Body>
          <Card.Title>Project</Card.Title>
          <Card.Text>
            A fast user interface designed for modern project management. Get
            all the information you need …
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="info">View</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/syntechicon.jpg" />
        <Card.Body>
          <Card.Title>Inventory</Card.Title>
          <Card.Text>
            The unique Odoo double entry inventory management allows full
            traceability from the supplier to the …
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
