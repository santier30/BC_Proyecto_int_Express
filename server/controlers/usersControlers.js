
const validateMessage = (req , res , next) => {
    try {
        const {name,email,phone,message} = req.body
        if(message === "" || !message[19] || /[^0-9a-zA-ZáéíóúüñÁÉÍÓÚÜÑãõÃÕâêôÂÊÔàèìòùÀÈÌÒÙçÇ.,() '"°/-]/u.test(message) || /\s{2,}/.test(message)){throw new Error("menssage invalido")}
        if(name === "" || name.length < 3 || name.length > 30 || !/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ ]+$/.test(name) || /\s{2,}/.test(name)){throw new Error("nombre invalido")}
        if(phone !== "" ) {if(!/^\+54\s?(11|15)\s?\d{8}$/.test(phone)){throw new Error("telefono invalido")}}
        if(email === "" || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/.test(email)){throw new Error("email invalido")}
        next()
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Fail sending message", err });
    }
    }

module.exports ={
    validateMessage
}