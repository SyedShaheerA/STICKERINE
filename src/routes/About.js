import AboutUs from "../component/AboutUs";
import Hero from "../component/Hero";
import Footer from "../component/footer";

function About(){
    return(<>
        <Hero 
        cname= "About"
        heroImg = "https://cdn.pixabay.com/animation/2023/06/25/21/55/21-55-38-961_512.gif"
        title = "About"        
        text = ""
        to = ''
    />

    <br>
    </br>
    <AboutUs></AboutUs>
    <br></br>
    <Footer></Footer>
    </>)
}

export default About;