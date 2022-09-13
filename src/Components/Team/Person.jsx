import React from "react";
import { Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Person = (props) => {
  const navigate = useNavigate();
  return (
    
    <Col md={4} sm={6} xs={12} className="d-flex  flex-column my-5 box"
    
    >
      <Link to={`${props.link}`}>
      <img src={props.img} width={props.width} className="img-fluid"></img>
      <p className="teamheading">{props.name}</p>
      <p className="text-white teamdesc">{props.desc}</p>
      <br />
      <p className="text-white">{/* {props.details} */}</p>
      </Link>
    </Col>
    
    
  );
};

export default Person;
