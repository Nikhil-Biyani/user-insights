import React, { useState, useRef } from 'react';
import Home from './home/index.js';
import './App.css';



function App() {
  const [user, setUser] = useState('');
  const [error, setError] = useState('');
  // const [isRegistering, setIsRegistering] = useState(false);

  const loginUsernameRef = useRef(null);
  const loginPasswordRef = useRef(null);
  
  const handleLogin = async () => {
    const username = loginUsernameRef.current.value;
    const password = loginPasswordRef.current.value;

    try {
      const response = await fetch('http://localhost:8000/members/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.status === 200) {
        setUser(username);
        setError('');
      } else {
        setError(data.message || 'An error occurred during login');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred during login');
    }
  };

  return (
    <div className='App'>
      {!user ? (
        <>
          <h1 style={{ color: 'white' }}>Welcome to Movie Analytics</h1>

          <div className='Loginbox'>
            <p className='LoginBoxHeader'>Login</p>
            <div className='LoginBoxContainer'>
              <p>User Name:</p>
              <input
                type='text'
                ref={loginUsernameRef}
                name='uname'
                className='LoginBoxInput'
              ></input>
              <p>Password:</p>
              <input
                type='password'
                ref={loginPasswordRef}
                name='pass'
                className='LoginBoxInput'
              ></input>
              <button
                className='LoginBoxButton'
                onClick={handleLogin}
              >
                Submit
              </button>
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
          </div>
        </>
      ) : (
        <Home user={user} />
      )}
    </div>
  );
}

export default App;
