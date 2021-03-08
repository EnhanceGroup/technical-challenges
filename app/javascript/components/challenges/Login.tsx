import * as React from 'react';

export default function Login() {
  //const [email, setEmail] = React.useState<string>('');

  React.useEffect(() => {
    console.log(
      'Once you have fixed this form and added the new functionality sign in with the email: enhance@email.com', /*password123*/
    );
    
  });

  const buttonStyles: React.CSSProperties = {
    backgroundColor: 'green',
    padding: '10px 15px',
    borderRadius: '2px',
    fontSize: '16px',
    color: 'white',
  };

  const authToken = document.querySelector('head meta[name="csrf-token"]' as any).content;

  function emailValid() {
    let emailElement = (document.getElementById('email') as HTMLInputElement);
    let errorElement = (document.getElementById('errors') as HTMLElement);

    emailElement.onblur = function() {

      if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(emailElement.value)) { 
        errorElement.innerHTML = "invalid email";
      } else {
        errorElement.innerHTML ="";
      }

    }

  }

  function showPassword() {
    let password = (document.getElementById('password') as HTMLElement);
    const displayType = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', displayType);
  }

  return (
    <div>
      <h1>🥈 Challenge 2</h1>
      <h3>1. Fix the email field.</h3>
      <h3>2. Validate the email is in the correct format (client side) on input blur.</h3>
      <h3>3. Implement the functionality to show the password.</h3>
      <h3>4. Login successfully using the correct password.</h3>
      <form method="POST" action="/login" >
        <input type="hidden" name="authenticity_token" value={authToken} />
        <label htmlFor="">Email</label>
        <input id="email" name="email" type="email" onBlur={emailValid} />
        <div id="errors" style={{ color: 'red', margin: '10px 0' }}>{/* Email validation errors go here  disabled={!email} */}</div>
        <label htmlFor="">Password</label>
        <div style={{ display: 'flex', marginBottom: '20px' }}>
          <input id="password" name="password" type="password" />
          <button type="button" onClick={showPassword}>Show Password</button>
        </div>
        <button style={buttonStyles}>
          Login
        </button>
      </form>
    </div>
  );
}
