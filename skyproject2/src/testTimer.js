const interval = 100;

class Timer extends React.Component {
  // Инициализация состояния
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  

  componentDidMount() {
  // заводим таймер
    this.timerId = setInterval(() => this.increment(), 1000 / interval);
  }
  increment() {
    this.setState({ value: this.state.value + 1 });
  }
  
  render() {
    const value = this.state.value;
    return (
      <div>
       <p>Timer:</p>
        <p>
         <span>{`${Math.round(value / interval / 60 / 60)}`} : </span>
          <span>{`${Math.round(value / interval / 60)}`} : </span>
          <span>{`${Math.round(value / interval)}`} . </span>
          <span>{`${value % interval}`}</span>
        </p>
      </div>
    );
  }
}

ReactDOM.render(<Timer />, document.getElementById("root"));


render() {
    const count = this.state.count
    return (
        <div className="ReacTimer">
            <h1>React Timer</h1>
            <h3> 
                <span>{`${Math.round(count / interval / 60 / 60)}`} : </span>
                <span>{`${Math.round(count / interval / 60)}`} : </span>
                <span>{`${Math.round(count / interval)}`} . </span>
                <span>{`${count % interval}`}</span>
            </h3>
            {/* {!this.state.isCounting ? (
                <button onClick={this.handleStart}>Start</button>
            ) : (
                <button onClick={this.handleStop}>Stop</button>
            )}
            <button onClick={this.handleReset}>Reset</button> */}
        </div>
    );
}