import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import './style.css';

const Login = props => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSingup,
    hasAcoount,
    setHasAccount,
    emailError,
    passwordError
  } = props;
  return (
    <div>
      <Grid container spacing={0}>
        <Grid className="picgrid" item xs={5} style={{ marginLeft: '150px',marginTop:'100px',height:'500px' }}>
       
        </Grid>
        <Grid
          item
          xs={5}
          style={{
            textAlign: 'center',
            backgroundColor: 'white',
            marginTop:'100px'
          }}
        >
          <h3>Sign up to your account</h3>
          <br/>
          <br/>


          <TextField
            type="text"
            autoFocus
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            id="outlined-basic"
            label="Your email"
            variant="outlined"
          />
          <p>{emailError}</p>
          <br/>
          <br/>

          <TextField
            type="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            id="outlined-basic"
            label="Create Password"
            variant="outlined"
          />
          <br/>
          <br/>
          <p>{passwordError}</p>
          <div>
            {hasAcoount ? (
              <>
                <button onClick={handleLogin} style={{ color: 'blue' }}>
                  sign in
                </button>
                <br/>
          <br/>
                <p>
                  Dont have account ?
                  <span
                    onClick={() => setHasAccount(!hasAcoount)}
                    style={{ color: 'blue' }}
                  >
                    sign up
                  </span>{' '}
                </p>
              </>
            ) : (
              <>
                <button onClick={handleSingup} style={{ color: 'blue' }}>
                  sign up
                </button>
                <br/>
          <br/>
                <p>
                  have an account ?
                  <span
                    onClick={() => setHasAccount(!hasAcoount)}
                    style={{ color: 'blue' }}
                  >
                    {' '}
                    sign in
                  </span>
                </p>
              </>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Login;
