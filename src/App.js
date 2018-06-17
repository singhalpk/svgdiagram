import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      upele1:15,
      upele2:17,
      upele3:45,
      upele4:65,
      upele5:70,
    };

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);
}
 handleChange1(event) {
    this.setState({upele1: event.target.value});
  }
  handleChange2(event) {
    this.setState({upele2: event.target.value});
  }
  handleChange3(event) {
    this.setState({upele3: event.target.value});
  }
  handleChange4(event) {
    this.setState({upele4: event.target.value});
  }
  handleChange5(event) {
    this.setState({upele5: event.target.value});
  }

  render() {

    return (
      <div className='row'>
        <div style={{ marginLeft: 100}}>
            <div style={{ padding: 10}}>  
            <input type="text" value={this.state.upele1} name="upele1" onChange={this.handleChange1} /> 
            <p>Upper Elevation 1</p></div>
            <div style={{ padding: 10}}>  
            <input type="text" value={this.state.upele2} name="upele2" onChange={this.handleChange2} /> 
            <p>Upper Elevation 2</p></div>
            <div style={{ padding: 10}}>  
            <input type="text" value={this.state.upele3} name="upele3" onChange={this.handleChange3} /> 
            <p>Upper Elevation 3</p></div>
            <div style={{ padding: 10}}>  
            <input type="text" value={this.state.upele4} name="upele4" onChange={this.handleChange4} /> 
            <p>Upper Elevation 4</p></div>
            <div style={{ padding: 10}}>  
            <input type="text" value={this.state.upele5} name="upele5" onChange={this.handleChange5} /> 
            <p>Upper Elevation 5</p></div>
        </div>
        <svg height="768" width="768"  transform="rotate(270, 0, 0)">
          <input type="text" value={this.state.upele1} name="upele1" onChange={this.handleChange1} />
          <line x1={this.state.upele1*10} y1="494.5" x2="0" y2="494.5" stroke=" black" />
          <line x1={this.state.upele2*10} y1="497.75" x2={this.state.upele1*10} y2="494.5" stroke=" black" />
          <line x1={this.state.upele3*10} y1="497.75" x2={this.state.upele2*10} y2="497.75" stroke=" black" />
          <line x1={this.state.upele4*10} y1="497.75" x2={this.state.upele3*10} y2="497.75" stroke=" black" />
          <line x1={this.state.upele4*10} y1="497.75" x2={this.state.upele5*10} y2="497.75" stroke=" black" />
          <line x1="0" y1="512" x2={this.state.upele5*10} y2="512" stroke=" black" />
          <line x1={this.state.upele1*10} y1="529.5" x2="0" y2="529.5" stroke=" black" />
          <line x1={this.state.upele2*10} y1="526.25" x2={this.state.upele1*10} y2="529.5" stroke=" black" />
          <line x1={this.state.upele3*10} y1="526.25" x2={this.state.upele2*10} y2="526.25" stroke=" black" />
          <line x1={this.state.upele3*10} y1="526.25" x2={this.state.upele4*10} y2="526.25" stroke=" black" />
          <line x1={this.state.upele4*10} y1="526.25" x2={this.state.upele5*10} y2="526.25" stroke=" black" />
          <line x1="0" x2="0" y1="400" y2="624" stroke="black" stroke-width="1" stroke-linecap="square" stroke-dasharray="5, 5" />
          <line x1={this.state.upele1*10} x2={this.state.upele1*10} y1="400" y2="624" stroke="black" stroke-width="1" stroke-linecap="square" stroke-dasharray="5, 5" />
          <line x1={this.state.upele2*10} x2={this.state.upele2*10} y1="400" y2="624" stroke="black" stroke-width="1" stroke-linecap="square" stroke-dasharray="5, 5" />
          <line x1={this.state.upele3*10} x2={this.state.upele3*10} y1="400" y2="624" stroke="black" stroke-width="1" stroke-linecap="square" stroke-dasharray="5, 5" />
          <line x1={this.state.upele4*10} x2={this.state.upele4*10} y1="400" y2="624" stroke="black" stroke-width="1" stroke-linecap="square" stroke-dasharray="5, 5" />
          <line x1={this.state.upele5*10} x2={this.state.upele5*10} y1="400" y2="624" stroke="black" stroke-width="1" stroke-linecap="square" stroke-dasharray="5, 5" />
          
        </svg>
        <svg height="768">
          <text y="768" x="0" fill="black" >EL 0.0 MM</text>
          <text y={768-this.state.upele1*10} x="0" fill="black" >EL {this.state.upele1*1000} MM</text>
          <text y={768-this.state.upele2*10} x="0" fill="black" >EL {this.state.upele2*1000} MM</text>
          <text y={768-this.state.upele3*10} x="0" fill="black" >EL {this.state.upele3*1000} MM</text>
          <text y={768-this.state.upele4*10} x="0" fill="black" >EL {this.state.upele4*1000} MM</text>
          <text y={768-this.state.upele5*10} x="0" fill="black" >EL {this.state.upele5*1000} MM</text>
        </svg>
      </div>  
    );
  }
}

export default App;
