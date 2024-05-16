import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Cards.css"; // Make sure to include this

export default function Cards() {
  return (
    <div className="card-container">
      {/* Repeat your Card component as needed */}
      <Card>
        <Card.Img variant="top" src="/ecommerce.png" />
        <Card.Body>
          <Card.Title>eCommerce</Card.Title>
          <Card.Text>
            A user-friendly interface suitable for retail businesses of any
            size.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="info">View</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/sales.png" />
        <Card.Body>
          <Card.Title>Sales</Card.Title>
          <Card.Text>
            Efficiently send detailed and attractive quotations to potential
            customers, including product descriptions and images.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="info">View</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/crm.png" />
        <Card.Body>
          <Card.Title>CRM</Card.Title>
          <Card.Text>
            Intuitive interface tailored for sales teams, offering a
            comprehensive dashboard for better insight into sales activities.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="info">View</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/accounting.png" />
        <Card.Body>
          <Card.Title>Accounting</Card.Title>
          <Card.Text>
            Easily generate professional invoices with advanced features like
            payment terms, multiple taxes, and discounts.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="info">View</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/project.png" />
        <Card.Body>
          <Card.Title>Project</Card.Title>
          <Card.Text>
            Streamlined interface for contemporary project management, providing
            all necessary information at your fingertips.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="info">View</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/inventory.png" />
        <Card.Body>
          <Card.Title>Inventory</Card.Title>
          <Card.Text>
            Odoo's double-entry inventory management ensures complete
            traceability from supplier to customer.
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
