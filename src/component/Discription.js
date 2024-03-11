import './Discription.css'
const Discription = (props) => {
    return(
        <>
                <div className={props.cname}>
                    <h1>{props.title}</h1>
                    <p className="para">{props.text}</p>
                </div>
                <div className="FirstSticker">
                    <div className='paragrap'>
                        <h2>{props.title2}</h2>
                        <p>
                        {props.text2}
                        </p>
                    </div>

                    

                    <div class="Image">
                        <img src={props.image2}></img>
                        <img src={props.image3}></img>
                    </div>
                </div>
                
       
        </>
    )
}

export default Discription