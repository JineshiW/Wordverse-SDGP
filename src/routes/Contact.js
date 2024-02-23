import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import AboutImg from "../assets/contact.png";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";

function Contact (){
    return(
        <>
        <Navbar />
        <Hero
            cName = "hero-mid"
            heroImg ={AboutImg}
            title = "Contact"


            btnClass = "hide"
        />
        <ContactForm />
        <Footer />
        </>
    )
}

export default Contact;