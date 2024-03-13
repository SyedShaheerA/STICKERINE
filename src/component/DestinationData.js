import { Component } from "react";
import "./Discription.css"

class DestinationData extends Component{
    render()
    {
        return(
            <>
            <div className="FirstSticker">
                    <div className='paragrap'>
                        <h2>{this.props.title2}</h2>
                        <p>
                        {this.props.text2}
                        </p>
                    </div>

                    

                    <div class="Image">
                        <img src={this.props.image2}></img>
                        <img src={this.props.image3}></img>
                    </div>
                </div>
                
            </>
        )
    }
}

export default DestinationData;