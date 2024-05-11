import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

export default function GetStartNow() {
  return (
    <div>
      <Navbar className="nav-top" variant="dark">
        <div style={{color: "white", fontSize: "2rem", margin: "0 0.5rem", padding:"0 5em"}}>
          <p>
            As an Odoo Partner, our knowledge, and best practices have helped
            industry leaders run their businesses smartly and efficiently.
            {" "}<Button variant="outline-info">CHECK OUR APPS</Button>
          </p>
          
        </div>
      </Navbar>
    </div>
  );
}
