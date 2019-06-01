import React, { Component } from 'react';

class Search extends Component {

  submit(event){
    event.preventDefault();
    let value = this.refs.username.value;
    this.props.searchProfile(value);
    this.refs.username.value='';
  }

  //  constructor(props){
  //  super(props)
  //}
  
  render() {
    return (
      <div>
        <h1></h1>
        <form className="mt-5"  onSubmit={this.submit.bind(this)}>
          <div className="row">
            <div className="col-10">
              <input className="form-control mr-sm-2 form-control-lg"  type="search" ref="username" id="username" placeholder="Enter username" aria-label="Search" />
            </div>
            <div className="col-2">
              <button className="btn btn-outline-success my-2 my-sm-0 btn-lg" type="submit">Search</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
