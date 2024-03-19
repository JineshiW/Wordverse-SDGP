// Importing necessary components and assets
import Hero from "../Components/Hero"; // Importing the Hero component from "../Components/Hero.js"
import Navbar from "../Components/Navbar"; // Importing the Navbar component from "../Components/Navbar.js"
import AboutImg from "../assets/contact.png"; // Importing the image asset for the Contact page
import Footer from "../Components/Footer"; // Importing the Footer component from "../Components/Footer.js"
import ContactForm from "../Components/ContactForm"; // Importing the ContactForm component from "../Components/ContactForm.js"

// Defining the Contact functional component
function Contact (){
    return(
        <>
        {/* Rendering the Navbar component */}
        <Navbar />

        {/* Rendering the Hero component */}
        <Hero
            cName = "hero-mid" // Custom class name for styling
            heroImg ={AboutImg} // Setting the background image for the hero section
            title = "Contact" // Title for the hero section
            btnClass = "hide" // CSS class to hide a button, if any
        />

        {/* Rendering the ContactForm component */}
        <ContactForm />

        {/* Rendering the Footer component */}
        <Footer />
        </>
    )
}

// Exporting the Contact component as the default export
export default Contact;
