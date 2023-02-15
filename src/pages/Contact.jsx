import React from 'react'

const Contact = () => {
    return (
        <div className='section container'>
            <div className="grid grid-two-col">
                <div className="contact">
                    <h2>Let's have a 🍵Coffee</h2>
                    <div className='frm'>
                        <input type="text" placeholder="Name" required />
                        <input type="email" placeholder="email" required />
                        <textarea id="w3review" name="message" placeholder="message" rows="4" cols="50" />

                        <a href="/error" className="btn">Submit</a>
                    </div>
                </div>
                <div className="Gimg">
                    <img src="./images/Contact.gif" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact
