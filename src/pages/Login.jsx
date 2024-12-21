import React, { useState } from 'react'
import { Link } from 'react-router-dom';


export default function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  function handleSubmit(e){
    e.preventDefault();
    alert("Login successfully");
  }

  function handleChange(e){
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  return (
    <section className="page-container">
        <div className="form-container">
            <h1 className='form-header-text'>Login</h1>
            <form >
                <div className="form-element">
                    <label htmlFor='username' > Username/Email  </label>
                    <input 
                            className='input-field'
                            type="text"
                            id= "username"
                            name='username'
                            value={formData.username}
                            onChange={handleChange}
                            required 
                    />
                </div>
                <div className="form-element">
                    <label htmlFor='password'>Password</label>
                    <input
                        className='input-field' 
                        type="password"
                        id= "password"
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <button 
                    type='submit'
                    onClick={handleSubmit}
                    >
                    Longin
                </button>
                <button><i className="fa-brands fa-google"></i> Login with Google</button>
            </form>
            <div className='form-p'>
                <p>Don't have an Account? <Link to="/sign-up"> Signup</Link> </p>
            </div>
        </div>
    </section>
  )
}
