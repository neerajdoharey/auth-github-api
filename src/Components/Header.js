import React, { Component } from 'react';
import { Navbar, Nav, Dropdown, Collapse } from 'bootstrap-4-react';
class Header extends Component {
  onLogin(){
    this.props.onLogin();
  }

  logout(){
    this.props.logout();
  }


  render() {
    let page;
    if(this.props.accessToken === ''){
      page =  <Nav.Link onClick={this.onLogin.bind(this)} href="#">Login</Nav.Link>
    }else{
      page =  <Nav.Link onClick={this.logout.bind(this)} href="#">Logout</Nav.Link>
    }
    return (
      <Navbar expand="lg" light bg="light">
        <Navbar.Brand href="#">
          GitApp
        </Navbar.Brand>
        <Navbar.Toggler target="#navbarSupportedContent" />
        <Collapse navbar id="navbarSupportedContent">
          <Navbar.Nav mr="auto">
            <Nav.Item active>
              <Nav.Link href="#">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              {page}
            </Nav.Item>
          </Navbar.Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;
