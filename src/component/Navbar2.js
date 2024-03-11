import {Component} from 'react';
import {MenuItems} from './MenuItems'
import './NavbarStyle.css'
import { Link } from 'react-router-dom';
class Navbar2 extends Component{
    render(){
        return(

            <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand " href="#">Stickerines</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse  NAV_CSS" id="navbarNavDropdown">
            <ul class="navbar-nav">
                {MenuItems.map((item, index) =>{
                    return(
                        <li class="nav-item" key={index}>
                        <Link class={"nav-link ${item.cName}"}  aria-current="page" to={item.url}><i class={item.icon}></i>{item.title}</Link>
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