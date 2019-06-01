import React, { Component } from 'react';

class Profile extends Component {
 
  render() {
    let userdata = this.props.userData;
    let followers = `${userdata.homeURL}/followers`;
    let following = `${userdata.homeURL}/following`;
    let repo = `${userdata.homeURL}/repositories`;

    if(userdata.notFound === 'Not Found'){
      return (
        <div className="mt-4">
          <h2>User Not Found</h2>
        </div>
      );
    }else{
      return (
        <div className="mt-4">
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <div className="card text-center" >
                <div className="card-body">
                  <img src={userdata.avatar} alt={userdata.name} className="rounded-circle avatar " />
                  <h3 >{userdata.username}</h3>
                  <h5 className="card-title">{userdata.location}</h5>
                  <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Repository
                      <span className="badge badge-primary badge-pill">{userdata.repos}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Follower
                      <span className="badge badge-primary badge-pill">{userdata.followers}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Following
                      <span className="badge badge-primary badge-pill">{userdata.following}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }  
  }
}

export default Profile;
