import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {setAlert} from '../../actions/alert';
import propTypes from 'prop-types';
const Signup = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });
    const {name, email, password, password2} = formData;
    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.password2){
          props.setAlert("passwords don't match", "danger");
        }else{
          console.log("success")
        }
        // const newUser = {
        //     name, email, password, password2
        // };
        // const config = {
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // }

        // const body = JSON.stringify(newUser);
        // const res = await axios.post('/user/registeration', body, config);
        // console.log(res.data);
    }
    return ( 
        <Fragment>
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input 
            type="text" 
            placeholder="Name" 
            name="name" 
            value={name}
            onChange={(e) => onChange(e)}
            required />
          </div>
          <div className="form-group">
            <input 
            type="email" 
            placeholder="Email Address" 
            name="email"
            value={email}
            onChange={(e) => onChange(e)} />
            <small className="form-text"
              >This site uses Gravatar so if you want a profile image, use a
              Gravatar email</small
            >
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              minLength="6"
              value={password}
            onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              minLength="6"
              value={password2}
            onChange={(e) => onChange(e)}
            />
          </div>
          <input 
          type="submit" 
          className="btn btn-primary" 
          value="Register"
 />
        </form>
        <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
          {console.log("the props are ", props.setAlert)}
        </p>
      </Fragment>
     );
}
 Signup.propTypes = {
   setAlert: propTypes.func.isRequired,
 }
export default connect(null, {setAlert})(Signup);