import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import AboutImg from "../assets/course.jpg";
import Footer from "../Components/Footer";
import Course from "../Components/Course";

function CoursePage() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="Language Learning"


                btnClass="hide"
            />
            <Course />
            <Footer />
        </>
    )
}

export default CoursePage;