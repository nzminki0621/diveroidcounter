import './App.css';
import React from 'react';
import png from './png.png';
import logo from './new_brand.png';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.updatinger = this.updatinger.bind(this);
  }
  state = {
    isLoading: true,
    
    
  }

  getKick = async () => { 
    
    fetch(`https://cors-anywhere.herokuapp.com/https://www.kickstarter.com/projects/search.json?search=&term=mobile%20a%20better`)
    // We get the API response and receive data in JSON format...
    .then(response => response.json())
    // ...then we update the users state
    .then(data =>
      this.setState({
        pledge:data.projects[0].pledged,
        backers: data.projects[0].backers_count,
        isLoading: false,
      })
    )

    console.log("did it");
  }
  
  updatinger(){
    fetch(`https://cors-anywhere.herokuapp.com/https://www.kickstarter.com/projects/search.json?search=&term=mobile%20a%20better`)
    // We get the API response and receive data in JSON format...
    .then(response => response.json())
    // ...then we update the users state
    .then(data =>
      this.setState({
        pledge:data.projects[0].pledged,
        backers: data.projects[0].backers_count,
        isLoading: false,
      }))
    console.log("did it too");
    console.log("good job");
  }

  componentDidMount(){
    this.getKick();
    setInterval(this.getKick, 60000);
    }
  

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="divlogo" alt="divlogo" />
        <img src={png} className="App-logo" alt="logo" />
        <div className="pledgediv">
          {this.state.isLoading ? 
            <span className="pledge">Loading<br/>...</span>:
            <p className="pledge">
            $ {String(this.state.pledge)}<br/>{String(this.state.backers)} Backers
            </p>
          }
        </div>
        <a
          className="App-link"
          href="https://kickstarter.diveroid.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          DIVEROID
        </a>
      </header>
    </div>
    );
  }
}
export default App;
