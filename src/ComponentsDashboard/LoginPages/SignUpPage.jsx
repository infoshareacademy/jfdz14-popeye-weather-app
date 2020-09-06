import React from 'react';
import style from './LoginPage.module.css';
import { PopeyeImg } from '../Dashboards/PopeyeImg';
import { LoginPageFooter } from './LoginFooter';
import { Input } from './Input';
import LoginButton from './LoginButton';
import { NameOfApp } from '../Dashboards/NameOfApp';
import { Divider } from '@material-ui/core';
import BackButton from './BackButton';

import { Redirect, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PageWrapper from "./PageWrapper";
import firebase from "firebase";

// const SignUpPage = () => {
//   return (
//     <div className={style.loginPage}>
//       <PopeyeImg />
//       <NameOfApp paragraph={'Register to use application'} />
//       <Input type={'email'} placeholder={'Enter your e-mail'} />
//       <Divider />
//       <Input type={'text'} placeholder={'Enter your name and surname'} />
//       <Divider />
//       <Input type={'text'} placeholder={'Enter your login'} />
//       <Divider />
//       <Input type={'password'} placeholder={'Enter your password'} />
//       <Divider />
//       <Input type={'password'} placeholder={'Repeat your password'} />
//       <LoginButton toLogIn text={'Sign Up'} urlName={'home'} />
//       <BackButton />
//       <LoginPageFooter />
//     </div>
//   );
// };



class SignUpPage extends React.Component {
  state = {
    login: "",
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

    if (this.props.isSignUp) {
      firebase.auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          this.setState({
            redirect: true
          })
        })
        .catch((error) => {
          alert(error.message);
        })
    } else {
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
  }


  render() {
    if (this.state.redirect) {
      return <Redirect to='/home' />
    }

    return (
      <div className={style.loginPage}>
        <PopeyeImg />

        <PageWrapper title={this.props.isSignUp ? 'Register to use application' : 'Sign In'}>
          <Form className='m-4 text-left' onSubmit={this.handleOnSubmit}>

            <Form.Group controlId='formGroupLogin'>
              <Form.Label>Login</Form.Label>
              <Form.Control
                type='text'
                placeholder="Enter your login"
                name='login'
                value={this.state.login}
                onChange={this.handleOnChange} />
            </Form.Group>

            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                name='email'
                value={this.state.email}
                onChange={this.handleOnChange} />
            </Form.Group>

            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name='password'
                value={this.state.password}
                onChange={this.handleOnChange} />
            </Form.Group>

            <Button style={{ backgroundColor: 'navy' }} type='submit'>

              {this.props.isSignUp ? 'Register to use application' : 'Sign Up'}

            </Button>
            {this.props.isSignUp
              ? <Link to='/signin'>Already have an account? Sign In</Link>
              : <Link to='/signup'>Don't have an account? Sign Up</Link>
              
            }
          </Form>
        </PageWrapper>
      </div>
    )


  }
}


export default SignUpPage;
