import User from './User';

export default interface AuthState {
	authChecked: boolean;
	user?: User;
	loginFormError?: string;
	registerFormError?: string;
}
