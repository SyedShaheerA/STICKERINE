import {Component} from 'react';
import {MenuItems} from './MenuItems'
import './NavbarStyle.css'
import { Link } from 'react-router-dom';
class Navbar2 extends Component{
    

    render(){
        return(

            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand " href="/">Stickerines</a>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    
                    <span className="navbar-toggler-icon" ></span>
                </button>
            <div className="collapse navbar-collapse  NAV_CSS" id="navbarNavDropdown">
            <ul className="navbar-nav">
                {MenuItems.map((item, index) =>{
                    return(
                        <li className="nav-item" key={index}>
                        
                        <Link className={"nav-link ${item.cName}"}  aria-current="page" to={item.url}><i class={item.icon}></i>{item.title}</Link>

                        </li>

                        
                    )
                })}
            </ul>
            </div>
            </div>
            </nav>


        )
    }
}

export default Navbar2;