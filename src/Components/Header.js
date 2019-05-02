import React , {Component} from 'react';

import axios from 'axios';


export default class Header extends Component {
    state = {
      webs: []
      
     
    }
  
    componentDidMount() {
      axios.get(`https://api.mlab.com/api/1/databases/una-test-lab/collections/pages?apiKey=12KfjNX97_amx0iUdS2I_eitAy3jSaOb`)
        .then(res => {
          const webs = res.data;
          this.setState({ webs });
        })
    }
  
    render() {

            return (
console.log(this.state.webs),
<div>
           <ul >
          {this.state.webs ?  this.state.webs.map(web => <li key={web.id} >{web.pages}</li>):' a'}
        </ul>


        </div>
       
      )
    }
  }