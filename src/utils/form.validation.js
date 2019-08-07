let errs;

const isEmpty = (fieldName, fieldValue) => {
    errs = `Your ${fieldName} is required.`;

    return   !fieldValue.length  
            ? { status:false, msg:errs }
            : isLength( fieldName, fieldValue)      
};




const isLength = (fieldName, fieldValue) => {
    
    let result;

    switch(fieldName){

        case "firstname" : 
            result = isMinMaxLength(fieldName, fieldValue, 3, 20);
        break;

        case "password":
            result = isMinMaxLength(fieldName, fieldValue, 8, 32);
        break;

        default: result = true;
    };

    return result.length 
          ? { status:false, msg: errs }
          : fieldName === 'email' 
          ? isEmail(fieldName, fieldValue)
          : isOnlyLetters(fieldName, fieldValue)
};

/**
 * @description Vérifie la longueur du champ
 * @param {string} fieldName Nom du champ
 * @param {string} fieldValue Valeur du champ
 */
const isMinMaxLength = (fieldName, fieldValue, min, max) => {

    errs = fieldValue.length < min
    ? `Your ${fieldName} needs to be at least ${min} characters.`
    : `Your ${fieldName} entered must contain a maximum of ${max} characters`;

    return (fieldValue.length < min || fieldValue.length > max) && errs
            
          

};




/**
 * @description - Vérifie si le mail est valide
 * @param {string} fieldValue 
 */
const isEmail = fieldValue =>{

    errs = `${fieldValue} is not a valid email. Please enter a valid email.`;

    const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    const isValid = regex.test(fieldValue);
   
    return !isValid ? {status: false, msg: errs } : {status: true, msg:""}

};

/**
 * @description Vérifie que le champ contient uniquement des lettres
 * @param {string} fieldName nom du champ
 * @param {string} fieldValue valeur du champ
 */
const isOnlyLetters = (fieldName, fieldValue) => {

    const errs = `Only letters is required for ${fieldName}`;
    const regex = /^[a-z]+$/i;
    const isValid = regex.test(fieldValue);
    return !isValid ? {status: false, msg: errs} : {status: true, msg:""};
};

const fieldVerify = (...rest) => isEmpty(...rest);

export default fieldVerify;