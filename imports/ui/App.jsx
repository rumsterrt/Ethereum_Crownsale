import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import RegistrationPanel from "./RegistrationPanel"
import CrownsaleContract from "./CrownsaleContract";
import CustomTokenContract from "./CustomTokenContract";
import { web3 } from '../lib/web3';

class App extends Component {
    constructor(props){
        super(props);

        this.isRendered = false;
        this.crownsaleAddress = "0xc619c512b83ad850d7236fcf5a1f9039a6f47645";
        this.tokenAddress = "0x7e5a24f052bcfeb82f1ab0cd4a6429c78bad9a4d";

        this.currentTab = 'CrownsaleContract';

        web3.eth.defaultAccount = web3.eth.accounts[0];
    }

    componentDidMount() {
        this.isRendered = true;
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Crownsale test</h1>
                </header>
                <ul>
                    <RegistrationPanel ref="RegPanel"/>
                    <div className="tab">
                        <button ref="CrownsaleContractLink" className="tablinks" onClick={this.openTab.bind(this, 'CrownsaleContract')}>Crownsale</button>
                        <button ref="CustomTokenContractLink" className="tablinks" onClick={this.openTab.bind(this, 'CustomTokenContract')}>Custom token</button>
                    </div>

                    <CrownsaleContract ref="CrownsaleContract" className="tabcontent" contractAddress={this.crownsaleAddress} hide={this.currentTab != 'CrownsaleContract'}/>
                    <CustomTokenContract ref="CustomTokenContract" className="tabcontent" contractAddress={this.tokenAddress} hide={this.currentTab != 'CustomTokenContract'}/>
                </ul>
            </div>
        );
    }

    openTab( tabId) {
        if(!this.isRendered || this.currentTab == tabId){
            return;
        }
        this.refs[tabId].show();
        this.refs[tabId + 'Link'].className += " active";
        this.refs[this.currentTab].hide();
        this.refs[this.currentTab + 'Link'].className = this.refs[this.currentTab + 'Link'].className.replace(" active", "");
        this.currentTab = tabId;
    }
}

App.propTypes = {
};

export default createContainer(() => {
    return {
    };
}, App);