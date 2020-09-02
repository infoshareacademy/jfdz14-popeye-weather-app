import React from 'react';
import style from './LoginPage.module.css';
import { PopeyeImg } from '../Dashboards/PopeyeImg';
import { LoginPageFooter } from './LoginFooter';
import { Input } from './Input';
import LoginButton from './LoginButton';
import { NameOfApp } from '../Dashboards/NameOfApp';
import { Divider } from '@material-ui/core';
import BackButton from './BackButton';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import firebase from "firebase";

// const SignInPage = () => {
//   return (
//     <div className={style.loginPage}>
//       <PopeyeImg />
//       <NameOfApp paragraph={'Sign in to use application'} />
//       <Input type={'text'} placeholder={'Enter your email address'} />
//       <Divider />
//       <Input type={'password'} placeholder={'Enter your password'} />
//       <LoginButton toLogIn text={'Sign In'} urlName={'home'} />
//       <BackButton />
//       <LoginPageFooter />
//     </div>
//   );
// };


class SignInPage extends React.Component {
  state = {
    email: "",
    password: "",
    redirect: false,
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleOnSubmit = (event) => {
    event.preventDefault();

    firebase.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((userData) => {
        this.setState({
          redirect: true
        })
      })
      .catch((error) => {
        alert(error.message);
      })
  }

  
  render() {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }

    return (
      <div className={style.loginPage}>
        <PopeyeImg />
        <NameOfApp paragraph={'Sign in to use application'} />
        <Input
          type={'text'}
          placeholder={'Enter your email address'}
          onChange={this.handleOnChange}
          value={this.state.email}
        />
        <Divider />
        <Input
          type={'password'}
          placeholder={'Enter your password'}
          onChange={this.handleOnChange}
          value={this.state.password}
        />
        <LoginButton
          toLogIn text={'Sign In'}
          urlName={'home'}
          onSubmit={this.handleOnSubmit}
        />
        <BackButton />
        <LoginPageFooter />
      </div>
    );


  }
}

export default SignInPage;
