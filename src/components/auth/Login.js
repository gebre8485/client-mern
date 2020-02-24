import React, {Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
    const [loginForm, setloginForm] = useState({
        email: '',
        password: ''
    });
    const onChange = (e) =>{
        setloginForm({...loginForm, [e.target.name]: e.target.value});
    }
    const onSubmit = async e =>{
        e.preventDefault();
        const newUser = {
            email, password
        };
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const body = JSON.stringify(newUser);
        const res = await axios.post('/user/login', body, config);
        console.log(res.data);
    }
    const {email, password} = loginForm;
    return ( 
        <div>
            <Fragment>
      <div className="alert alert-danger">
        Invalid credentials
      </div>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e =>onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e =>onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </Fragment>
        </div>
     );
}
export default Login;