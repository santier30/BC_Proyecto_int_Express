import { useState } from "react";
const useImput = (validation,err = false)=>{
const [a,setA] = useState({value:"",er :err})

    const validator = (value)=>{
        let message=validation(value);
        
        setA({value : value,er : message})

    }



        return[a,setA,validator];
    }
    export default useImput;