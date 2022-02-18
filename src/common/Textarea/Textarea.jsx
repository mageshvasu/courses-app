import React from 'react';

function Textarea(props) {
	const { labelText, placeholder, style, ...others } = props;
	return (
		<div>
			<div className='form-group'>
				<label htmlFor='simpleInput'>{labelText}</label>
				<textarea
					className='form-control'
					id='exampleFormControlTextarea1'
					rows='3'
					placeholder={placeholder}
				></textarea>
			</div>
		</div>
	);
}

export default Textarea;
