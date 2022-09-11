import React from 'react';
import "./../../css/fifthPart.css";


   function ContactForm ( ) {
      return (
        <div>
            <form name='contact' method='POST' className='contact_form' data-netilify='true'>
                <label htmlFor="name">Nom: </label>
                <input type="text" name='name'/>

                <label htmlFor="email">Email: </label>
                <input type="text" name='email'/>

                <label htmlFor="message">Message: </label>
                <textarea name='message'/>
                
                <button type="submit">Send</button>
            </form>
       </div>
       )
       }
    export default ContactForm