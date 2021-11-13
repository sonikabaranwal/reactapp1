import React,{Component} from "react";

class App extends Component{
  state = {
    showMessage: false
  }
  onButtonClickHandler = () => {
   this.setState({showMessage: true});
  };

  render(){ 
    return(<div className="App">
     {this.state.showMessage && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
      <button id="click" onClick={this.onButtonClickHandler}>Enter</button>
    </div>);

  }
}

export default App;