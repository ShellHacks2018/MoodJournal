import React from 'react'
import PropTypes from 'prop-types'

const LandingForm = (props) => {
  return (
    <div className='container my-5'>
      <div className='row align-self-center d-flex base justify-content-center'>
        <form onSubmit={props.handleSubmit}>
          <div className='form-group'>
            <label>Email Address</label>
            <input type='email' className='form-control'
              value={props.email} onChange={props.handleEmailChange}
              aria-describedby='emailHelp' placeholder='Enter email' />
            <small id='emailHelp' className='form-text text-muted'>We may share your email with anyone else.</small>
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input type='password' className='form-control'
              value={props.password} onChange={props.handlePasswordChange}
              placeholder='Password' />
          </div>
          <button type='submit' className='btn btn-primary'>Register</button>
        </form>
      </div>
      <button className='mx-2 btn btn-primary' onClick={props.loginHandler}>Login</button>
    </div>
  )
}

LandingForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleEmailChange: PropTypes.func,
  handlePasswordChange: PropTypes.func,
  loginHandler: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string
}

export default LandingForm
