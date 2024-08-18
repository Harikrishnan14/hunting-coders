import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'

const Contact = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [desc, setDesc] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = { name, email, phone, desc }
        fetch('http://localhost:3000/api/postcontact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Success:", data)
                alert("Thank you for contacting us!")
                setName("")
                setEmail("")
                setPhone("")
                setDesc("")
            })
            .catch((error) => console.log("Error:", error))
    }

    return (
        <div className={styles.container}>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.mb3}>
                    <label htmlFor="name" className={styles.formLabel}>Enter your name</label>
                    <input type="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="name" name="name" />
                </div>
                <div className={styles.mb3}>
                    <label htmlFor="email" className={styles.formLabel}>Enter your email address</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" name="email" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className={styles.mb3}>
                    <label htmlFor="phone" className={styles.formLabel}>Enter your phone number</label>
                    <input type="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="phone" name="phone" />
                </div>
                <div className={styles.mb3}>
                    <label htmlFor="desc" className={styles.formLabel}>Elaborate your concerns</label>
                    <textarea className="form-control" value={desc} name="desc" onChange={(e) => setDesc(e.target.value)} placeholder="Leave a review here" id="desc" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Contact
