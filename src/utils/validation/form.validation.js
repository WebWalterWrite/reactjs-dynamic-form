import {
	isNotEmpty,
	isNotLength,
	isOnlyLetters,
    isNotPassword,
    isEmail
} from "./input.validation";




const formValidation =  (fieldName, fieldValue) => {

    // clean fieldValue space
    const value = fieldValue.trim().replace(/ {1,}/g, " ");
    
    // error message
    let errEmpty = `Your ${fieldName} is required.`;
	let errMinLength = min => `Your ${fieldName} needs to be at least ${min} characters.`;
	let errMaxLength = max => `Your ${fieldName} entered must contain a maximum of ${max} characters`;;
    let errOnlyLetters = `${fieldName} field must contain only letters`;
    let errEmail = `${fieldValue} is not a valid email. Please enter a valid email.`;

    
  

    const empty = !isNotEmpty(value);
    const notLength = isNotLength(fieldName, value);
    const notLetters = isOnlyLetters(value);
    const notEmail = isEmail(value);
    const notPassword = isNotPassword(value)
    

    if(empty)
    return errEmpty;
    if (fieldName === "firstname" && notLetters) 
    return errOnlyLetters;
    if(notLength.min) 
    return errMinLength(notLength.min);
    if(notLength.max)
    return errMaxLength(notLength.max);

    if(fieldName === 'email' && notEmail)
    return errEmail;
    if(fieldName === 'password' && notPassword){

    const arrOfErr = Object.values(notPassword).filter(el => el !== false);

    return arrOfErr.length === 0 ? false : arrOfErr;
    }
};

export default formValidation;


