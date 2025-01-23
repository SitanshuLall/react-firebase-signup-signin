import React, {useState} from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase';

const auth = getAuth(app);

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) => alert("Success")).catch((error) => alert(error.message));
  }

  return (
    <div className='signUp'>
      <h1>SignUp page</h1>
      <label htmlFor=""> Email</label>
      <input onChange={e => setEmail(e.target.value)} value={email} type="email" required placeholder='Enter your Email' />
      <label htmlFor=""> Password</label>
      <input onChange={e => setPassword(e.target.value)} value={password} type="password" required placeholder='Enter your Password' />
      <button onClick={createUser}>Sign Up</button>
    </div>
  )
}

export default SignUp;
