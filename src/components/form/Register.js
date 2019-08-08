import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from './input.common';
import formValidation from '../../utils/validation/form.validation';
import ProgressForm from './ProgressForm';
// import styles & icons
import { Button, Error, FormContainer, InputContainer } from "./form.styled";
import icons from '../../utils/style/fontawesome';

const MapErrors = ({data}) => {
	
	const errors = data && data.filter(el => el);

	return errors ? errors.map( el => <div>{el}</div>) : false
}

export const Register = () => {

    // state
    const [state, setState ] = useState({
		left:0, 
		button:"Next",
		profil:false,
		valid:false,
	});

	const [progressBar, setProgressBar] = useState({
		firstname:"default value",
		mail:"default value",
		password: "default value"
	});
	const [errors, setErrors] = useState({
		msg:"",
	});

    // icons
    const { user, envelope, key } = icons;

	/**
	 * @description - Récupérer le nom du champ selon la position de l'input
	 */
	const targetField = () => {
		let field;
		switch(state.left){
			case 0 : field = 'firstname';
			break;
			case 500 : field = "email";
			break;
			case 1000 : field = "password";
			break;
			default: field = 'firstname';
		}
		return field;
	}


	/**
	 * 
	 * @param {object} currentField -
	 */
	const controlField = currentField => {

		const fieldName = targetField(); // récupérer le nom de l'input
		
		const fieldValue = currentField[fieldName].value; // récupérer la valeur de l'input
		
		const isErrors = formValidation(fieldName, fieldValue); // Validation des données du champ	
		
		console.log(isErrors);

		if(isErrors)
		return (
			setErrors({msg:isErrors}),
			setProgressBar(prevState => ({...prevState,[fieldName]:true}))
		)
		setErrors({msg:""});
		setProgressBar(prevState => ({...prevState,[fieldName]:false}));
		return true;
								
	}
    // next field form
    const nextField = e => {

		e.preventDefault();

		const isValid = controlField(e.target);
	
		if(isValid && state.left < 1000)
		
		setState( 
			{...state, 
			left:state.left+500,
			envelope: state.left < 1000 && true,
			key: state.envelope === true && true
		 });
	};


    // prev field form
	const previousField = () => {
		setTimeout( () => state.left > 0 && setState({
			...state,
			left: state.left -500,
		 }), (100)
		);
	};
    return (
			<FormContainer>
				<h1>Register</h1>

				{/* barre de progession  */}
				<ProgressForm data={progressBar}/>

				{/* formulaire */}
				<form onSubmit={nextField} noValidate>
					<InputContainer pos={state.left} error={errors.status}>
						<div>
							<FontAwesomeIcon icon={user} size="2x" />
							<Input value="firstname" />
						</div>

						<div>
							<FontAwesomeIcon icon={envelope} size="2x" />
							<Input value="email" />
						</div>

						<div>
							<FontAwesomeIcon icon={key} size="2x" />
							<Input value="key" />
						</div>
					</InputContainer>
					<Error error={errors.msg}>
						{(Array.isArray(errors.msg))
						? <MapErrors data={errors.msg}/> 
						: errors.msg }
					</Error>
					<Button visibility={state.left}>
						<button type="button" onClick={previousField}>Previous</button>
						<button>{state.button}</button>
					</Button>
				</form>
			</FormContainer>
		);
};

export default Register;