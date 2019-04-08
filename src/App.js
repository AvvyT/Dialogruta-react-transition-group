import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showMessage: false };
    this.show = this.show.bind(this);
  }

  show() {
    this.setState({ showMessage: true });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>CSSTransition</h1>
          <button
            onClick={this.show}
          >Show</button>

          <CSSTransition
            classNames='message'
            timeout={200}
            // används om vi vill ta bort elementet från DOM:en efter det döljts
            unmountOnExit
            // in är en Boolean som bestämmer om elementet ska visas eller döljas
            in={this.state.showMessage} >
            <div className='message'>
              <p>Hello<button
                className='style'
                onClick={() => this.setState({ showMessage: false })}>&times;
              </button></p>
            </div>
          </CSSTransition>

        </header >
      </div >
    );
  }
}

export default App;
