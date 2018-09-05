import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle } from 'reactstrap';


class App extends Component {
  constructor(){
    super();
    this.state = {
    }
  }

  function()
  {
    var url = `https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke`;
    axios.get(url).then((getData)=>{
     this.setState({
      hellow: getData.data.hellow,
      punchline: getData.data.punchline,
      halo: getData.data.halo,
      setup: getData.data.setup
      

      })
    })
    
  }
  render() {
    console.log(this.state.punchline)
    return (
    
    <center>
      <div className="App pt-5">
      <card>
            <div className="card text-right" style={{width: '500px'}}>
              <div className="card-body">
              <h1>{this.state.setup}</h1>
              <h3>{this.state.punchline}</h3>
              <Button class="btn btn-med red" onClick={()=>{this.function()}}> Reload <i class="material-icons">rotate_right</i></Button>       
              </div>
            </div>
      </card>
        </div>
      </center>
 
    );
  }
}

export default App;
