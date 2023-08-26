import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

function Main(): JSX.Element {
	return (
		<>
			<Navbar />
			<Outlet />
			<footer>Здесь будет футер</footer>
		</>
	);
}

export default Main;
