import logo from '../../images/logo-udemy.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Logo() {
	return (
		<img className='mt-3' src={logo} alt='Udemy' width='91' height='34'></img>
	);
}
export default Logo;
