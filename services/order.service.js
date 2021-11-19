import jwtDecode from 'jwt-decode';

export default class ProductService {

	getToken() {
		return localStorage.getItem('token');
	}

	getProductProfil() {
		return jwtDecode(this.getToken());
	}

	CreateOrder(body) {
		return fetch(
			`https://us-central1-trybuy-d42d2.cloudfunctions.net/api/v1/orders`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
				'x-access-token': this.getToken()
			},
			body: JSON.stringify(body)
		}).then(res => {
			console.log(res);
			return res.json();
		})
	}

	GetAllOrder() {
		return fetch(
			`https://us-central1-trybuy-d42d2.cloudfunctions.net/api/v1/orders`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
				'x-access-token': this.getToken()
			}
		}).then(res => {
			return res.json();
		})
	}

	GetOrderDetail(id) {
		return fetch(`https://us-central1-trybuy-d42d2.cloudfunctions.net/api/v1/orders/${id}`, {
			method: 'GET',
			headers: { 'x-access-token': this.getToken() }
		})
			.then(res => {
				return res.json();
			})
	}


	UpdateOrder(id, body) {
		return fetch(`https://us-central1-trybuy-d42d2.cloudfunctions.net/api/v1/orders/${id}`, {
			method: "PUT",
			headers: { "x-access-token": this.getToken(), "Content-Type": "application/json" },
			body: JSON.stringify(body),
		}).then(function (res) {
			return res.json();
		});
	}

	DeleteOrder(id) {
		return fetch(`https://us-central1-trybuy-d42d2.cloudfunctions.net/api/v1/orders/${id}`, {
			method: "DELETE",
			headers: { "x-access-token": this.getToken() }
		}).then(function (res) {
			return res.json();
		});
	}
}