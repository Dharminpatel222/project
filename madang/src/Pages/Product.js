import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deletproduct, fetchproduct } from "../Redux/ProductSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const { error, Productlist } = useSelector((state) => state.ProductSlice);

  // console.log("Product",error, Productlist);

  if (error.length > 0) {
    toast.error(error);
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchproduct());
  }, []);

  function deletehandler(data, index) {
    dispatch(deletproduct({ id: data._id, index }));
    console.log(index);
  }

  // const navigate = useNavigate()

  return (
    <div className="container">
      <button
        style={{ marginTop: "100px" }}
        type="button"
        class="btn btn-warning w-100"
        onClick={() => navigate("/productform")}
      >
        Add Product
      </button>

      <Table
        striped
        bordered
        hover
        dsty
        style={{ marginTop: "20px", borderColor: "black" }}
      >
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Gender</th>
            <th>Category</th>
            <th>Color</th>
            <th>Size</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Productlist.map((e, i) => {
            return (
              <tr>
                <td scope="row">{i + 1}</td>
                <td>
                  <img style={{ maxHeight: "50px" }} src={e?.thumbnail} />
                </td>
                <td>{e?.title}</td>
                <td style={{ maxWidth: "20vw" }} className="text-truncate w-25">
                  {e.description}
                </td>
                <td>{e?.price}</td>
                <td>{e.brand}</td>
                <td>{e.gender}</td>
                <td>{e.category}</td>
                <td>{e.color}</td>
                <td>{e.size}</td>
                <td>
                  <button
                    style={{ marginRight: "10px" }}
                    type="button"
                    class="btn btn-primary"
                    onClick={() =>
                      navigate(`/productform`, { state: { ...e, index: i } })
                    }
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => deletehandler(e, i)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
