import React, {Component, Components} from "react";
import "./main.css"

import Towers from "./towers";

const myContext = React.createContext();

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            patch: "v1.1.0",
            potatoes: 0,
            PpS: 0,
            potatoUp: 1,
            spudSpitter: 0,
            spudSpitterCost: 10,

            farmer: 0,
            farmerCost: 50,
            farmerPpSadd: 1,

            farm: 0,
            farmCost: 300,
            farmPpSadd: 5,

            factory: 0,
            factoryCost: 1000,
            factoryPpSadd: 20,

            district: 0,
            districtCost: 5000,
            districtPpSadd: 50,

            convention: 0,
            conventionCost: 20000,
            conventionPpSadd: 100,

            merchandise: 0,
            merchandiseCost: 100000,
            merchandisePpSadd: 500,

            cult: 0,
            cultCost: 666666,
            cultPpSadd: 3000,

            sponsorships: 0,
            sponsorshipsCost: 1234567,
            sponsorshipsPpSadd: 10000,
                
            biggerYields: 0,
            moreFields: 0,
            looserLaws: 0,
            districtExpansion: 0,
            moreBooths: 0,
            sleekerDesigns: 0,
            potatoSkinSacrifice: 0,
            moreBrands: 0
        }
    }

    clickFirstButton = () => {
        var potatoes = this.state.potatoes + this.state.potatoUp;
        this.setState({potatoes: potatoes});
    }

    progressBar = () => {
        var elem = document.getElementById("progressBar");   
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++; 
                elem.style.width = width + '%'; 
            }
        }
    }
    
    progress = setInterval(this.progressBar, 1000);

    render() {
        return(
            <div>
                {/* Main Div with Potatoes and PpS */}
                <div id="showVar">
                    <p id="varCount">Potatoes: {this.state.potatoes}</p>
                    <p id="PpSCount">PpS: {this.state.PpS}</p>
            
                    {/* Progress Bar */}
                    <div class="progress-grey">
                        <div class="progress-green" id="progressBar"></div>
                    </div>
                </div>

                <br />
                <br />

                {/* Make a Potato Button */}
                <button type="button" onClick={this.clickFirstButton}>Make a Potato!</button>

                <Towers state={this.state} />
            </div>
            
            
        
        
        )
    }
}

export default Main