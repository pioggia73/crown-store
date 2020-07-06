import React from 'react';
// ****** components ***** //
import SignIn from '../components/SignIn';
import Register from '../components/Register';


const SignInAndSignUpPage = () => {
   return (
      <section className='section sign-in-and-up-section'>
         <SignIn />
         <Register />
      </section>
   )
}

export default SignInAndSignUpPage
