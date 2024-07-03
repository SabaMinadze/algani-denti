'use client'

import styles from './Contact.module.css'

export default function Contact() {
    async function handleSubmit(event:any) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "0a7ea1f1-c4ed-4a57-a347-0b282390d96c");


        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            alert("Form was sent succeafully")
        }
    }


    return (
        <>
            <div className={styles.box}>
              <form onSubmit={handleSubmit}>
                <label htmlFor="name" className={styles.txt}>სახელი: </label>
                <br />
                <input type="text" name="name" id="name" placeholder="Name" required className={styles.name} />
                <br /><br />
                <label htmlFor="email" className={styles.txt}>ელ-ფოსტა: </label>
                <br />
                <input type="email" name="email" id="email" placeholder="E-mail" required className={styles.email} />
                <br /><br />
                <label htmlFor="message" className={styles.txt}>წერილი: </label>
                <br />
                <input type="text" name="message" id="message" placeholder="Enter Your Message" required className={styles.info} />
                <br /><br />
                <input type="submit" value="მოგვწერეთ" className={styles.submit} />
              </form>
            </div>
      </>
      );
    }    