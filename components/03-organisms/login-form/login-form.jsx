'use client';

// IMPORTS
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { setCookie } from 'cookies-next';
import InputField from 'components/01-atoms/input-field/input-field';
import Button from 'components/01-atoms/button/button';
import Text from 'components/01-atoms/text/text';
import Image from 'next/image';

// COMPONENT
const Component = () => {

	// SETUP STATE
	const [input, setInput] = useState('');
	const [status, setStatus] = useState({
		type: null,
		message: '',
	});

	// BRING IN ROUTER
	const router = useRouter();

	// BRING IN REACT-HOOK-FORM
	const { register, trigger, formState, getValues, resetField } = useForm();

	// HANDLE KEY-PRESS
	const handleKeyPress = (event) => { return setInput(input + event.key); };

	// VALIDATE INPUT
	const validateInput = async () => {

		// TRY-CATCH BLOCK
		try {

			// CHECK FORM FIELDS
			const formIsValid = await trigger(['username', 'password']);
			if (formIsValid === false) {
				throw new Error('input-fields are not valid');
			};

			// GET FORM VALUES
			const formValues = getValues();

			// SEND REQUEST
			const response = await fetch(`${ process.env.NEXT_PUBLIC_UI_URI }/api/auth/login`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					identifier: formValues.username,
					password: formValues.password,
				}),
			});
			const { data } = await response.json();

			// GET TOKEN FROM RESPONSE
			const { jwt: token } = data;

			// CHECK IF REQUEST WAS NOT SUCCESSFULL
			if (!token || response.status !== 200) {
				throw new Error('login was not successfull');
			};

			// STORE COOKIE
			setCookie('session-token', token, { sameSite: 'lax' });

			// RESET STATUS MESSAGE
			setStatus({
				type: null,
				message: '',
			});

			// NAVIGATE TO START PAGE
			setTimeout(() => {
				router.push('/');
			}, 1000);

		// HANDLE ERRORS
		} catch (error) {

			// RESET PASSWORD
			resetField('password');

			// SEND ERROR MESSAGE
			setStatus({
				type: 'error',
				message: 'The Username or the password is not correct',
			});

		};

	};

	// EVENT HANDLERS
	const handleLogin = () => {
		validateInput();
	};

	// LISTEN ON KEYDOWN
	useEffect(() => {
		document.addEventListener('keydown', handleKeyPress);
		return () => { return document.removeEventListener('keydown', handleKeyPress); };
	}, [input]);

	// RENDER
	return (
		<div className="login-form">
			<div className="login-form__container container">
				<div className="container__action action">
					<Image className="action__logo" src="/logos/full.svg" width="320" height="80" alt="Samira Haas" />
					<form className="action__form form" onSubmit={ handleLogin }>
						<InputField className="form__input-field" id="username" label="" placeholder="E-Mail Address" type="text" icon="user" register={ register } error={ formState.errors.username } validation={ { 	required: { value: true } } } />
						<InputField className="form__input-field" id="password" label="" placeholder="Password" type="password" icon="key" register={ register } error={ formState.errors.password } validation={ { 	required: { value: true } } } />
						<Button className="form__button" onClick={ handleLogin }>Login</Button>
					</form>
					{ status.type === 'error' && (
					<div className={ `login-form__status status ${ status.type ? 'status--error' : null }` }>
						<Text className="status__text text--small">{ status.message }</Text>
					</div>
					)}
				</div>
				<Image className="container__image" src="/images/general/general-01.webp" width="300" height="300" alt="Samira Haas" />
			</div>
		</div>
	);

};

// EXPORTS
export default Component;
