import React from 'react'

const interval = 100

export default class ReacTimer extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            count: 0,
            isCounting: false,
        }
    }
    
    componentDidMount() {}
    
    
    componentDidUpdate() {}

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    handleStart = () => {
        if (!this.state.isCounting) {
            this.timerId = setInterval(() => this.increment(), 1000 / interval)
        }
        this.setState({isCounting: true})
    }
  
    handleStop = () => {
        if (this.state.isCounting === true) {
            clearInterval(this.timerId);
        }
        this.setState({isCounting: false})
    }
  
    handleReset = () => {
        if (this.state.count !== 0) {
            this.setState({count: 0})
        }
    }

    increment() {
        this.setState((prevState) => ({ count: Number(prevState.count) + 1,}))
    }
    
    render() {
        const value = this.state.count
        const milliSecond = value % interval
        return (
            <div className="ReacTimer">
                <h1>React Timer</h1>
                <h3>  
                    <span>{`${Math.round(value / interval / 60 / 60)}`} : </span>
                    <span>{`${Math.round(value / interval / 60)}`} : </span>
                    <span>{`${Math.round(value / interval)}`} . </span>
                    <span>{`${milliSecond}` < 10 ? `0${milliSecond}` : `${milliSecond}`}</span>
                </h3>
                {!this.state.isCounting ? (
                    <button type="button" onClick={this.handleStart}>Start</button>
                ) : (
                    <button type="button" onClick={this.handleStop}>Stop</button>
                )}
                <button type="button" onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}