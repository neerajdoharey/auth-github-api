import React, { Component } from 'react';
import Auth0Lock from 'auth0-lock';
import './bootstrap.min.css';
import './App.css';
import Github from './Github';
import Header from './Components/Header';

class App extends Component {
  
  constructor(props){
    super(props)

    this.state = {
      accessToken: '',
      profile: {}
    };

  }

  static defaultProps = {
    clientID: 'aIDEzWKpZKDyD1RBzCoaB7D0zVemYmcC',
    domain: 'neerajdoharey.auth0.com'
  }

  
  componentWillMount(){
    this.lock = new Auth0Lock(this.props.clientID, this.props.domain)
    this.lock.on('authenticated', (authResult) => {
      this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        
        if(error){
          console.log(error);
          return;
        }
        console.log(profile);
        this.setProfile(authResult.accessToken, profile)
      });
      console.log(authResult);
    });

    this.getProfile();
  }

  getProfile(){
    var accessToken = localStorage.getItem('accessToken');
    if(accessToken != null ){
      this.setState({
        accessToken: localStorage.getItem('accessToken'),
        profile: JSON.parse(localStorage.getItem('profile'))
      });
    }

  }

  setProfile(accessToken, profile){
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('profile', JSON.stringify(profile));

    this.setState({
      accessToken: localStorage.getItem('accessToken'),
      profile: JSON.parse(localStorage.getItem('profile'))
    });
  }

  showLock(){
    this.lock.show();
  }

  logout(){
    this.setState({
      accessToken:'',
      profile:{}
    }, () => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('profile');
    });
  }

  render() {
    let gitty;
   
    if( this.state.accessToken){
      gitty = <Github />
    }else{
      gitty = "Click on login to view Github Viewer"
    }
    return (
      <div className="App">
        <Header onLogin={this.showLock.bind(this)} logout={this.logout.bind(this)} accessToken={this.state.accessToken} lock={this.lock} profile={this.state.profile} />
        <div className='container'>
          {gitty}
        </div>
      </div>
    );
  }
}


export default App;
