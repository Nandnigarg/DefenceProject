import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Form() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        var name = document.querySelector('#name').value;
        var num = document.querySelector('#number').value;
        var mail = document.querySelector('#mail').value;
        var msg = document.querySelector('#message').value;

        if(name === '' || num === '' || mail === '' || msg === ''){
            window.alert('Please enter all the details carefully!')
        }

        else{
            emailjs.sendForm('service_pa5g7tp', 'template_zuy64pe', form.current, 'SMWY2N68zRuPkdjMx')
            .then((result) => {
                var element = document.getElementById("feed_form");
                element.reset();
                console.log(result.text);
            }, (error) => {
                var element = document.getElementById("feed_form");
                element.reset();
                console.log(error.text);
            });
        }
    };
    return (
        <div className="container">
            <div style={{ maxWidth: "700px", textAlign: "center" }} className="container-fluid mt-4">
                <form ref={form} onSubmit={sendEmail} id="feed_form">
                    <h2 class="text text-danger">Get Call Back From DCG Academic Counsellor</h2>
                    <div class="form-floating mb-2">
                        <input type="text" class="form-control" id="name" placeholder="text" name="name" />
                        <label for="name">Enter Student Name</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input type="number" class="form-control" id="number" placeholder="number" name="number" />
                        <label for="number">Enter Mobile/WhatsApp Number</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input type="text" class="form-control" id="mail" placeholder="text" name="mail" />
                        <label for="mail">Enter Course Name</label>
                    </div>
                    <div class="form-floating mb-2">
                        <textarea class="form-control h-25" id="message" placeholder="text" rows="4" name="message" />
                        <label for="message">Enter Your Message</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input type="text" class="form-control" id="source" name="source" value="ENQUIRY FORM" placeholder="ENQUIRY FORM" />
                    </div>
                    <button class="btn btn-dark mt-2 mb-5">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Form;