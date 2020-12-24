import React,{useEffect}from 'react';
import { userSlice } from './features/userSlice';
import './App.css';
import { login, logout, selectUser } from "./features/userSlice"
import { useDispatch, useSelector } from "react-redux"
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Login from './Login'
import {auth} from './firebase'
import Widget from './Widget'


function App() {
  const user = useSelector(selectUser)

  useEffect(() => {
    auth.onAuthStateChanged(userAuth =>{
      if (userAuth){
        //user logged in
        dispatchEvent(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      }else{
        //user logged out
        dispatchEvent(logout());
      }
    } )
  }, [])

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
          <div className="app_body">
              <Sidebar />
              <Feed />
              < Widget/>
          </div>
           )
      }
        
    </div>
  );
}

export default App;
