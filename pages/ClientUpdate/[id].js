import EditClientForm from 'components/EditClientForm/EditClientForm';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import AuthService from 'services/auth.service';

const ClientUpdate = () => {
	const [title, setTitle] = useState('');
	const [clientData, setClientData] = useState([]);
	const [token, setToken] = useState("");

	const router = useRouter();
	const { id } = router.query;
	const Auth = new AuthService();

	useEffect(() => {
		const token = localStorage.getItem('token');
		console.log(token);

		const profil = Auth.getUserProfil(token);
		console.log(profil);

		const user = JSON.parse(localStorage.getItem('user'));
	}, [id]);

	return (
		<div>
			<br />
			{<h1> {title} </h1>}
			<br />
			<br />
			<EditClientForm id={id} token={token} />
		</div>
	)
}
export default ClientUpdate;