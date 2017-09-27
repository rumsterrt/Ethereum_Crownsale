import React, { Component, PropTypes } from 'react';
import { web3 } from '../lib/web3';

export default class RegistrationPanel extends Component {
    constructor(props) {
        super(props);

        this.isRendered = false;

        this.state = {
            balance: web3.eth.getBalance(web3.eth.defaultAccount),
        };
        this.updateBalance = setInterval(function () {
            let newBalance = web3.eth.getBalance(web3.eth.defaultAccount);
            if (this.state.balance.equals(newBalance)) {
                return;
            }
            this.setState({
                balance: newBalance,
            });
        }.bind(this), 1000);
    }

    render() {
        return (
            <div className="panel" ref="panel">
                <div className="panel-body">
                    <h1>Current account</h1>
                    <p>{this.renderAccountSelector()} <button onClick={this.handleUnlock.bind(this)}>Unlock</button></p>
                    <p>{(this.state.balance/1000000000000000000).toString()} ether</p>
                </div>
            </div>
        );
    }

    renderAccountSelector() {
        let transSelector = web3.eth.accounts.map((trans) => (
            <option value={trans}>{trans}</option>
        ));
        return (
            <select type="accountOption" ref="accountSelector" onChange={this.handleEnter.bind(this)}>
                {transSelector}
            </select>
        );
    }

    handleEnter(){
        web3.eth.defaultAccount = this.refs.accountSelector.value;
        this.forceUpdate();
    }

    handleUnlock(){
        let password = prompt("Enter password for unlock", "Password");
        let result = web3.personal.unlockAccount(web3.eth.defaultAccount,password);
        console.log(result);
    }
}

RegistrationPanel.propTypes = {
};