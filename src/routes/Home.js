import Hero from "../component/Hero";
import Discription from "../component/Discription";
// import Navbars from './component/Navbar2'

function Home(){
    return(<>
     
    <Hero 
        cname= "banner"
        heroImg = "https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014618_1280.jpg"
        title = "Make your stickers"        
        text = "Click here to begin"
        to = '/service'
    />

    <Discription
        cname="Discription"
        title="STICKERINE"
        text= "Welcome to Stickerine, your one-stop destination for turning your imagination into reality! At Stickerine, we empower you to express your unique style and ideas by creating personalized custom stickers. From vibrant designs to meaningful messages, our online platform allows you to effortlessly design and order custom stickers tailored to your preferences. Unleash your creativity, make your mark, and bring your vision to life with Stickerine – where every sticker tells a story. Explore endless possibilities and start crafting your custom stickers today!"
    />
    </>)
}

export default Home;