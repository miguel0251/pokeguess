import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isOn: false,
      start: 0,
    };
    this.starTimer = this.starTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  starTimer() {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.start,
    });
    this.timer = setInterval(
      () =>
        this.setState({
          time: Date.now() - this.state.start,
        }),
      1
    );
  }

  stopTimer() {
    this.setState({ isOn: false });
    clearInterval(this.timer);
  }

  resetTimer() {
    this.setState({ time: 0, isOn: false });
  }

  render() {
    let start =
      this.state.time === 0 ? (
        <button onClick={this.starTimer} className='start'>
          start{' '}
        </button>
      ) : null;

    let stop =
      this.state.time === 0 || !this.state.isOn ? null : (
        <button onClick={this.stopTimer} className='start'>
          stop
        </button>
      );

    // let resume =
    //   this.state.time === 0 || this.state.isOn ? null : (
    //     <button onClick={this.starTimer} className='start'>
    //       resume
    //     </button>
    //   );

    let reset =
      this.state.time === 0 || this.state.isOn ? null : (
        <button onClick={this.resetTimer} className='start'>
          reset
        </button>
      );

    return (
      <div>
        <h3>timer:{this.state.time}</h3>
        {start}
        {/* {resume} */}
        {stop}
        {reset}
      </div>
    );
  }
}

export default Timer;
