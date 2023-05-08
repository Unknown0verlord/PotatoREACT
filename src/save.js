import React, {Component} from "react";
import "./main.css";

class Save extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mainStats: props.mainStats,
            towers: props.towers,

            saveText: ""
        }
    }

    saveData = () => {
        var mainStats = this.props.mainStats;
        var towers = this.props.towers;

        for (let item in mainStats) {
            localStorage.setItem(item, mainStats[item]);
        }

        for (let item in towers) {
            localStorage.setItem(item, towers[item]);
        }


        this.state.saveText = "Game Saved"

        setTimeout(() => {
            this.state.saveText = "";
        }, 3000);
    }

    retrieveData = () => {
        var mainStats = this.state.mainStats;
        var towers = this.state.towers;
        
        if (Number(localStorage.getItem("potatoes"))) {
            for (let item in mainStats) {
                mainStats[item] = Number(localStorage.getItem(item));
            }

            for (let item in towers) {
                towers[item] = Number(localStorage.getItem(item));
            }

            this.setState({mainStats: mainStats});
            this.setState({towers: towers});
            this.props.updateMainStats(this.state.mainStats);
            this.props.giveTowers(this.state.towers);
        }
    }

    deleteData = () => {
        if (window.confirm("Are you Sure?") == true) {
            localStorage.clear();
            alert("Data Cleared! Reload the Page to see your Changes.");
        }
    }

    componentDidMount() {
        this.retrieveData();
        setInterval(() => {this.saveData()}, 60000);
    }


    render() {
        return(
            <div>
                <div id="save">
                    <button type="button" className="saveData" onClick={this.saveData}>Save</button>
                    <button type="button" id="removeData" onClick={this.deleteData}>Clear Data</button>
                </div>

                <div id="surroundSave">
                    <div className="innerDiv" id="saveBlock">
                        <p id="saveText">{this.state.saveText}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Save;