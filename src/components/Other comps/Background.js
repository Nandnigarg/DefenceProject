import bg from '../assets/AfpiBG.jpg';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Background(props) {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        var name = document.querySelector('#name').value;
        var num = document.querySelector('#number').value;
        var mail = document.querySelector('#mail').value;
        var msg = document.querySelector('#message').value;
        var src = `${props.src}`

        if(name === '' || num === '' || mail === '' || msg === '' || src === ''){
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
        <div style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${bg})`, minHeight: "650px", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
            <div className="container p-5">
                <div className="row">
                    <div style={{ color: "white" }} className="col-md-6">
                        <h1><span style={{ color: "rgb(255,255,0)" }}>{props.text} </span><br/>{props.t2}</h1>
                        <br /><br /><br /><br /><br />
                        <h1><span style={{ color: "rgb(255,255,0)" }}>ONLINE & OFFLINE Coaching</span></h1>
                        <br />
                        <h4>+10k Selections in Defence Exams</h4>
                    </div>
                    <div style={{ textAlign: "center" }} className="col-md-6">
                        <form class="bg bg-warning p-4" ref={form} onSubmit={sendEmail} id="feed_form">
                            <h2 className="text text-success">Get "{props.text}"</h2>
                            <p>AFPI EXPERT: Get all your queries answered</p>
                            <div class="form-floating mb-2">
                                <input type="text" class="form-control" id="name" placeholder="text" name="name" />
                                <label for="name">Enter Student Name</label>
                            </div>
                            <div class="form-floating mb-2">
                                <input type="number" class="form-control" id="number" placeholder="number" name="number" />
                                <label for="number">Enter Mobile/WhatsApp Number</label>
                            </div>
                            <div class="form-floating mb-2">
                                <input type="email" class="form-control" id="mail" placeholder="text" name="mail" />
                                <label for="mail">Enter Email Id</label>
                            </div>
                            <div class="form-floating mb-2">
                                <textarea class="form-control h-25" id="message" placeholder="text" rows="4" name="message" />
                                <label for="message">Enter Your Message</label>
                            </div>
                            <div class="form-floating mb-2">
                                <input type="text" class="form-control" id="source" name="source" value={props.src} placeholder={props.src} />
                            </div>
                            <button class="btn btn-dark mt-2 mb-5">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Background;