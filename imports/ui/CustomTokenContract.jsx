import React, { Component, PropTypes } from 'react';
import { web3 } from '../lib/web3';
import ContractFunc from './ContractFunc';


export default class CustomTokenContract extends Component {
    constructor(props) {
        super(props);

        this.isRendered = false;

        var browser_untitled1_sol_customtokencoinContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]);
        this.contract = browser_untitled1_sol_customtokencoinContract.at(this.props.contractAddress);
    }

    render() {
        if(!this.contract){
            return;
        }
        return (
            <div className="panel" ref="panel">
                <div className="panel-heading">
                    CustomTokenCoin ({this.props.contractAddress})
                </div>
                <div className="panel-body">
                    <p>{this.renderAbi()}</p>
                </div>
            </div>
        );
    }

    renderAbi(){
        if(this.contract.abi.length==0){
            return;
        }
        let funcAbi = this.contract.abi.filter((elem)=>{return elem.type=='function'}).sort((x,y)=>{
            return !(x.constant||(!x.constant&&!y.constant));
        });
        let result = new Array();
        for(let i = 0;i<funcAbi.length;i++){
            result.push((
                <ContractFunc contractRealization={this.contract} abielem={funcAbi[i]}/>
            ));
        }
        return result;
    }

    componentDidMount() {
        this.isRendered = true;
        if(!this.props.hide){
            this.show();
        }else{
            this.hide();
        }
    }

    show(){
        this.refs.panel.style.display = 'block';
        this.props.hide = false;
    }

    hide(){
        this.refs.panel.style.display = 'none';
        this.props.hide = true;
    }
}

CustomTokenContract.propTypes = {
    contractAddress:PropTypes.string.isRequired,
    hide:PropTypes.bool.isRequired,
};