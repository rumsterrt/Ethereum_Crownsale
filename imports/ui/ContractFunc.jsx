import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { web3 } from '../lib/web3';

export default class ContractFunc extends Component {
    constructor() {
        super();

        this.state = {
            results: new Array(),
        }
    }

    componentWillUnmount() {
    }

    componentWillUpdate() {
    }

    render() {
        return (
            <div className="panel-contractfunction">
                <div style={{width: 100+'%', position: 'relative'}}>
                    <button onClick={this.onClickFunction.bind(this)} style={{width: 30+'%',background: this.props.abielem.payable?"#ff0004":this.props.abielem.constant?"#a4f2ff":"#ff928f"}}>
                        {this.props.abielem.name}
                    </button>
                    {this.renderInput()}
                </div>
                <div className="contractRealization-body">
                    {this.renderResults()}
                </div>
            </div>
        );
    }

    renderInput() {

        let inputs = this.props.abielem.inputs;
        let isPayable = this.props.abielem.payable;
        let isInputs = inputs.length != 0;
        if (!isInputs && !isPayable) {
            return;
        }
        let inputArray = new Array();
        if (isInputs) {
            let placeholder = '';
            let texts = inputs.map((input) => {
                return input.type + " " + input.name;
            });
            for (let elem in texts) {
                placeholder += texts[elem] + ',';
            }
            inputArray.push((<input
                className="form-control"
                type="text"
                ref="textInput"
                placeholder={placeholder}
                style={{width: (isInputs && isPayable ? 30 : isInputs ? 60 : 0) + '%'}}
            />))
        }

        if(isPayable) {
            inputArray.push((
                <input
                    className="form-control"
                    type="number"
                    ref="textValue"
                    placeholder="value in ether"
                    style={{width: (isInputs && isPayable ? 30 : isPayable ? 60 : 0) + '%'}}
                />));
        }

        return inputArray;
    }

    renderResults() {
        if (!this.state.results || this.state.results.length == 0) {
            return;
        }
        return this.state.results.map((result) => {
                if (result instanceof Error) {
                    return (
                        <div>
                            {result.name}
                            <hr/>
                        </div>
                    )
                }
                else {
                    if (this.props.abielem.constant) {
                        return (
                            <div>
                                <div>
                                    <strong>Value:</strong>
                                    {result.value.toString()}
                                </div>
                                <hr/>
                            </div>);
                    } else {
                        return (
                            <div>
                                <div>
                                    <strong>Result:</strong>
                                    <pre>{"{" + JSON.stringify(result.value).replace(/,|{|}/gi, '\n') + "}"}</pre>
                                </div>
                                <hr/>
                            </div>);
                    }
                }
            }
        );
    }

    onClickFunction() {
        try {
            let name = this.props.abielem.name;
            let argArray = new Array();
            if (this.refs.textInput) {

                argArray = this.refs.textInput.value.trim().split(',');
            }

            argArray.push({from: web3.eth.defaultAccount});
            if(this.props.abielem.payable){
                argArray.push({value: (parseInt(this.refs.textValue.value) * 1000000000000000000).toString()});
            }
            let result = this.props.abielem.constant?this.props.contractRealization[name].call.apply(null,argArray):web3.eth.getTransactionReceipt(this.props.contractRealization[name].sendTransaction.apply(null, argArray));
            let newResult = this.state.results;
            if(!this.refs.textInput&&this.props.abielem.constant){
                newResult = new Array();
            }
            newResult.push({
                value: result,
            });
            this.setState({
                results: newResult,
            })
        }catch(err){
            let newResult = this.state.results;
            newResult.push(err);
            this.setState({
                results: newResult,
            })
        }
    }
}


ContractFunc.propTypes = {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    contractRealization: PropTypes.object.isRequired,
    abielem:PropTypes.object.isRequired,
};
