import React, {useState} from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase';

const auth = getAuth(app);

const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password).then((value) => alert("success")).catch((error) => alert(error.message));
  }

  return (
    <div className='signIn'>
        <h1>SignIn page</h1>  
      <label>Email</label>
      <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder='enter your email' />
      <label>Password</label>
      <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder='enter your password' />
      <button onClick={signInUser}>SignIn</button>
    </div>
  )
}

export default SignIn
