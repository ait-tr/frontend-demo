import { useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectLoginFormError } from './selectors';
import { getUser, login, resetLoginFormError } from './authSlice';

function Login(): JSX.Element {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const error = useAppSelector(selectLoginFormError);
	const [email, setName] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = useCallback(
		async (event: React.FormEvent) => {
			event.preventDefault();
			// делаем диспатч санка
			const dispatchResult = await dispatch(
				login({
					email,
					password,
				})
			);
			// проверяем, что санк login зарезолвился успешно
			if (login.fulfilled.match(dispatchResult)) {
				dispatch(getUser()); // подгрузит юзера
				navigate('/'); // переведет на стартовую страницу
			}

			// выводим в консоль ошибку если санк login зареджектился
			if (login.rejected.match(dispatchResult)) {
				// eslint-disable-next-line no-console
				console.error(dispatchResult.error.message);
			}
		},
		[dispatch, email, navigate, password]
	);

	const handleNameChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setName(event.target.value);
			// 332 очищаем ошибку
			dispatch(resetLoginFormError());
		},
		[dispatch]
	);

	const handlePasswordChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setPassword(event.target.value);
			// 332 очищаем ошибку
			dispatch(resetLoginFormError());
		},
		[dispatch]
	);

	return (
		<form className="auth-form" onSubmit={handleSubmit}>
			<h2>Вход</h2>
			{error && (
				<div className="invalid-feedback mb-3" style={{ display: 'block' }}>
					{error}
				</div>
			)}
			<div className="mb-3">
				<label htmlFor="name-input" className="form-label">
					Имя
				</label>
				<input
					type="text"
					className={`form-control ${error ? 'is-invalid' : ''}`}
					id="name-input"
					name="username"
					value={email}
					onChange={handleNameChange}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="password-input" className="form-label">
					Пароль
				</label>
				<input
					type="password"
					className={`form-control ${error ? 'is-invalid' : ''}`}
					id="password-input"
					name="password"
					value={password}
					onChange={handlePasswordChange}
				/>
			</div>
			<button type="submit" className="btn btn-primary">
				Войти
			</button>
		</form>
	);
}

export default Login;
