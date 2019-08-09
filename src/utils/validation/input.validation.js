

export const isNotEmpty = fieldValue => {
    
	return fieldValue.length
};

export const isNotLength = (fieldName, fieldValue) => {
	let result;

	switch (fieldName) {
		case "firstname":
			result = isMinMaxLength(fieldValue, 3, 20);
			break;

		// case "password":
		// 	result = isMinMaxLength(fieldValue, 8, 32);
		// 	break;

		default:
			result = true;
	}

	return result;
};

/**
 * @description Vérifie la longueur du champ
 * @param {string} fieldName Nom du champ
 * @param {string} fieldValue Valeur du champ
 */
const isMinMaxLength = (fieldValue, min, max) => {
	let errLength = {
        length: fieldValue.length < min ? 'min' : 'max',
        min:  fieldValue.length < min && min,
        max:  fieldValue.length > max && max
    }

    return ((fieldValue.length > 0 && fieldValue.length < min) || fieldValue.length > max) ? errLength : true;
}; 

/**
 * @description - Vérifie si le mail est valide
 * @param {string} fieldValue
 */
export const isEmail = fieldValue => {

	const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	const isValid = regex.test(fieldValue);

	return !isValid;
};

/**
 * @description Vérifie que le champ contient uniquement des lettres
 * @param {string} fieldName nom du champ
 * @param {string} fieldValue valeur du champ
 */
export const isOnlyLetters = fieldValue => {

    const regex = /^[a-z]+$/i;
    
    const isValid = regex.test(fieldValue);

	return !isValid;
};

/**
 * @description Vérifier le mot de passe
 */

 const isNotSpecialCharacter = fieldValue => {

    //regex
     const regexSpecCharacters = /(?=.*[$@!%])/;

     // test
     const isSpecCharacters = regexSpecCharacters.test(fieldValue);

     return isSpecCharacters

 };


 /**
  * @description - Vérifier si au moins une lettre majuscule est présente 
  **/
 const isNotUpperCase = fieldValue => {

    //regex
    const regexUpperCase = /(?=.*[A-Z])/;

    //test
    const isUpperCase = regexUpperCase.test(fieldValue);

    return isUpperCase;

 };

 /**
  * @description - Vérifier si au moins 2 chiffres consécutifs
  */
 const isNotNumber = fieldValue => {

    //regex
    const regexNumeric = /(?:(?=.*[0-9])(?=.*\d{2}).*)/;

    const isNumber = regexNumeric.test(fieldValue);

    return isNumber;
 };

 export const isNotPassword = fieldValue => {
    let errors = {};
    const specialsCharacter = "password must contain one of the characters $, @, !, %, ?";
	const upperCase = "password must contain a upper case";
	const number = "password must contain 2 numbers";

    const hasNumber = isNotNumber(fieldValue);
    const hasUpperCase = isNotUpperCase(fieldValue);
    const hasSpecCharacters = isNotSpecialCharacter(fieldValue);

    errors.number = !hasNumber && number;
    errors.upperCase = !hasUpperCase && upperCase;
    errors.specialsCharacter = !hasSpecCharacters && specialsCharacter;

    return errors;

 };

 



