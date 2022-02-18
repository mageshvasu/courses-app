import React from 'react';

function Button(props) {
	const { buttonText, onClick, style, ...others } = props;
	return (
		<button onClick={onClick} style={style} {...others}>
			{buttonText}
		</button>
	);
}

export default Button;
