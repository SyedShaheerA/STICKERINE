import DestinationData from './DestinationData.js'
import './Discription.css'

const Discription = (props) => {
    return(
        <>
                <div className={props.cname}>
                    <h1>{props.title}</h1>
                    <p className="para">{props.text}</p>
                </div>
                
                <DestinationData
                    title2 = {props.title2}
                    text2 = {props.text2}
                    image2 = {props.image2}
                    image3 = {props.image3}
                />
       
        </>
    )
}

export default Discription