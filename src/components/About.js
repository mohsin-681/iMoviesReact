import React from 'react'

const About = () => {
  return (
    <div style={{backgroundColor: '#f8f9fa'}} >
      <div class="d-flex bd-highlight mx-3 my-3" >
        {/* <strong role="status">Loading...</strong> */}
        <h1 className='p-2 flex-fill bd-highlight'>Coming Soon...</h1>
        <h1 className='p-2 flex-fill bd-highlight'>Please Wait...</h1>
        <div class="spinner-border ms-auto" aria-hidden="true"></div>
      </div>
      <form className='mx-3'>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default About
