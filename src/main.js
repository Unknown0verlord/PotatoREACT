import React, {Component} from "react";
import "./main.css"

import Towers from "./towers";
import Save from "./save";
import Counters from "./counters";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {

            patch: "v1.1.0",

            mainStats: {
                potatoes: 0,
                PpS: 0,
                potatoUp: 1,
            },
            
            towers: {
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
            },
                
            biggerYields: 0,
            moreFields: 0,
            looserLaws: 0,
            districtExpansion: 0,
            moreBooths: 0,
            sleekerDesigns: 0,
            potatoSkinSacrifice: 0,
            moreBrands: 0
        }
        this.updateMainStats = this.updateMainStats.bind(this);
        this.giveTowers = this.giveTowers.bind(this);
    }

    clickFirstButton = () => {
        var mainStats = this.state.mainStats
        mainStats.potatoes = this.state.mainStats.potatoes + this.state.mainStats.potatoUp;
        this.setState({mainStats: mainStats});
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

    PpS = () => {
        var mainStats = this.state.mainStats;
        mainStats.potatoes += mainStats.PpS;
        this.setState({mainStats: mainStats})
    }
    
    componentDidMount() {
        setInterval(this.progressBar, 1000);
        setInterval(this.PpS, 1000)
    }

    updateMainStats(data) {
        this.setState({ mainStats: data });
    }

    giveTowers(data) {
        this.setState({ towers: data });
    }

    render() {
        return(
            <div>
                {/* Main Div with Potatoes and PpS */}
                <div id="showVar">
                    <p id="varCount">Potatoes: {this.state.mainStats.potatoes}</p>
                    <p id="PpSCount">PpS: {this.state.mainStats.PpS}</p>
            
                    {/* Progress Bar */}
                    <div className="progress-grey">
                        <div className="progress-green" id="progressBar"></div>
                    </div>
                </div>

                <br />
                <br />

                {/* Make a Potato Button */}
                <button type="button" onClick={this.clickFirstButton}>Make a Potato!</button>

                <Towers mainStats={this.state.mainStats} towers={this.state.towers} updateMainStats={this.updateMainStats} giveTowers={this.giveTowers} />
                <Counters towers={this.state.towers} />
                <Save mainStats={this.state.mainStats} towers={this.state.towers} updateMainStats={this.updateMainStats} giveTowers={this.giveTowers} />
            </div>
        )
    }
}

export default Main