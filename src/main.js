import React, {Component} from "react";
import "./main.css"

import Towers from "./towers";


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataFromChild: null,

            patch: "v1.1.0",

            mainStats: {
                potatoes: 10000,
                PpS: 0,
                potatoUp: 1,
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
        this.handleDataFromChild = this.handleDataFromChild.bind(this);
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
    
    progress = setInterval(this.progressBar, 1000);
    addPpS = setInterval(this.PpS, 1000)

    handleDataFromChild(data) {
        this.setState({ mainStats: data });
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

                <Towers mainStats={this.state.mainStats} onData={this.handleDataFromChild} />
            </div>
            
            
        
        
        )
    }
}

export default Main