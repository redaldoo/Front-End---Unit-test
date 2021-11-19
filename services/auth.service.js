import jwtDecode from 'jwt-decode';

export default class AuthService {

	login(body) {
		return fetch(
			`https://us-central1-trybuy-d42d2.cloudfunctions.net/api/v1/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		}).then(res => {
			return res.json();
		})
	}

	SignUp(body) {
		return fetch(
			`https://us-central1-trybuy-d42d2.cloudfunctions.net/api/v1/users`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		}).then(res => {
			return res.json();
		})
	}

	getToken() {
		//return localStorage.getItem('token');
	}

	getAdmin() {
		return localStorage.getItem('admin');
	}

	getUserProfil(token) {
		return jwtDecode(token);
	}

	getUserDetail(id) {
		return fetch(`https://us-central1-trybuy-d42d2.cloudfunctions.net/api/v1/users/${id}`, {
			method: 'GET',
			headers: { 'x-access-token': this.getToken() }
		})
			.then(res => {
				return res.json();
			})
	}

	disconnectUser() {
		localStorage.clear();
	}

}