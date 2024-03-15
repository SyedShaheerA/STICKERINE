import "./footerStyles.css"

const Footer = () => {
    return(
        <div className="Footer">
            <div className="Top">
                <div>
                    <h1>Stickerine</h1>
                    <p>Create your brand sticker</p>
                </div>
                <div>
                    <a href="/"> 
                        <i className="fa-brands fa-github-square"></i>
                    </a>
                    <a href="/"> 
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/"> 
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                </div>
                
            </div>
            <div className="Bottom">

            </div>
        </div>
    )
}

export default Footer