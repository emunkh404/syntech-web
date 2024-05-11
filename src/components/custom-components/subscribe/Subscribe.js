import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function Subscribe() {
  return (
    <Navbar className="nav-top" variant="dark" style={{ justifyContent: "center" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ color: "white", fontSize: "2rem", marginRight: "1rem" }}>Subscribe! Stay Informed</p>
        <InputGroup className="mb-3">
          <Form.Control
            type="email"
            placeholder="Enter your email"
            aria-label="Enter your email"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Subscribe
          </Button>
        </InputGroup>
      </div>
    </Navbar>
  );
}
