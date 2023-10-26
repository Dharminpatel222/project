import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchproduct = createAsyncThunk("product/fetchdata", () => {
  return axios.get(`http://localhost:9999/product/getAll`).then((resdata) => {
    // console.log("resdata",resdata)
    return resdata?.data;
  });
});

export const creatproduct = createAsyncThunk("product/creatproduct", (data) => {
  // console.log("------>data:", data)
  return axios
    .post(`http://localhost:9999/product/create`, data, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Barer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
    .then((resdata) => {
      // console.log("resdata", resdata.data);
      return resdata?.data;
    });
});
export const editproduct = createAsyncThunk(
  "product/editproduct",
  ({ data, index }) => {
    console.log("🚀 ~ file: ProductSlice.jsx:13 ~ data:", data)
    return axios
      .put(`http://localhost:9999/product/update/${data._id}`, data)
      .then((resdata) => {
        console.log("resdata", resdata.data);

        return { ...resdata?.data?.data, index };
      });
  }
);

export const deletproduct = createAsyncThunk(
  "product/deleteproduct",
  ({ id, index }) => {
    return axios
      .delete(`http://localhost:9999/product/delete/${id}`)
      .then((resp) => {
        return index;
      });
  }
);

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    Productlist: [],
    error: "",
  },
  reducers: {},
  extraReducers: {
    [fetchproduct.fulfilled]: (state, action) => {
      state.Productlist = action.payload.data;
    },
    [creatproduct.fulfilled]: (state, action) => {
      // console.log("🚀 ~ file: ProductSlice.jsx:43 ~ action:", action)
      state.Productlist.unshift(action.payload.data);
      // console.log('payload',action.payload);
    },
    [editproduct.fulfilled]: (state, { payload }) => {
      console.log("🚀 ~ file: ProductSlice.jsx:65 ~ payload:", payload);
      state.Productlist.splice(payload?.index, 1, payload);
    },
    [deletproduct.fulfilled]: (state, action) => {
      state.Productlist = state.Productlist.filter(
        (e, i) => i !== action.payload
      );
    },
  },
});
export default ProductSlice.reducer;
