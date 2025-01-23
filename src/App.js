import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { app } from './firebase';
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';
import './App.css';

const auth = getAuth(app);
const db = getDatabase(app);

function App() {

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

export default App;
