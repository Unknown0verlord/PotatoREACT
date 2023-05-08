import React, {Component} from "react";
import "./main.css"

class Counters extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return(
            <div id="counts">
                <button type="button" class="saveData" onclick="setSessionVariables(1)">Save</button>
                <button type="button" id="removeData" onclick="deleteData()">Clear Data</button>
                <p>Amounts <br />---------------</p>
                <p id="spudSpitterCount">Spud Spitters: 0</p>
                <p id="farmerCount">Potato Farmers: 0</p>
                <p id="farmCount">Potato Farms: 0</p>
                <p id="factoryCount">Potato Factories: 0</p>
                <p id="districtCount">Industrial Districts: 0</p>
                <p id="conventionCount">Potato Conventions: 0</p>
                <p id="merchandiseCount">Potato Merchandise: 0</p>
                <p id="cultCount">Potato Cults: 0</p>
                <p id="sponsorshipsCount">Potato Sponsorships: 0</p>
            </div>
        )
    }
}