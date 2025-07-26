import Title from "./Title"
import emailjs from "@emailjs/browser"
import React, {useRef} from "react";

function Contact() {

    const form = useRef<HTMLFormElement>(null);
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if (form.current) {
            emailjs.sendForm(
                "service_5sus8dm", // Replace with your service ID
                "template_m9rthqr", // Replace with your template ID
                form.current,
                "-PE5ljTyw3rk7oQ4Y" // Replace with your user ID
            )
            .then((result) => {
                alert("Email sent successfully!");
                console.log("Email sent successfully:", result.text);
                form.current?.reset(); // Reset the form after successful submission
            }, (error) => {
                alert("Error sending email. Please try again later.");
                console.error("Error sending email:", error.text);
            });
        }
    };

    return (
    <div id="Contact" className="flex flex-col mt-30 p-10 rounded-xl">
      <Title title="Contact" />
        <div className="mt-20">
      <form ref={form} onSubmit={sendEmail} method="POST" className="flex flex-col space-y-4">
        <label className="text-gray-300">
            Nom:
            <input 
                type="text" 
                name="name" 
                className="input input-bordered w-full mt-2"
                required
            />
        </label>
        <label className="text-gray-300">
            Email:
            <input 
                type="email" 
                name="email" 
                className="input input-bordered w-full mt-2"
                required
            />
        </label>
        <label className="text-gray-300">
            Message:
            <textarea 

                name="message" 
                className="textarea textarea-bordered w-full mt-2"
                rows={5}
                required
            ></textarea>
        </label>
        <button type="submit" className="btn btn-primary mt-4">
            Envoyer
        </button>
        </form>
        </div>
    </div>
      )
}

export default Contact
