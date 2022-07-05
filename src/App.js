import React from "react";

import Footer from './profile/Footer';
import  Component from './profile/Component' ; 
import More from './profile/More';

import {Button} from 'react-bootstrap';

import './App.css'; 
import "bootstrap/dist/css/bootstrap.min.css"; 

class App extends React.Component {
  
  state = {
    show : false,
  };

  handleShowPerson = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render(){
  return (
    <div className="App">

         <Component/>

    {this.state.show === true ?  <More/>   : null}
    
   <Button variant="primary" onClick={this.handleShowPerson} >
    {this.state.show === true ?  "رجــوع" : " ...إقرأ المـزيـد"}
            </Button> 
     <br></br>
  
    <Footer/>
    </div>
  );
}
}
export default App;
