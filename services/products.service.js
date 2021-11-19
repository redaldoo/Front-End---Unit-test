import jwtDecode from "jwt-decode";

export default class ProductService {
  getToken() {
    return localStorage.getItem("token");
  }

  getProductProfil() {
    return jwtDecode(this.getToken());
  }

  CreateProduct(body) {
    return fetch(
      `https://us-central1-trybuy-d42d2.cloudfunctions.net/api/v1/products`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "x-access-token": this.getToken(),
        },
        body: JSON.stringify(body),
      }
    ).then((res) => {
      console.log(res);
      return res.json();
    });
  }

  GetAllProduct(params = null) {
    let query = "";
    if (params != null) {
      let table = [];
      Object.keys(params).map((col) => {
        table.push(`${col}=${params[col]}`);
      });
      if (table.length > 0) {
        query = `?${table.join("&")}`;
      }
    }
    return fetch(
      `https://us-central1-trybuy-d42d2.cloudfunctions.net/api/v1/products${query}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "x-access-token": this.getToken(),
        },
      }
    ).then((res) => {
      return res.json();
    });
  }

  GetProductDetail(id) {
    return fetch(
      `https://us-central1-trybuy-d42d2.cloudfunctions.net/api/v1/products/${id}`,
      {
        method: "GET",
        headers: { "x-access-token": this.getToken() },
      }
    ).then((res) => {
      return res.json();
    });
  }

  UpdateProduct(id, body) {
    return fetch(
      `https://us-central1-trybuy-d42d2.cloudfunctions.net/api/v1/products/${id}`,
      {
        method: "PUT",
        headers: {
          "x-access-token": this.getToken(),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    ).then(function (res) {
      return res.json();
    });
  }

  DeleteProduct(id) {
    return fetch(
      `https://us-central1-trybuy-d42d2.cloudfunctions.net/api/v1/products/${id}`,
      {
        method: "DELETE",
        headers: { "x-access-token": this.getToken() },
      }
    ).then(function (res) {
      return res.json();
    });
  }
}
