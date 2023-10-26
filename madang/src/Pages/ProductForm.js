import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  Row,
} from "reactstrap";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { creatproduct, editproduct } from "../Redux/ProductSlice";
import { useLocation, useNavigate } from "react-router-dom";

function ProductForm() {
  const [data, getsetdata] = useState({
    title: "",
    price: "",
    description: "",
    brand: "",
    state: "",
    color: [],
    size: [],
    category: [],
    gender: "male",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const state = useLocation();
  console.log("🚀 ~ file: ProductForm.js:36 ~ ProductForm ~ state:", state)

  function adddata() {
    dispatch(creatproduct(data));
    navigate("/product");
  }
  function UpdateProduct() {
    dispatch(editproduct({ data, index: state?.state?.index }));
     navigate("/product");
  }

  useEffect(() => {
    getsetdata(state.state);
  }, [state]);

  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);
  const options1 = [
    { value: "red", label: "Red" },
    { value: "black", label: "Black" },
    { value: "white", label: "White" },
  ];
  const options2 = [
    { value: "44", label: "44" },
    { value: "45", label: "45" },
    { value: "42", label: "42" },
    { value: "43", label: "43" },
  ];
  const options3 = [
    { value: "breakfast", label: "breakfast" },
    { value: "dinner", label: "dinner" },
  ];

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">Title</Label>
                  <Input
                    id="exampleEmail"
                    name="title"
                    // placeholder="with a placeholder"
                    type="text"
                    onChange={(e) =>
                      getsetdata({ ...data, title: e.target.value })
                    }
                    value={data?.title}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="examplePassword">Price</Label>
                  <Input
                    id="examplePassword"
                    name="price"
                    // placeholder="password placeholder"
                    type="number"
                    onChange={(e) =>
                      getsetdata({ ...data, price: e.target.value })
                    }
                    value={data?.price}
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="exampleAddress">Description</Label>
              <Input
                id="exampleAddress"
                name="description"
                // placeholder="1234 Main St"
                type="text"
                onChange={(e) =>
                  getsetdata({ ...data, description: e.target.value })
                }
                value={data?.description}
              />
            </FormGroup>
            <Row></Row>
            <FormGroup>
              <Label for="exampleAddress">Color</Label>
              <Select
                options={options1}
                isMulti
                name="color"
                // onChange={(e) => getselectdata(e)}
                onChange={(e) =>
                  getsetdata({ ...data, color: e?.map((e) => e?.value) })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleAddress">Size</Label>
              <Select
                options={options2}
                isMulti
                name="size"
                onChange={(e) =>
                  getsetdata({ ...data, size: e?.map((e) => e?.value) })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleAddress">Category</Label>
              <Select
                options={options3}
                isMulti
                name="category"
                onChange={(e) =>
                  getsetdata({ ...data, category: e?.map((e) => e?.value) })
                }
              />
            </FormGroup>
            <FormGroup tag="fieldset">
              <Label for="exampleAddress">gender</Label>
              <FormGroup check>
                <Input
                  name="radio1"
                  type="radio"
                  checked={data?.gender === "male"}
                  onChange={() => getsetdata({ ...data, gender: "male" })}
                  id="male"
                />
                <Label check>Male</Label>
              </FormGroup>
              <FormGroup check>
                <Input
                  name="radio1"
                  type="radio"
                  checked={data?.gender === "female"}
                  onChange={() => getsetdata({ ...data, gender: "female" })}
                  id="female"
                />
                <Label check>FeMale</Label>
              </FormGroup>
            </FormGroup>
            {state.state ? (
              <Button onClick={() => UpdateProduct()}>Update Product</Button>
            ) : (
              <Button onClick={() => adddata()}>Add Product</Button>
            )}
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ProductForm;
