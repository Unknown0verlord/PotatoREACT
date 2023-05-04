import React, {Component} from "react";
import "./main.css";



class Towers extends Component {
    constructor(props) {
        super(props);
        var testvalue = props.potatoes;
        this.state = {
            potatoes: testvalue,
            
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
            }
            
        };
        this.test = this.test.bind(this);
    }



towers = (number) => {
    if (number == 1) {
        if (this.state.potatoes >= this.state.spudSpitterCost) {
            
            }
    } else if (number == 2) {
        if (this.state.potatoes >= this.state.farmerCost) {
            
        }
    } else if (number == 3) {
        if (this.state.potatoes >= this.state.farmCost) {
            
        }
    } else if (number == 4) {
        if (this.state.potatoes >= this.state.factoryCost) {
            
        }
    } else if (number == 5) {
        if (this.state.potatoes >= this.state.districtCost) {
            
        }
    } else if (number == 6) {
        if (this.state.potatoes >= this.state.conventionCost) {
            
        }
    } else if (number == 7) {
        if (this.state.potatoes >= this.state.merchandiseCost) {
            
        }
    }  else if (number == 8) {
        if (this.state.potatoes >= this.state.cultCost) {
            
        }
    }  else if (number == 9) {
        if (this.state.potatoes >= this.state.sponsorshipsCost) {
            
        }
    }
}

test = () => {
    // this.props.onData(this.state);
}

chooseStyle = () => {
    var potatoes = this.props.potatoes;
    console.log(potatoes);
    if (potatoes >= this.state.towers.spudSpitterCost) {
        return "#33cc33"
    } else {
        return "#006600"
    }
    
}



    render() {
        {this.state.potatoes = this.props.potatoes}
        return(
            <div>
                

                <br />
                <br />

                {/* Spud Spitter Tower Button */}
                <button className="towers" id="spudSpitter" type="button" onClick={this.test} style={{backgroundColor: "#33cc33"}}>
                    <p>Spud Spitter</p>
                    <p className="towerText" id="spudSpitterText">Cost: {this.state.towers.spudSpitterCost}</p>
                    <p className="towerDesc">Makes more potatoes per click.</p>
                </button>

                <br />

                {/* Potato Farmer Tower Button */}
                <button className="towers" id="potatoFarmer" type="Button" onClick={this.towers(2)}>
                    <p>Potato Farmer</p>
                    <p className="towerText" id="farmerText">Cost: {this.state.towers.farmerCost}</p>
                    <p className="towerDesc" id="farmerDesc">This Honest Man gives you his potatoes &#40;{this.state.farmerPpSadd} PpS&#41;</p>
                </button>

                {/* Potato Farm Tower Button */}
                <button className="towers" id="potatoFarm" type="Button" onClick={this.towers(3)}>
                    <p>Potato Farm</p>
                    <p className="towerText" id="farmText">Cost: 300</p>
                    <p className="towerDesc" id="farmDesc">A whole farm dedicated to your potatoes. &#40;{this.state.farmPpSadd} PpS&#41;</p>
                </button>

                <br />

                {/* Potato Factory Tower Button */}
                <button className="towers" id="potatoFactory" type="Button" onClick={this.towers(4)}>
                    <p>Potato Factory</p>
                    <p className="towerText" id="factoryText">Cost: 1,000</p>
                    <p className="towerDesc" id="factoryDesc">Streamline Production in Potato Factories. &#40;{this.state.factoryPpSadd} PpS&#41;</p>
                </button>

                {/* Industrial District Tower Button */}
                <button className="towers" id="industrialDistrict" type="Button" onClick={this.towers(5)}>
                    <p>Industrial Disrict</p>
                    <p className="towerText" id="districtText">Cost: 5,000</p>
                    <p className="towerDesc" id="districtDesc">An entire district of factories dedicated to Potatoes.  &#40;{this.state.districtPpSadd} PpS&#41;</p>
                </button>

                <br />

                {/* Potato Convention Tower Button */}
                <button className="towers" id="potatoConvention" type="Button" onClick={this.towers(6)}>
                    <p>Potato Convention</p>
                    <p className="towerText" id="conventionText">Cost: 20,000</p>
                    <p className="towerDesc" id="conventionDesc">Host a convention for potatoes - "Potato-Con"! &#40;{this.state.conventionPpSadd} PpS&#41;</p>
                </button>

                {/* Potato Merchandise Tower Button */}
                <button className="towers" id="potatoMerchandise" type="Button" onClick={this.towers(7)}>
                    <p>Potato Merchandise</p>
                    <p className="towerText" id="merchandiseText">Cost: 100,000</p>
                    <p className="towerDesc" id="merchandiseDesc">Sell Merchandise with Potato Branding. &#40;{this.state.merchandisePpSadd} PpS&#41;</p>
                </button>

                <br />

                {/* Potato Cult Tower Button */}
                <button className="towers" id="potatoCult" type="Button" onClick={this.towers(8)}>
                    <p>Potato Cult</p>
                    <p className="towerText" id="cultText">Cost: 666,666</p>
                    <p className="towerDesc" id="cultDesc">Start Cults worshipping Potatoes. &#40;{this.state.cultPpSadd} PpS&#41;</p>
                </button>
        
                {/* Potato Sponsorships Tower Button */}
                <button className="towers" id="potatoSponsorships" type="Button" onClick={this.towers(9)}>
                    <p>Potato Sponsorships</p>
                    <p className="towerText" id="sponsorshipsText">Cost: 1,234,567</p>
                    <p className="towerDesc" id="sponsorshipsDesc">Sponsor Events with Potatoes. &#40;{this.state.sponsorshipsPpSadd} PpS&#41;</p>
                </button>
            </div>
        )
    }
}

export default Towers;