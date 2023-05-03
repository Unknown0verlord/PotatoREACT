import React, {Component} from "react";
import "./main.css";



class Towers extends Component {
    constructor(props) {
        super(props);

        this.state = props.state;
    }



towers = (number) => {
    if (number == 1) {
        if (this.game.potatoes >= this.game.spudSpitterCost) {
            this.game.spudSpitter += 1;
            this.game.potatoes -= this.game.spudSpitterCost;
            this.game.spudSpitterCost = Math.floor(10 * (1.25 ** this.game.spudSpitter));
            this.game.potatoUp += 1;

            if (this.game.potatoes < this.game.spudSpitterCost) {
                document.getElementById("spudSpitter").style.backgroundColor = '#006600';
            }

            document.getElementById("varCount").innerHTML = "Potatoes: " + this.game.potatoes.toLocaleString();
            document.getElementById("spudSpitterCount").innerHTML = "Spud Spitters: " + this.game.spudSpitter.toLocaleString();
            document.getElementById("spudSpitterText").innerHTML = "Cost: " + this.game.spudSpitterCost.toLocaleString();
            console.log(this.game.spudSpitter);
            }
    } else if (number == 2) {
        if (this.game.potatoes >= this.game.farmerCost) {
            this.game.farmer += 1;
            this.game.potatoes -= this.game.farmerCost;
            this.game.farmerCost = Math.floor(50 * (1.15 ** this.game.farmer));
            this.game.PpS += this.game.farmerPpSadd;

            if (this.game.potatoes < this.game.farmerCost) {
                document.getElementById("potatoFarmer").style.backgroundColor = '#006600';
            }

            document.getElementById("varCount").innerHTML = "Potatoes: " + this.game.potatoes.toLocaleString();
            document.getElementById("PpSCount").innerHTML = "PpS: " + this.game.PpS.toLocaleString();
            document.getElementById("farmerCount").innerHTML = "Potato Farmers: " + this.game.farmer.toLocaleString();
            document.getElementById("farmerText").innerHTML = "Cost: " + this.game.farmerCost.toLocaleString();
            console.log(this.game.farmer);
        }
    } else if (number == 3) {
        if (this.game.potatoes >= this.game.farmCost) {
            
        }
    } else if (number == 4) {
        if (this.game.potatoes >= this.game.factoryCost) {
            
        }
    } else if (number == 5) {
        if (this.game.potatoes >= this.game.districtCost) {
            
        }
    } else if (number == 6) {
        if (this.game.potatoes >= this.game.conventionCost) {
            
        }
    } else if (number == 7) {
        if (this.game.potatoes >= this.game.merchandiseCost) {
            
        }
    }  else if (number == 8) {
        if (this.game.potatoes >= this.game.cultCost) {
            
        }
    }  else if (number == 9) {
        if (this.game.potatoes >= this.game.sponsorshipsCost) {
            
        }
    }
}



    render() {
        return(
            <div>
                

                <br />
                <br />

                {/* Spud Spitter Tower Button */}
                <button class="towers" id="spudSpitter" type="button" onClick={this.towers(1)}>
                    <p>Spud Spitter</p>
                    <p class="towerText" id="spudSpitterText">Cost: 10</p>
                    <p class="towerDesc">Makes more potatoes per click.</p>
                </button>

                <br />

                {/* Potato Farmer Tower Button */}
                <button class="towers" id="potatoFarmer" type="Button" onClick={this.towers(2)}>
                    <p>Potato Farmer</p>
                    <p class="towerText" id="farmerText">Cost: 50</p>
                    <p class="towerDesc" id="farmerDesc"></p>
                </button>

                {/* Potato Farm Tower Button */}
                <button class="towers" id="potatoFarm" type="Button" onClick={this.towers(3)}>
                    <p>Potato Farm</p>
                    <p class="towerText" id="farmText">Cost: 300</p>
                    <p class="towerDesc" id="farmDesc"></p>
                </button>

                <br />

                {/* Potato Factory Tower Button */}
                <button class="towers" id="potatoFactory" type="Button" onClick={this.towers(4)}>
                    <p>Potato Factory</p>
                    <p class="towerText" id="factoryText">Cost: 1,000</p>
                    <p class="towerDesc" id="factoryDesc"></p>
                </button>

                {/* Industrial District Tower Button */}
                <button class="towers" id="industrialDistrict" type="Button" onClick={this.towers(5)}>
                    <p>Industrial Disrict</p>
                    <p class="towerText" id="districtText">Cost: 5,000</p>
                    <p class="towerDesc" id="districtDesc"></p>
                </button>

                <br />

                {/* Potato Convention Tower Button */}
                <button class="towers" id="potatoConvention" type="Button" onClick={this.towers(6)}>
                    <p>Potato Convention</p>
                    <p class="towerText" id="conventionText">Cost: 20,000</p>
                    <p class="towerDesc" id="conventionDesc"></p>
                </button>

                {/* Potato Merchandise Tower Button */}
                <button class="towers" id="potatoMerchandise" type="Button" onClick={this.towers(7)}>
                    <p>Potato Merchandise</p>
                    <p class="towerText" id="merchandiseText">Cost: 100,000</p>
                    <p class="towerDesc" id="merchandiseDesc"></p>
                </button>

                <br />

                {/* Potato Cult Tower Button */}
                <button class="towers" id="potatoCult" type="Button" onClick={this.towers(8)}>
                    <p>Potato Cult</p>
                    <p class="towerText" id="cultText">Cost: 666,666</p>
                    <p class="towerDesc" id="cultDesc"></p>
                </button>
        
                {/* Potato Sponsorships Tower Button */}
                <button class="towers" id="potatoSponsorships" type="Button" onClick={this.towers(9)}>
                    <p>Potato Sponsorships</p>
                    <p class="towerText" id="sponsorshipsText">Cost: 1,234,567</p>
                    <p class="towerDesc" id="sponsorshipsDesc"></p>
                </button>
            </div>
        )
    }
}

export default Towers;