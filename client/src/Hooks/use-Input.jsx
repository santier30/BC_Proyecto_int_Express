import { useState } from "react";
const useImput = (validation)=>{
const [a,setA] = useState({value:"",er :false})

    const validator = (value)=>{
        let message=validation(value);
        
        setA({value : value,er : message})

    }



        return[a,setA,validator];
    }
    export default useImput;