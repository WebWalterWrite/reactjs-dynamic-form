import { useState } from 'react';


const useInput = (initialValue,type, placeholder, name) =>{

    const [value, setValue] = useState(initialValue);
    
    return{
        onChange: e => setValue(e.target.value),
        type,
        name,
        placeholder,
        value,
    }
};

export default useInput;