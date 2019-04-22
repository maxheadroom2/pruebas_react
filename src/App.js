import React, {Component} from 'react';
import Body from './body';



class App extends Component {
// super (props){
//   this.handleClick =  this.handleClick.bind(this);
// }


  HazClic = () => {
    alert('aguas');
    console.log("oks");
  }

  render() {
    return (
      <div>
        <Body
          handleClick={this.HazClic}
          />
        <button onClick={this.HazClic}>clic</button>
      </div>

    );
  }
}

export default App;
