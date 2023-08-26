import Credentials from './types/Credentials';
import RegisterData from './types/RegisterData';
import User from './types/User';

export async function user(): Promise<{
	id: number;
	email: string;
	role: string;
}> {
	const res = await fetch('/api/users/my/profile');
	if (res.status >= 400) {
		const { message }: { message: string } = await res.json();
		throw new Error(message);
	}
	return res.json();
}

export async function login(credentials: Credentials): Promise<User> {
	const res = await fetch('/api/login', {
		method: 'POST',
		body: `username=${credentials.email}&password=${credentials.password}`,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	});
	// реджектим промис если вернулся ошибочный статус
	if (res.status >= 400) {
		// достаем текст ошибки из ответа
		const { message }: { message: string } = await res.json();
		throw new Error(message);
	}
	return res.json();
}

export async function register(data: RegisterData): Promise<{ id: number; email: string }> {
	const res = await fetch('/api/register', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	interface Error {
		message: string;
		field: string;
		rejectedValue: string;
	}
	if (res.status >= 400) {
		const { errors }: { errors: Error[] } = await res.json();
		errors.forEach((err) => {
			throw new Error(`${err.field} ${err.rejectedValue} ${err.message}`);
		});
	}
	return res.json();
}

export async function logout(): Promise<void> {
	await fetch('/api/logout', {
		method: 'PUT',
	});
}
