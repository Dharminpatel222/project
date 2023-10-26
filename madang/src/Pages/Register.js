import axios from 'axios';
import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../Redux/CreateSlice';

export default function Register() {

   const [user,setuser] = useState({
    name:"",
    email:"",
    number:"",
    password:"",
    age:"",
   });

    // const dispatch = useDispatch();
  let navigate = useNavigate("");


   function setdata(e){

    e.preventDefault();
    
    axios.post(`http://localhost:9999/user/signUp`,user,{
      ...user,

    }).then((resp)=>{
      console.log(resp);
      // dispatch(login(resp.user))
      navigate("/")

    }).catch((err)=>{
      toast.error(err.message)
    })

    localStorage.setItem("user",JSON.stringify(user));
   }
 
  return (
    <>
      <Form style={{ marginTop: "100px", marginInline: "100px" }}>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Name
          </Form.Label>
          <Col sm="10">
            <Form.Control
              name="name"
              type="text"
              placeholder="Name"
              style={{ width: "500px" }}
              onChange={(e) => setuser({ ...user, name: e.target.value })}
              value={user.name}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="email"
              placeholder="Email"
              style={{ width: "500px" }}
              name="email"
              value={user.email}
              onChange={(e) => setuser({ ...user, email: e.target.value })}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Number
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="number"
              placeholder="Number"
              style={{ width: "500px" }}
              name="number"
              value={user.number}
              onChange={(e) => setuser({ ...user, number: e.target.value })}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              placeholder="password"
              style={{ width: "500px" }}
              name="password"
              value={user.password}
              onChange={(e) => setuser({ ...user, password: e.target.value })}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Age
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="number"
              placeholder="age"
              style={{ width: "500px" }}
              name="number"
              value={user.age}
              onChange={(e) => setuser({ ...user, age: e.target.value })}
            />
          </Col>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) =>setdata(e)}
        >
          Sign Up
        </Button>
      </Form>
    </>
  );
}
