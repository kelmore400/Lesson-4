import React from "react";
import { connect } from "react-redux";
import { actionEng, actionUkr } from "./redux/action";

class Task2 extends React.Component {
    constructor(){
        super();
        this.changeToEnglish = this.changeToEnglish.bind(this);
        this.changeToUkrainian = this.changeToUkrainian.bind(this);
    }
    changeToEnglish(){
        this.props.dispatch(actionEng);
    }
    changeToUkrainian(){
        this.props.dispatch(actionUkr);
    }
    render(){
        return (
            <div className='redux-app'>
                <h2>{this.props.language}</h2>
                <button onClick={this.changeToEnglish}>English</button>
                <button onClick={this.changeToUkrainian}>Українська</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        language: state,
    };
};

export default connect(mapStateToProps)(Task2) ;