import React from 'react';
import {auth, createUserProfileDocument} from '../firebase/firebase.utils';
import {withRouter} from 'react-router';
import {useHistory} from 'react-router-dom';
import {AuthContext} from '../context/user';
import firebase from 'firebase';
import login from '../utils/login';
import FormInput from '../components/FormInput';
import CustomButton from './CustomButton';

 const Register = () => {

//    const history = useHistory();
//    // ****** state ***** //
   const [displayName, setDisplayName] = React.useState('')
   const [email, setEmail] = React.useState('');
   const [password, setPassword] = React.useState('');
   const [confirmPassword, setConfirmPassword] = React.useState('');


//    const handleSignUp = React.useCallback(async event => {

//       event.preventDefault();
//       const {email, password} = event.target.elements
//       try {
//          await firebase
//          .auth()
//          .createUserWithEmailAndPassword(email.value, password.value)
//          history.push('/shop')
//       } catch (error) {
//          alert(error)
//       }
//    }, [history]);

   const handleSubmit = async event => {

         event.preventDefault();
         if (password !== confirmPassword) {
            alert ("passwords do not match")
               return
         };
         try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName})
            setDisplayName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');

         } catch (error) {
            console.log(error)
         };
      }

   // handleChange = event => {
   //    const { value, name } = event.target;
   //    setDisplayName({ [name]: value })
   // };

   return (
       <div className='sign-up'>
          <h2>I do not have an account</h2>
          <span>register with your email and password</span>

          <form onSubmit={handleSubmit} className='sign-up-form'>

            <FormInput
               name='displayName'
               type='text'
               value={displayName}
               label='name'
               onChange={event => setDisplayName(event.target.value)}
               required
            />

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

            <FormInput
               name='confirmPassword'
               type='password'
               value={confirmPassword}
               label='confirm password'
               onChange={event => setConfirmPassword(event.target.value)}
               required
            />
             <CustomButton type='submit'>register</CustomButton>
          </form>
       </div>
    ) }

export default Register;

