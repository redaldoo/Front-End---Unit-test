import jwtDecode from "jwt-decode";

export default class ClientSercice {

	/*getToken() {
		//	return "eee";
		//return localStorage.getItem('token');
	}

	getClientProfil(token) {
		return jwtDecode(token);
	}*/

	getToken() {
		//return localStorage.getItem('token');
	}

	getClientProfil(token) {
		return jwtDecode(token);
	}

	CreateClient(body) {
		return fetch(
			`https://us-central1-trybuy-d42d2.cloudfunctions.net/api/v1/users`, {
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

	ReadAllClient() {
		return fetch(
			`https://us-central1-trybuy-d42d2.cloudfunctions.net/api/v1/users`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
				'x-access-token': this.getToken()
			}
		}).then(res => {
			console.log(res);
			return res.json();
		})
	}

	GetClientDetail(id) {
		return fetch(
			`https://us-central1-trybuy-d42d2.cloudfunctions.net/api/v1/users/${id}`, {
			method: 'GET',
			headers: { 'x-access-token': this.getToken() }
		})
			.then(res => {
				return res.json();
			})
	}

	UpdateClient(id, body) {
		return fetch(
			`https://us-central1-trybuy-d42d2.cloudfunctions.net/api/v1/users/${id}`, {
			method: 'PUT',
			headers: { "x-access-token": this.getToken(), "Content-Type": "application/json" },
			body: JSON.stringify(body),
		}).then(function (res) {
			return res.json();
		})
	}

	DeleteClient(id) {
		return fetch(
			`https://us-central1-trybuy-d42d2.cloudfunctions.net/api/v1/users/${id}`, {
			method: "DELETE",
			headers: { "x-access-token": this.getToken() }
		}).then(function (res) {
			return res.json();
		});
	}

	UpdatePasswordClient(id, body) {
		return fetch(
			`https://us-central1-trybuy-d42d2.cloudfunctions.net/api/v1/users/${id}`, {
			method: "PATCH",
			headers: { "x-access-token": this.getToken(), "Content-Type": "application/json" },
			body: JSON.stringify(body),
		}).then(function (res) {
			console.log(res);
			return res.json();
		});
	}
}