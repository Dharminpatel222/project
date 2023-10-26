import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Redux/CreateSlice";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {

  let [userdata,setuserdata] = useState({
    email:"admin@admin.com",
    password:"123456",
  })

  let navigate = useNavigate('')

  let dispatch = useDispatch();

  function Loginhandler(e){
    e.preventDefault();
    axios.post("http://localhost:9999/user/signin",userdata)
    .then((resp)=>{
      console.log("resp",resp);
      dispatch(login(resp.data));
      toast.success("login Succesfully");

      if(resp.data.data.userType === 'admin') {
        navigate("/");
      }else{
        navigate("/login")
      }
    })
    .catch((err)=>{
      console.log(err);
      toast.error(err.messsage);
    });
  
  }
  return (
    <Form style={{ marginTop: "100px", marginInline: "100px" }}>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="email"
            placeholder="Email"
            style={{ width: "500px" }}
            value={userdata?.email}
            onChange={(e) =>
              setuserdata({ ...userdata, email: e?.target?.value })
            }
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
            placeholder="Password"
            style={{ width: "500px" }}
            value={userdata.password}
            onChange={(e) =>
              setuserdata({ ...userdata, password: e.target.value })
            }
          />
        </Col>
      </Form.Group>
      <div>
        <Button onClick={(e) => Loginhandler(e)} variant="primary" type="submit">
          Login
        </Button>{" "}
        New User?{" "}
        <Link to={"/register"} style={{ cursor: "pointer" }}>
          {" "}
          Register
        </Link>
      </div>
    </Form>
  );
}

export default Login;
