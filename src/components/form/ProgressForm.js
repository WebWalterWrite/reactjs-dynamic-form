import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from '../../utils/fontawesome';
import { Dashed, Icon, ProgressBar } from './form.styled';
const {user, envelope, profil, key} = icons;

const err = {
    boxShadow: 'inset -1px 0px 3px 2px red',
    border:'none',
    padding:'5px',
}
const success= {
    boxShadow: 'inset -1px 0px 3px 2px rgba(79,238,118,0.85)',
    border:'none',
    opacity:1,
    padding:'20px',
    transition: 'all 200ms ease',
}
const initialStyle = {
    border: 'solid 1px #F7DF1C',
    boxShadow: 'none',
    borderRadius: '50%',
    padding:'5px',
    opacity:".5",
    transition: 'opacity 500ms ease-in-out',
};

const ProgressForm = ({ data: {firstname, email, password} }) => {
    
    const [state, setState ] = useState({
        firstname:initialStyle,
        email:initialStyle,
        password:initialStyle
    });
  
   useEffect( ()=> setState( 
       prevState => ({...prevState, 
        firstname: firstname === true ? err : firstname === false ? success : initialStyle,
        email: email === true ? err : email === false ? success : initialStyle,
        password: password === true ? err : password === false ? success : initialStyle
        })),
         [email, firstname, password]  
   );
    

    return(
        <ProgressBar>
                <Icon style={state.firstname}>
                    <FontAwesomeIcon icon={user} size="3x"/>
                </Icon>
                <Dashed data={firstname && firstname}/>

                <Icon style={state.email}>
                    <FontAwesomeIcon icon={envelope} size="3x" />
                </Icon>
                <Dashed data={email && email}/>
                <Icon style={state.password}>
                    <FontAwesomeIcon icon={key} size="3x" />
                </Icon>
                <Dashed/>
                <Icon>
                    <FontAwesomeIcon icon={profil} size="3x" />
                </Icon>
        </ProgressBar>
    )
};

export default ProgressForm;
