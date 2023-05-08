import React, {Component} from "react";
import "./main.css";

import Counters from "./counters";

class Towers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainStats: props.mainStats,
            
            towers: props.towers
        };
    }

    

    towers = (number) => {
        var mainStats = this.state.mainStats;
        var towers = this.state.towers;
    
        if (number === 1) {
            if (mainStats.potatoes >= towers.spudSpitterCost) {
                towers.spudSpitter += 1;
                mainStats.potatoes -= towers.spudSpitterCost;
                towers.spudSpitterCost = Math.floor(10 * (1.25 ** towers.spudSpitter));
                mainStats.potatoUp += 1;

                if (mainStats.potatoes < towers.spudSpitterCost) {
                    document.getElementById("spudSpitter").style.backgroundColor = '#006600';
                }

                this.setState({mainStats: mainStats});
                this.setState({towers: towers});
                this.props.updateMainStats(this.state.mainStats);
            }
        } else if (number === 2) {
            if (mainStats.potatoes >= towers.farmerCost) {
                towers.farmer += 1;
                mainStats.potatoes -= towers.farmerCost;
                towers.farmerCost = Math.floor(50 * (1.15 ** towers.farmer));
                mainStats.PpS += towers.farmerPpSadd;

                if (mainStats.potatoes < towers.farmerCost) {
                    document.getElementById("potatoFarmer").style.backgroundColor = '#006600';
                }

                this.setState({mainStats: mainStats});
                this.setState({towers: towers});
                this.props.updateMainStats(this.state.mainStats);
                this.props.giveTowers(this.state.towers);
            }
        } else if (number === 3) {
            if (mainStats.potatoes >= towers.farmCost) {
                towers.farm += 1;
                mainStats.potatoes -= towers.farmCost;
                towers.farmCost = Math.floor(300 * (1.15 ** towers.farm));
                mainStats.PpS += towers.farmPpSadd;

                if (mainStats.potatoes < towers.farmerCost) {
                    document.getElementById("potatoFarm").style.backgroundColor = '#006600';
                }

                this.setState({mainStats: mainStats});
                this.setState({towers: towers});
                this.props.updateMainStats(this.state.mainStats);
                this.props.giveTowers(this.state.towers);
            }
        } else if (number === 4) {
            if (mainStats.potatoes >= towers.factoryCost) {
                towers.factory += 1;
                mainStats.potatoes -= towers.factoryCost;
                towers.factoryCost = Math.floor(1000 * (1.15 ** towers.factory));
                mainStats.PpS += towers.factoryPpSadd;

                if (mainStats.potatoes < towers.farmerCost) {
                    document.getElementById("potatoFactory").style.backgroundColor = '#006600';
                }

                this.setState({mainStats: mainStats});
                this.setState({towers: towers});
                this.props.updateMainStats(this.state.mainStats);
                this.props.giveTowers(this.state.towers);
            }
        } else if (number === 5) {
            if (mainStats.potatoes >= towers.districtCost) {
                towers.district += 1;
                mainStats.potatoes -= towers.districtCost;
                towers.districtCost = Math.floor(5000 * (1.15 ** towers.district));
                mainStats.PpS += towers.districtPpSadd;

                if (mainStats.potatoes < towers.districtCost) {
                    document.getElementById("industrialDistrict").style.backgroundColor = '#006600';
                }

                this.setState({mainStats: mainStats});
                this.setState({towers: towers});
                this.props.updateMainStats(this.state.mainStats);
                this.props.giveTowers(this.state.towers);
            }
        } else if (number === 6) {
            if (mainStats.potatoes >= towers.conventionCost) {
                towers.convention += 1;
                mainStats.potatoes -= towers.conventionCost;
                towers.conventionCost = Math.floor(20000 * (1.15 ** towers.convention));
                mainStats.PpS += towers.conventionPpSadd;

                if (mainStats.potatoes < towers.conventionCost) {
                    document.getElementById("potatoConvention").style.backgroundColor = '#006600';
                }

                this.setState({mainStats: mainStats});
                this.setState({towers: towers});
                this.props.updateMainStats(this.state.mainStats);
                this.props.giveTowers(this.state.towers);
            }
        } else if (number === 7) {
            if (mainStats.potatoes >= towers.merchandiseCost) {
                towers.merchandise += 1;
                mainStats.potatoes -= towers.merchandiseCost;
                towers.merchandiseCost = Math.floor(100000 * (1.15 ** towers.merchandise));
                mainStats.PpS += towers.merchandisePpSadd;

                if (mainStats.potatoes < towers.merchandiseCost) {
                    document.getElementById("potatoMerchandise").style.backgroundColor = '#006600';
                }

                this.setState({mainStats: mainStats});
                this.setState({towers: towers});
                this.props.updateMainStats(this.state.mainStats);
                this.props.giveTowers(this.state.towers);
            }
        }  else if (number === 8) {
            if (mainStats.potatoes >= towers.cultCost) {
                towers.cult += 1;
                mainStats.potatoes -= towers.cultCost;
                towers.cultCost = Math.floor(666666 * (1.15 ** towers.cult));
                mainStats.PpS += towers.cultPpSadd;

                if (mainStats.potatoes < towers.cultCost) {
                    document.getElementById("potatoCult").style.backgroundColor = '#006600';
                }

                this.setState({mainStats: mainStats});
                this.setState({towers: towers});
                this.props.updateMainStats(this.state.mainStats);
                this.props.giveTowers(this.state.towers);
            }
        }  else if (number === 9) {
            if (mainStats.potatoes >= towers.sponsorshipsCost) {
                towers.sponsorships += 1;
                mainStats.potatoes -= towers.sponsorshipsCost;
                towers.sponsorshipsCost = Math.floor(1234567 * (1.15 ** towers.sponsorships));
                mainStats.PpS += towers.sponsorshipsPpSadd;

                if (mainStats.potatoes < towers.sponsorshipsCost) {
                    document.getElementById("potatoSponsorships").style.backgroundColor = '#006600';
                }

                this.setState({mainStats: mainStats});
                this.setState({towers: towers});
                this.props.updateMainStats(this.state.mainStats);
                this.props.giveTowers(this.state.towers);
            }
        }
    }

    refreshTowers = () => {
    var potatoes = this.props.mainStats.potatoes;
    
    if (potatoes >= this.state.towers.spudSpitterCost) {
        document.getElementById("spudSpitter").style.backgroundColor = "#33cc33";
    } else {
        document.getElementById("spudSpitter").style.backgroundColor = "#006600";
    }

    if (potatoes >= this.state.towers.farmerCost) {
        document.getElementById("potatoFarmer").style.backgroundColor = "#33cc33";
    } else {
        document.getElementById("potatoFarmer").style.backgroundColor = "#006600";
    }

    if (potatoes >= this.state.towers.farmCost) {
        document.getElementById("potatoFarm").style.backgroundColor = "#33cc33";
    } else {
        document.getElementById("potatoFarm").style.backgroundColor = "#006600";
    }

    if (potatoes >= this.state.towers.factoryCost) {
        document.getElementById("potatoFactory").style.backgroundColor = "#33cc33";
    } else {
        document.getElementById("potatoFactory").style.backgroundColor = "#006600";
    }

    if (potatoes >= this.state.towers.districtCost) {
        document.getElementById("industrialDistrict").style.backgroundColor = "#33cc33";
    } else {
        document.getElementById("industrialDistrict").style.backgroundColor = "#006600";
    }

    if (potatoes >= this.state.towers.conventionCost) {
        document.getElementById("potatoConvention").style.backgroundColor = "#33cc33";
    } else {
        document.getElementById("potatoConvention").style.backgroundColor = "#006600";
    }

    if (potatoes >= this.state.towers.merchandiseCost) {
        document.getElementById("potatoMerchandise").style.backgroundColor = "#33cc33";
    } else {
        document.getElementById("potatoMerchandise").style.backgroundColor = "#006600";
    }
    
    if (potatoes >= this.state.towers.cultCost) {
        document.getElementById("potatoCult").style.backgroundColor = "#33cc33";
    } else {
        document.getElementById("potatoCult").style.backgroundColor = "#006600";
    }

    if (potatoes >= this.state.towers.sponsorshipsCost) {
        document.getElementById("potatoSponsorships").style.backgroundColor = "#33cc33";
    } else {
        document.getElementById("potatoSponsorships").style.backgroundColor = "#006600";
    }
    
    }

    componentDidMount() {
        setInterval(() => {
            this.refreshTowers()
        }, 100)
    }

    render() {
        this.state.mainStats = this.props.mainStats
        var spudSpitterCost = this.state.towers.spudSpitterCost;
        return(
            <div>
                

                <br />
                <br />

                {/* Spud Spitter Tower Button */}
                <button className="towers" id="spudSpitter" type="button" onClick={() => this.towers(1)}>
                    <p>Spud Spitter</p>
                    <p className="towerText" id="spudSpitterText">Cost: {spudSpitterCost}</p>
                    <p className="towerDesc">Makes more potatoes per click.</p>
                </button>

                <br />

                {/* Potato Farmer Tower Button */}
                <button className="towers" id="potatoFarmer" type="Button" onClick={() => this.towers(2)}>
                    <p>Potato Farmer</p>
                    <p className="towerText" id="farmerText">Cost: {this.state.towers.farmerCost}</p>
                    <p className="towerDesc" id="farmerDesc">This Honest Man gives you his potatoes &#40;{this.state.towers.farmerPpSadd} PpS&#41;</p>
                </button>

                {/* Potato Farm Tower Button */}
                <button className="towers" id="potatoFarm" type="Button" onClick={() => this.towers(3)}>
                    <p>Potato Farm</p>
                    <p className="towerText" id="farmText">Cost: {this.state.towers.farmCost}</p>
                    <p className="towerDesc" id="farmDesc">A whole farm dedicated to your potatoes. &#40;{this.state.towers.farmPpSadd} PpS&#41;</p>
                </button>

                <br />

                {/* Potato Factory Tower Button */}
                <button className="towers" id="potatoFactory" type="Button" onClick={() => this.towers(4)}>
                    <p>Potato Factory</p>
                    <p className="towerText" id="factoryText">Cost: {this.state.towers.factoryCost}</p>
                    <p className="towerDesc" id="factoryDesc">Streamline Production in Potato Factories. &#40;{this.state.towers.factoryPpSadd} PpS&#41;</p>
                </button>

                {/* Industrial District Tower Button */}
                <button className="towers" id="industrialDistrict" type="Button" onClick={() => this.towers(5)}>
                    <p>Industrial Disrict</p>
                    <p className="towerText" id="districtText">Cost: {this.state.towers.districtCost}</p>
                    <p className="towerDesc" id="districtDesc">An entire district of factories dedicated to Potatoes.  &#40;{this.state.towers.districtPpSadd} PpS&#41;</p>
                </button>

                <br />

                {/* Potato Convention Tower Button */}
                <button className="towers" id="potatoConvention" type="Button" onClick={() => this.towers(6)}>
                    <p>Potato Convention</p>
                    <p className="towerText" id="conventionText">Cost: {this.state.towers.conventionCost}</p>
                    <p className="towerDesc" id="conventionDesc">Host a convention for potatoes - "Potato-Con"! &#40;{this.state.towers.conventionPpSadd} PpS&#41;</p>
                </button>

                {/* Potato Merchandise Tower Button */}
                <button className="towers" id="potatoMerchandise" type="Button" onClick={() => this.towers(7)}>
                    <p>Potato Merchandise</p>
                    <p className="towerText" id="merchandiseText">Cost: {this.state.towers.merchandiseCost}</p>
                    <p className="towerDesc" id="merchandiseDesc">Sell Merchandise with Potato Branding. &#40;{this.state.towers.merchandisePpSadd} PpS&#41;</p>
                </button>

                <br />

                {/* Potato Cult Tower Button */}
                <button className="towers" id="potatoCult" type="Button" onClick={() => this.towers(8)}>
                    <p>Potato Cult</p>
                    <p className="towerText" id="cultText">Cost: {this.state.towers.cultCost}</p>
                    <p className="towerDesc" id="cultDesc">Start Cults worshipping Potatoes. &#40;{this.state.towers.cultPpSadd} PpS&#41;</p>
                </button>
        
                {/* Potato Sponsorships Tower Button */}
                <button className="towers" id="potatoSponsorships" type="Button" onClick={() => this.towers(9)}>
                    <p>Potato Sponsorships</p>
                    <p className="towerText" id="sponsorshipsText">Cost: {this.state.towers.sponsorshipsCost}</p>
                    <p className="towerDesc" id="sponsorshipsDesc">Sponsor Events with Potatoes. &#40;{this.state.towers.sponsorshipsPpSadd} PpS&#41;</p>
                </button>
            </div>

            
        )
    }
}

export default Towers;