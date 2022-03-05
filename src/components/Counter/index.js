import React from "react";
import { connect } from "react-redux";
import { actionDec, actionInc } from "../../redux/action";

class Counter extends React.Component {
    constructor() {
        super();
        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleDec = this.handleDec.bind(this);
    }
    handleClickAdd() {
        this.props.dispatch(actionInc);
    }
    handleDec() {
        this.props.dispatch(actionDec);
    }

    render() {
        console.log(this.props);
        return(
            <div>
                <h1>{this.props.counter}</h1>
                <button onClick={this.handleClickAdd}>+</button>
                <button onClick={this.handleDec}>-</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        counter: state,
    };
};

export default connect(mapStateToProps)(Counter) ;