
import useImput from "./use-Input";
const useContacts=()=>{

const [message,setMessage,messageValidation]=useImput(
    (content)=>{
        let message = [];
        if (content === "") {
            return "El mensaje es obligatiorio.";
          }
          if (!content[19]) {
            message.push("minimo 20 digitos.");
          }
          if (
            /[^0-9a-zA-ZáéíóúüñÁÉÍÓÚÜÑãõÃÕâêôÂÊÔàèìòùÀÈÌÒÙçÇ.,() '"°/-]/u.test(content)
          ) {
            message.push(
              `Letras y (-.,()'"°/) simbolos`
            );
          }
          if (/\s{2,}/.test(content)) {
            message.push("No ingrese espacios inesesarios.");
          }
          return message.length ? message : "";
    }

);

const [name,setName,nameValidation]=useImput(
  (content)=>{  let message = [];
    if (content === "") {
        message.push("El nombre es obligatorio.");
      } else {
        if (content.length < 3 || content.length > 30) {
          message.push("El nombre debe tener entre 3 y 30 caracteres.");
        }
        if (!/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ ]+$/.test(content)) {
          message.push("Solo letras.");
        }
        if (/\s{2,}/.test(content)) {
          message.push("No ingrese espacios inesesarios.");
        }}
    return message.length ? message : "";}
);

const [email,setEmail,emailValidation]=useImput(
    (content)=>{ let message = [];
        if (content === "") {
            message.push("Email es obligatorio.");
          } else if (
            !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/.test(content)
          ) {
            message.push("Email invalido.");
          }
    return message.length ? message : "";}
);

const [phone,setPhone,phoneValidation]=useImput(
    (content)=>{    let message = [];
        if (content === "") {
            return ""
          } else if (!/^\+54\s?(11|15)\s?\d{8}$/.test(content)) {
            message.push(
              "Formato +54 11 or +54 15 +8 digitos."
            );
          }
    return message.length ? message : "";}
,'');
const reset =()=>{
    
        setEmail({ value: "", er: false }); 
        setMessage({ value: "", er: false }); 
        setName({ value: "", er: false }); 
        setPhone({ value: "", er: "" }); 
    
};

    return[phone,phoneValidation,name,nameValidation,message,messageValidation,email,emailValidation,reset];
}
export default useContacts;