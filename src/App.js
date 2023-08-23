import React, { Component } from 'react';
import './App.css';
import Login from './Components/Authentication/Login';
import SignUp from './Components/Authentication/SignUp';
import { AuthProvider } from './Components/Authentication/Context/Auth_Context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Email_verification from './Components/Authentication/Email_verification';
import Main_screen from './Components/Application/Main_screen';
import Profile from './Components/Application/Application_components/Profile';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      loaded: false,
    };
  }
  componentDidMount(){
    onAuthStateChanged(auth,(user)=>{
      if(!user){
        this.setState({
            loggedIn:false,
            loaded:true
        })
      }
      else {
        if(user.emailVerified==false){
          this.setState({
            emailVerified:true,
            user:user,
          })
        }
        this.setState({
          loggedIn:true,
          loaded:true,
          user:user,
        })
      }
    })
  }

  

  render() {
    const { loaded,loggedIn,emailVerified,user } = this.state;

    if(!loaded){
      return(
        <div>Loading</div>
      )
    }
    if(loggedIn && emailVerified){
      return(
      <AuthProvider>
        <Email_verification  user={user}/>
      </AuthProvider>
      )
    }
    if(loggedIn){
      return(
        <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' Component={Main_screen}/>
            <Route path='/profile' Component={Profile}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      )
    }
    if(!loggedIn){
      return (
        <>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/Signup' Component={SignUp}/>
              <Route path='/' Component={Login}/>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
        </>
      );
    }
    
  }
}

export default App;
/**
 * 
 *  <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' Component={Main_screen}/>
              <Route path='/profile' Component={Profile}/>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
 * 
 * 
 */