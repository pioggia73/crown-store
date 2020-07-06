import React from 'react';
import { useHistory } from 'react-router-dom';
import firebase, { app } from 'firebase';
import {AuthContext} from '../context/user';
import {signInWithGoogle, auth} from '../firebase/firebase.utils';
import FormInput from '../components/FormInput';
import CustomButton from './CustomButton';

const SignIn = () => {

   //const history = useHistory();

   //const{user, setUser} = React.useContext(AuthContext)
   
   // ****** state ***** //
   const [email, setEmail] = React.useState('');
   const [password, setPassword] = React.useState('');

   // const handleLogin = useCallback(
   //    async event => {
   //    event.preventDefault();
   //    const { email, password } = event.target.elements
   //    try {
   //       await firebase
   //          .auth()
   //          .signInWithEmailAndPassword(email.value, password.value);
   //       history.push('/shop')
   //    } catch (error) {
   //       alert(error)
   //    }
   // }, [history]);

   // const {currentUser} = React.useContext(AuthContext);
   // if (currentUser) {
   //    return <Redirect to='/shop'/>
   // }
   
//    const handleSubmit = event => {
//       event.preventDefault();

//       setEmail('');
//       setPassword('');
//  }

   const handleSubmit = async event => {
      event.preventDefault();
      try {
         await auth.signInWithEmailAndPassword(email, password)
         setEmail('');
         setPassword('');
      } catch (error) {
         console.log(error)
      }
   };

   return (
      <div className='sign-in'>
         <h2>I already have an account</h2>
         <span>sign in with your email and password</span>
         
         <form onSubmit={handleSubmit}>
            <FormInput
               name='email' 
               type='email' 
               value={email} 
               label='email'
               onChange={event => setEmail(event.target.value)}
               required
            />
            <FormInput 
               name='password' 
               type='password' 
               value={password}
               label='password'
               onChange={event => setPassword(event.target.value)}
               required 
            />
            <div className='buttons'>
            <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>sign in with Google</CustomButton>
            <CustomButton type='submit'>sign in</CustomButton>
            </div>
         </form>
      </div>
   )
};

export default SignIn;
