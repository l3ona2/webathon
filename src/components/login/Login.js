import React from 'react'
import {useForm} from 'react-hook-form'

import axios from 'axios'
function Login() {
  let {register,handleSubmit,formState:{errors}}=useForm()
  let addNewUser=(newUser)=>{
    console.log(newUser);
  }
  return (
    <div className='login-form'>
      <div className='row mt-5'>
        <div className='col-11 col-sm-8 col-md-6 mx-auto'>
        <h1 className='head text-center mb-4'>Log-in</h1>
      <form onSubmit={handleSubmit(addNewUser)}>
        <div className='mb-3'>
          <input type="text" id='name' className='form-control p-3' placeholder='Username'
          {...register("name",{required:true})}></input>
          {/*Validation */}
          {errors.name?.type==="required"&&
          <p className='text-danger'>*Username is required</p>}
        </div>
        <div className='mb-3'>
          
          <input type="password" id='password' className='form-control p-3' placeholder='Password'
          {...register("password",{required:true,minLength:6})}></input>
          {errors.password?.type==="required"&&
          <p className='text-danger'>*Password is required</p>}
          {errors.password?.type==="minLength"&&
          <p className='text-danger'>*Password must be atleast 6 characters long</p>}
        </div>
       
        <button type="submit"  className='btn bg-dark text-white'>Login</button>
      </form>
        </div>
      </div>
      
    </div>
  )
}

export default Login;