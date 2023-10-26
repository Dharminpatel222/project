import React from 'react'

export default function Deshbord() {
  return (
    <div className="container" style={{ textAlign: "center", padding:"100px " }}>
      <div className="row py-4">
        <div className="col-md-4">
          <div className="card border-3">
            <div className="card-body">
              <h1>78</h1>
              <h3>Total Products</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-3">
            <div className="card-body">
              <h1>114</h1>
              <h3>Total Users</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-3">
            <div className="card-body">
              <h1>46</h1>
              <h3>Orders</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  
