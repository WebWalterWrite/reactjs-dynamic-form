import React from 'react';
import useInput from '../../utils/useInput';

const Input = ({value}) =>{
    const data = () => {
        switch (value){
        case'firstname':
            return ["","text","What's your name ?", "firstname"];
        case 'email':
            return ["","email","...and your mail adress ?", "email"];
        case 'key':
            return ["","password", "create your password", "password"]
        default: ;
    }
}
    return(
        <input {...useInput(...data())} />
    )
};

export default Input;

// export const Firstname = () => <input {...useInput("","text", "votre prénom", "firstname")} />

// export const Email = () => <input {...useInput("","mail", "votre email", "email")}/>;

// export const Password = () => <input {...useInput("", "password", "votre mot de passe", "password")}/>