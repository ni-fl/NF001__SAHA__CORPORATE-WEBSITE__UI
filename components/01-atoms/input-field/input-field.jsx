'use client';

// IMPORTS
import { User, Key } from 'react-feather';
import { useEffect, useState } from 'react';

// COMPONENT
const InputField = ({ className = '', id = '', placeholder = '', type = 'text', icon = null, register = null, validation = null, error = null, defaultValue = null }) => {

	// SETUP STATE
	const [isClient, setIsClient] = useState(false);

	// CHECK FOR CLIENT
	useEffect(() => {
		setIsClient(true);
	}, []);

	// RENDER
	return (
		<div className={ `${ className } input-field ${ error && error[id] ? 'input-field--error' : null }` }>
			<div className="input-field__label label">
				{ icon === 'user' && <User className="label__icon" /> }
				{ icon === 'key' && <Key className="label__icon" /> }
			</div>
			{ isClient && <input className="input-field__input text text--small" id={ id } type={ type } placeholder={ placeholder } { ...register(id, validation) } defaultValue={ defaultValue } /> }
		</div>
	);

};

// EXPORT
export default InputField;
