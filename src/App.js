import React, {Component} from 'react';
import Body from './body';



class App extends Component {


  HazClic = () => {
        let {title,data} = this.props;
    alert(data);
    console.log(data);
  }

  render() {
    let {title,data} = this.props;
    return (

      <div>
        <h1>{title}</h1>
        <Body
          handleClick={this.HazClic}
          />
        <button onClick={this.HazClic}>clic boton directo</button>
      </div>
    );
  }
}

export default App;
