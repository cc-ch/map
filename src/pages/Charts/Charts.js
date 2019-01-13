import React, {Component} from 'react';
import {increment, decrement, reset} from 'actions/counter';

import {connect} from 'react-redux';

import './Charts.css'

class Counter extends Component {
    render() {
        return (
            <div className="ConterlButton">
                <ul className="clearfix">
                    <li onClick={() => this.props.increment()}>北京</li>
                    <li onClick={() => this.props.decrement()}>上海</li>
                    <li onClick={() => this.props.reset()}>南京</li>
                </ul>

                <div>当前位置{this.props.coordinate.count[0]}  {this.props.coordinate.count[1]}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        coordinate: state.coordinate
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment())
        },
        decrement: () => {
            dispatch(decrement())
        },
        reset: () => {
            dispatch(reset())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);