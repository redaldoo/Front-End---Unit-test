import jwtDecode from 'jwt-decode';

export default class CategorieService {

	getToken() {
		return localStorage.getItem('token');
	}

	getCatgeorieProfil() {
		return jwtDecode(this.getToken());
	}

	CreateCategorie(body) {
		return fetch(
			`https://us-central1-trybuy-d42d2.cloudfunctions.net/api/v1/category`, {
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

	GetAllCategories() {
		return fetch(
			`https://us-central1-trybuy-d42d2.cloudfunctions.net/api/v1/category`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
				'x-access-token': this.getToken()
			}
		}).then(res => {
			return res.json();
		})
	}

	GetCategorieDetail(id) {
		return fetch(`https://us-central1-trybuy-d42d2.cloudfunctions.net/api/v1/category/${id}`, {
			method: 'GET',
			headers: { 'x-access-token': this.getToken() }
		})
			.then(res => {
				return res.json();
			})
	}


	UpdateCategorie(id, body) {
		return fetch(`https://us-central1-trybuy-d42d2.cloudfunctions.net/api/v1/category/${id}`, {
			method: "PUT",
			headers: { "x-access-token": this.getToken(), "Content-Type": "application/json" },
			body: JSON.stringify(body),
		}).then(function (res) {
			return res.json();
		});
	}

	DeleteCategorie(id) {
		return fetch(`https://us-central1-trybuy-d42d2.cloudfunctions.net/api/v1/category/${id}`, {
			method: "DELETE",
			headers: { "x-access-token": this.getToken() }
		}).then(function (res) {
			return res.json();
		});
	}
}