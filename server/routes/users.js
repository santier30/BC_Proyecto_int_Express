const express = require('express')
const nodemailer = require('nodemailer');
const controlers = require('../controlers/usersControlers')
const router = express.Router();

const {validateMessage} = controlers



router.post('/Message',validateMessage, async (req , res)=>{
    const {name,email,phone,message} = req.body
    console.log(req.body)

    try {
     
        const transporter = nodemailer.createTransport({
            service: 'Gmail', 
            auth: {
                user: 'VintusTm@gmail.com',
                pass: 'orao eoqs ooji qibw',
            },
        });

        // Set up email data
        const corpMail = {
            from: 'VintusTm@gmail.com',
            to: 'VintusTm@gmail.com',
            subject: `mensaje de ${name}`,
            text: `
                Email: ${email}
                Phone: ${phone}
                Message: ${message}
            `,
        };

        const clientMail = {
            from: 'VintusTm@gmail.com',
            to: email,
            subject: `Vintus servicio al cliente`,
            text: `
        Hola ${name} gracias por comunicarte con Vintus atencion al cliente
        su mensaje esta siendo prosesado y sera respuesto a la brevedad

        VintusTm
            `,
        }

        // Send the email
        await transporter.sendMail(corpMail);
        await transporter.sendMail(clientMail);

        res.status(200).json({ message: "Data posted successfully", name });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Fail sending message", error: error.message });
    }

})





module.exports = router;