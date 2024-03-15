import Hero from "../component/Hero";
import Stickers from "../component/Stickers";
import Footer from "../component/footer";

function Service(){
    return(<>
    <Hero 
        cname= "Service"
        heroImg = "https://cdn.pixabay.com/photo/2024/01/27/19/02/building-8536587_640.jpg"
        title = "Service"        
        text = ""
        to = ''
    />

<br></br>
<br></br>
    
<Stickers
    title1="Stickers"
    text1="Create and experiment with your own Stickerines."

    image1 = "https://art.pixilart.com/sr2d6e446ea3aaws3.gif"
    titleCard = "CATS AND DOGS"
    textCard = "St. Patrick's entry, by Pixemmart"

    image2= "https://th.bing.com/th/id/OIP.YL1DDKK7sflQFTQg7E3nRwHaHa?w=500&h=500&rs=1&pid=ImgDetMain"
    titleCard2="Badass Cartoon"
    textCard2= "royalty-free picture"
    
    image3="https://drct.pixilart.com/sizes/sr27418446cf9aws3_400.png"
    titleCard3= "Giraffe"
    textCard3="By Digitress"

    />


    <Footer/>
    </>)
}

export default Service;