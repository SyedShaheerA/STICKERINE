import './Discription.css'
const Discription = (props) => {
    return(
        <>
            <div className={props.cname}>
                <h1>{props.title}</h1>
                <p className="para">{props.text}</p>
            </div>
        </>
    )
}

export default Discription