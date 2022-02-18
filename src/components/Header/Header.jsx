import React from 'react';
import Button from '../../common/Button/Button';
import Logo from './components/Logo/Logo';
import './style.scss';

function Header(props) {
	return (
		<div className='wrapper'>
			<div>
				<p>
					<Logo />
				</p>
			</div>
			<ul className='mt-3'>
				<li style={{ marginRight: '50px' }}>
					<Button buttonText='Logout' style={{ alignSelf: 'flex-end' }} />
				</li>
				<li className='ml-4' style={{ marginRight: '20px' }}>
					Magesh
				</li>
			</ul>
		</div>
	);
}

export default Header;
