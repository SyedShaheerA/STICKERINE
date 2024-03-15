import { Component } from "react";
import './StickersStyle.css'

class StickersData extends Component {
    render() {
        return (
            <div className="container" style={{marginBottom: "10%"}}>
                <div className="row gy-3">
                    <div className="col-4" >
                        <div className="card" style={{height: "100%"}}>
                            <img src={this.props.images1} className="card-img-top" alt="..." style={{ maxHeight: "350px", maxWidth: "420px" }} />
                            <div className="card-body">
                                <h5 className="card-title">{this.props.titleCard1}</h5>
                                <p className="card-text">{this.props.textCard1}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{height: "100%"}}>
                            <img src={this.props.images2} className="card-img-top" alt="..." style={{ maxHeight: "350px", maxWidth: "420px" }} />
                            <div className="card-body">
                                <h5 className="card-title">{this.props.titleCard2}</h5>
                                <p className="card-text">{this.props.textCard2}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{height: "100%"}}>
                            <img src={this.props.images3} className="card-img-top" alt="..." style={{ maxHeight: "350px", maxWidth: "420px" }} />
                            <div className="card-body">
                                <h5 className="card-title">{this.props.titleCard3}</h5>
                                <p className="card-text">{this.props.textCard3}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StickersData;
