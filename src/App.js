import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { app } from './firebase';
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';
import './App.css';
import { useEffect, useState } from 'react';

const auth = getAuth(app);
const db = getDatabase(app);

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        //logged in
        console.log(user);
        setUser(user);
      }
      else {
        //logged out
        console.log("User is logged out");
        setUser(null);
      }
    });
  }, []);

  const signUpUser = () => {
    createUserWithEmailAndPassword(
      auth, 
      "test.dev@gmail.com", 
      "test123"
    ).then((value) => console.log(value));
  }

  const putData = () => {
    set(ref(db, 'users/sitanshu'), {
      id: 1,
      name: 'Sitanshu',
      age: 21,
      email: 'test@test.com',
    })
  }

  if(user === null){
    return (
    <div className="App">
      <h1>React Firebase App</h1>
      <button onClick={putData}>Put Data</button>
      <button onClick={signUpUser}>Sign Up and Create User</button>
      <SignUp/>
      <SignIn/>
    </div>
  );
  }
  return(
    <div className="App">
      <h1>Welcome {user.email}</h1>
      <button onClick={() => signOut(auth)}>Sign Out</button>
    </div>
  )
  
}

export default App;
