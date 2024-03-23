import Destination from "../Components/Destination";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import Course from "../Components/Course";
import HomeImg from "../assets/Home.jpg"

function Home (){
    return(
        <>
        <Navbar/>
        <Hero
            cName = "hero"
            heroImg ={HomeImg}
            title = "Which Language do you want to learn"
            text = "Level up your Language skills through the continuous learning."
            buttonText ="View Courses"
            url = "/service"
            btnClass = "show"
        />
        <Destination />
        <Course />
        <Footer />
        </>
    )
}

export default Home;