import React from "react";
import { Linkedin, Facebook, X, Instagram } from "react-bootstrap-icons";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4>About Us</h4>
            <p>SynTech</p>
            <p>
              SynTech ERP Software Solutions is a CRM and ERP software provider
              based in Fullchurch, Virginia, with over 1000 users and growing.
              Our demonstrated expertise lies in deploying the full suite of
              integrated Odoo software options.
            </p>
          </div>
          <div className="col-md-3">
            <h4>Modules</h4>
            <ul>
              <li>Sales</li>
              <li>CRM</li>
              <li>Accounting</li>
              <li>Billing</li>
              <li>Warehouse</li>
              <li>Project Management</li>
              <li>Purchase</li>
              <li>MRP Cloud Software</li>
              <li>Point of Sale Shop</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Services</h4>
            <ul>
              <li>Odoo Consulting Services</li>
              <li>Odoo Implementation</li>
              <li>Odoo Support</li>
              <li>Business Management Software</li>
              <li>E-Commerce Solutions</li>
              <li>Website Design and Development</li>
              <li>Mobile Application Development</li>
              <li>Remodeling Software</li>
              <li>Warehouse Management System</li>
              <li>Wholesale Cabinet Software</li>
              <li>B2B Software Solution</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Contact Us</h4>
            <p>Address: 1000 main st, Suite A, Fullchurch, VA 20232</p>
            <p>Email: info@syntech.com</p>
            <p>Phone: (301) 276-7788</p>
          </div>
        </div>
      </div>
      <hr />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>
          Privacy Policy / {new Date().getFullYear()} SynTech LLC. All rights
          reserved
        </p>
        <div>
          <Linkedin style={{ margin: "10px", color: "#0e76a8" }} />
          <Facebook style={{ margin: "10px", color: "#3b5998" }} />
          <X style={{ margin: "10px", color: "white" }} />
          <Instagram style={{ margin: "10px", color: "#e4405f" }} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
