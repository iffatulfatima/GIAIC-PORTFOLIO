import Header from "@/app/components/header"
import Footer from "@/app/components/footer" 
import Image from "next/image"

export default function Home() {
  return (
    <main>
       <Header/>
       <div className="contact">
        <div className="contact-form-container">
            <form>
                <h2>Contact Us</h2>

                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" placeholder="Your Message" required></textarea>

                <button type="submit">Submit</button>
            </form>
</div>
 

      </div>
    
        
      
      <Footer/>
         </main>
  );
};
        