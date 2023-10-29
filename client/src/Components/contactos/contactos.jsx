import useContacts from "../../Hooks/use-contacts"
import useError from "../../Hooks/use-error";
import usePost from "../../Hooks/usePost";
const Contactos = ()=>{
const [phone,phoneValidation,name,nameValidation,message,messageValidation,email,emailValidation,reset]=useContacts()
const makeError = useError();
const post = usePost('Enviando mensaje','Mensaje enviado!','Error al enviar mensaje.')


  const submitHandler = (event) => {
    event.preventDefault();
    console.log('a')
    if (
      name.er==="" && email.er==="" && phone.er==="" && message.er===""
    ) {
      post({name:name.value,email:email.value,phone:phone.value,message:message.value},"/Vintus/Users/Message")
        reset()
        
    } 
  };
    return(
<main>
  
 
    <section className="contacts">
     
          
        <article className="contacts_body">
            <div className="contacts_form">
        <div className="contacts_info">
            <div className="contacts_title">
            <h2>CONTACTANOS</h2>

        </div>
        <a href="#sendMail"> Llamanos al : +54 11 1234-5678</a>
        </div>
        <div className="form">
            <form id="sendMail"  onSubmit={submitHandler} >

                <input type="text" id="name" name="name" placeholder="NOMBRE" required value={name.value} onChange={(event)=>{nameValidation(event.target.value)}}/>
                {name.er!=="" && name.er && <p id="name-error">{makeError(name.er)}</p>}

                <input type="email" id="email" name="email" placeholder="EMAIL" required value={email.value} onChange={(event)=>{emailValidation(event.target.value)}}/>
                {email.er!=="" && email.er && <p id="email-error">{makeError(email.er)}</p>}

                <input type="tel" id="phone-number" name="phone" placeholder="TELEFONO" value={phone.value} onChange={(event)=>{phoneValidation(event.target.value)}}/>
                {phone.er!=="" && phone.er &&  <p  id="phone-number-error">{makeError(phone.er)}</p>}

                <textarea id="message" name="message" rows="4" cols="50" required placeholder="MENSAJE" value={message.value} onChange={(event)=>{messageValidation(event.target.value)}}></textarea>
                {message.er!=="" && message.er &&  <p id="message-error">{makeError(message.er)}</p>}
                <div className="submit-Div">
                    <input id="reset" type="reset" value="CANCELAR" onClick={reset}/>
                    <input id="sub" type="submit" value="ENVIAR"/>
                  </div>
            </form>
            </div>
        </div>
        </article>

        <article className="mapouter">
          <h2 className="map_title">Visitanos en nuestro local</h2>
          <h3 className="map_sub">De 10 a 22hs Lunes a Sabado</h3>
          <iframe className="gmap_iframe" width="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=500&amp;height=500&amp;hl=en&amp;q=buenos aires obelisco&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </article>

    </section>
</main>
    )
}
export default Contactos