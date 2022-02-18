import React from 'react';

function Input(props) {
	const { labelText, placeholder, style, ...others } = props;
	return (
		<div>
			<div className='form-group'>
				<label htmlFor='simpleInput'>{labelText}</label>
				<input
					type='text'
					className='form-control mt-3'
					id='simpleInput'
					placeholder={placeholder}
				/>
			</div>
		</div>
	);
}

export default Input;
