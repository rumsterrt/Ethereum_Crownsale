import React, { Component, PropTypes } from 'react';
import { web3 } from '../lib/web3';
import ContractFunc from './ContractFunc';


export default class CrownsaleContract extends Component {
    constructor(props) {
        super(props);

        this.isRendered = false;

        let browser_untitled1_sol_crowdsaleContract =  web3.eth.contract([{"constant":false,"inputs":[],"name":"createTokens","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"}]);
        this.contract = browser_untitled1_sol_crowdsaleContract.at(this.props.contractAddress);

    }

    render() {
        if(!this.contract){
            return;
        }
        return (
            <div className="panel" ref="panel">
                <div className="panel-heading">
                Crownsale ({this.props.contractAddress})
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

CrownsaleContract.propTypes = {
    contractAddress:PropTypes.string.isRequired,
    hide:PropTypes.bool.isRequired,
};