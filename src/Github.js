import React, { Component } from 'react';
import Profile from './Profile';
import Search from './Search';

const API = 'https://api.github.com/users';

class Github extends Component {
  constructor(props){
    super(props)
  
    this.state = {  
      username: 'neerajdoharey',
      name: '',
      avatar: '',
      repos: '',
      followers: '',
      following: '',
      homeURL: '',
      notFound: '',
      location:''
    }
  }

  getProfile(username){
    let finalURL = `${API}/${username}`;
    fetch(finalURL)
      .then((result) => result.json())
      .then((data) => {
        this.setState({  
          username: data.login,
          name: data.name,
          avatar: data.avatar_url,
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          homeURL: data.html_url,
          notFound: data.message,
          location: data.location
        })
      })
      .catch((error) =>  console.log('Error in Fetching data'))
  }

  componentDidMount(){
    this.getProfile(this.state.username)
  }

  render() {
    return (
      <div>
        <section id='card'>
          <Search searchProfile={this.getProfile.bind(this)}/>
          <Profile userData={this.state} />
        </section>
      </div>
    );
  }
}

export default Github;
