import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { toast } from "react-toastify";

export default function User() {

const[userdata,setuserdata] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:9999/user/getAll`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Barer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((resp) => {
        setuserdata(resp.data.data)
        console.log(resp);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, []);

  return (
    <>
      <h1 style={{ paddingTop: "100px" }}></h1>

      <Table
        striped
        bordered
        hover
        dsty
        style={{ marginBottom: "50px", borderColor: "black" }}
      >
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Password</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {userdata.map((e, i) => {
            return (
              <tr>
                <td scope="row">{i + 1}</td>
                <td>{e?.name}</td>
                <td>{e?.email}</td>
                <td>{e.number}</td>
                <td className="text-truncate w-25">{e.password} </td>
                <td>{e.age}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
