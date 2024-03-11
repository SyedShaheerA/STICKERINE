import { Link } from "react-router-dom";
import "./HeroStyles.css"



function Hero(props){
    return(<>
        <div className={props.cname} style={{overflow:"hidden", height:"250px"}}>
        <div>
            <img alt="HeroImg" src={props.heroImg} height={"auto"}  width={"100%"}/>
        </div>

        <div className="Hero-text" style={{position: "absolute", top: '150px', left:"50%", transform:"translateX(-50%)", color:"white"}}>
            <h1>
                {props.title}
            </h1>
            <p>
                <Link to={props.to} style={{color:"white", textDecoration:"None"}}>{props.text}</Link>
            </p>
        </div>
        </div>
    </>)
}

export default Hero;