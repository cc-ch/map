import React, {Component} from 'react';
// import {beijing, shanghai, nanjing, reset} from 'actions/counter';

import {connect} from 'react-redux';

import './Charts.css'
import { beijing, shanghai, nanjing, reset } from '../../redux/actions/counter';

// mock data
import axios from 'axios';
import '../../../mock/mock';


class Counter extends Component {
    render() {
        return (
            <div className="ConterlButton">
                <ul className="clearfix">
                    <li onClick={() => this.props.beijing()}>北京</li>
                    <li onClick={() => this.props.shanghai()}>上海</li>
                    <li onClick={() => this.props.nanjing()}>南京</li>
                    <li onClick={() => this.props.reset()}>重置</li>
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
        beijing: () => {
            dispatch(beijing())
        },
        shanghai: () => {
            dispatch(shanghai())
        },
        nanjing: () => {
            dispatch(nanjing())
        },
        reset: () => {
            axios.get('/api/user')
                .then((response) => {
                    console.log(response.data)
                    // return {
                    //     count: response.data.count
                    // };
                    dispatch(reset(response.data))

                })
                .catch(function(error) {
                    console.log(error);
                })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);