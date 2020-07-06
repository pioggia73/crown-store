import React from 'react';
import firebase from 'firebase';
import { createUserProfileDocument } from '../firebase/firebase.utils';
//import login from '../utils/login';

// const UserContext = React.createContext();

//  function UserProvider({children}) {

//    const [user, setUser] = React.useState(null)

//     return (
//        <UserContext.Provider value = {user}>
//          {children}
//        </UserContext.Provider>
//     )
//  };

//  export  {UserProvider, UserContext};

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
   const [currentUser, setCurrentUser] = React.useState(null);

   React.useEffect(() => {
      firebase.auth().onAuthStateChanged(async userAuth => {
         
         if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth)

            userRef.onSnapshot(snapShot => {
               setCurrentUser({
                  currentUser: {
                     id: snapShot.id,
                     ...snapShot.data()
                  }
               })
            });
         }
         setCurrentUser({
            currentUser: userAuth
         })
      });
      
   }, []);


   return (
      <AuthContext.Provider
         value={{
            currentUser
         }}
      >
         {children}
      </AuthContext.Provider>
   )
};
