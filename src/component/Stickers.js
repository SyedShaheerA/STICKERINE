import "./StickersStyle.css"
import StickersData from './StickersData.js'
function Stickers(props) { 
    return(
        <>
        <div className="Sticker">
            <h2>
                {props.title1}
            </h2>
            <p>
                {props.text1}
            </p>
        </div>

        <div className="Cards">
            <StickersData
            images1 = {props.image1}
            titleCard1 = {props.titleCard}
            textCard1 = {props.textCard}

            images2 = {props.image2}
            titleCard2 = {props.titleCard2}
            textCard2 = {props.textCard2}

            images3 = {props.image3}
            titleCard3 = {props.titleCard3}
            textCard3 = {props.textCard3}
            />


        </div>

        </>
    )
}

export default Stickers;