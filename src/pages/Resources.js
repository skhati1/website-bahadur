import React from "react";

export default function Resources() {
    return (
        <main>
            <h2>Contact Us</h2>
            <h4>Email: chulu@khadka.com</h4>
            <h4>Phone: (123)-456-7890</h4>
            <form>
                <label>
                     First Name:
                    <input type="text" name="firstName" />
                </label>
                <label>
                     Last Name:
                    <input type="text" name="lasttName" />
                </label>
                <label>
                     Email:
                    <input type="text" name="email" />
                </label>
                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" placeholder="(123) 456-7890" 
                    pattern="\(\d{3}\) \d{3}-\d{4}" 
                    title="Please enter a phone number in the format: (123) 456-7890" 
                    required></input>
                <label>
                    Message:
                    <textarea name="message" ></textarea>
                </label>
                <button type="submit">Submit Message</button>
            </form>
        </main>
    )
}