import { Button, List, TextInput, Textarea } from "flowbite-react";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9tquksl', 'template_bxahtka', form.current, 'Bqus6nrbbkHB6ajwG')
            .then((result) => {
                console.log(result);
                Swal.fire({
                    title: "Email Sent?",
                    icon: "success"
                });
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    title: "Something went wrong",
                    icon: "error"
                });
            });
    };

    return (
        <div>
            <div className="max-w-md m-auto">
                <Heading title={"Reach me out"}></Heading>
                <List>
                    <List.Item>Email address: tawhidalmuhaimin@gmail.com</List.Item>
                    <List.Item>WhatsApp: +880 1797057948</List.Item>
                    <List.Item>LinkedIn:<Link to="https://www.linkedin.com/in/tawhid-choudhury-0360072a4/"> <span className="text-blue-600 underline">LinkedIn Profile</span> </Link></List.Item>
                </List>


            </div>
            <div className="max-w-md m-auto">
                <form ref={form} onSubmit={sendEmail}>

                    <Heading subtitle={"Send a message from here"} />
                    <Textarea name="message" />
                    <Button className="w-full mt-5 bg-[#1caee8]" type="submit">Send</Button>
                </form>
            </div>
        </div>
    );
};

export default Contact;