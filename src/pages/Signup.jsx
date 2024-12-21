import React, { useState } from 'react'
import { Link } from 'react-router-dom';


export default function Signup() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        conformPassword: ""
    });
    const [error, setError] = useState("");

    function handleChange(e){
        const {name, value}  = e.target;
        setFormData({...formData, [name]: value});
    }

    function handleSubmit(e){
        e.preventDefault();

        if(formData.password != formData.conformPassword){
            setError("Password do not match");
            return;
        }

        setError("");
        console.log(formData);
    }

  return (
    
    <section className="page-container">
        <div className="form-container">
            <h1 className='form-header-text'>Create your account</h1>
            <form >
                <div className="form-element">
                    <label htmlFor='username' > Username  </label>
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
                    <label htmlFor='emal'>Email</label>
                    <input 
                        className='input-field'
                        type="email"
                        id= "email"
                        name='email'
                        value={formData.email}
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
                <div className="form-element">
                    <label htmlFor='conformPassword'>Conform password</label>
                    <input 
                        className='input-field'
                        type="password"
                        id= "conformPassword"
                        name='conformPassword'
                        value={formData.conformPassword}
                        onChange={handleChange}
                        required 
                    />
                </div>
                {error && <p className='error'>{error}</p>}
                <button 
                    type='submit'
                    onClick={handleSubmit}
                    >
                    Sign Up
                </button>
                <button><i className="fa-brands fa-google"></i>Signup with Google</button>
            </form>
            <div className='form-p'>
                <p>Already have an account. <Link to="/login">Login</Link> </p>
            </div>
        </div>
    </section>
  )
}
