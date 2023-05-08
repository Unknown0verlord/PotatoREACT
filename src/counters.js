import React, {Component} from "react";
import "./main.css"

class Counters extends Component {
    constructor(props) {
        super(props);

        this.state = {
            towers: props.towers
        }
    }

    render() {
        return(
            <div id="counts">
                <p>Amounts <br />---------------</p>
                <p id="spudSpitterCount">Spud Spitters: {this.state.towers.spudSpitter}</p>
                <p id="farmerCount">Potato Farmers: {this.state.towers.farmer}</p>
                <p id="farmCount">Potato Farms: {this.state.towers.farm}</p>
                <p id="factoryCount">Potato Factories: {this.state.towers.factory}</p>
                <p id="districtCount">Industrial Districts: {this.state.towers.district}</p>
                <p id="conventionCount">Potato Conventions: {this.state.towers.convention}</p>
                <p id="merchandiseCount">Potato Merchandise: {this.state.towers.merchandise}</p>
                <p id="cultCount">Potato Cults: {this.state.towers.cult}</p>
                <p id="sponsorshipsCount">Potato Sponsorships: {this.state.towers.sponsorships}</p>
            </div>
        )
    }
}

export default Counters;