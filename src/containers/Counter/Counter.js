import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import { connect } from 'react-redux';
import Footer from '../../components/Footer/Footer';
import Actions from '../../store/actions';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.count} />
                <CounterControl label="Increment" clicked={() => {this.props.counterChangedHandler(Actions.INC);this.props.storeResult(Actions.STORE, this.props.count)}}/>
                <CounterControl label="Decrement" clicked={() => {this.props.counterChangedHandler( Actions.DEC );this.props.storeResult(Actions.STORE, this.props.count)}}  />
                <CounterControl label="Add 5" clicked={() => {this.props.counterChangedHandler( Actions.ADD, 5 );this.props.storeResult(Actions.STORE, this.props.count)}}  />
                <CounterControl label="Subtract 5" clicked={() => {this.props.counterChangedHandler( Actions.SUB, 5 );this.props.storeResult(Actions.STORE, this.props.count)}}  />
                <ul>
                    {this.props.results.map(result => {
                        return <li key={result.timestamp} onClick={() => this.props.deleteResult(result.timestamp)}>
                            <span>Type: {result.operation}</span>
                            <span>Count: {result.value}</span>
                        </li>
                    })}
                </ul>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.counter.count,
        results: state.result.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        counterChangedHandler: (type, payload) => dispatch({type: type, value: payload}),
        storeResult: (type, payload) => {
            let timestamp = new Date().getTime();
            return dispatch({type: type, value: payload, timestamp: timestamp});
        },
        deleteResult: (timestamp) => dispatch({type: Actions.DEL, value: timestamp})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);