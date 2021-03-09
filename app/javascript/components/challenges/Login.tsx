import * as React from 'react';

export default function Login() {
  const [email, setEmail] = React.useState<string>('');
  const [valEmail, validateEmail] = React.useState<string>('');
  const [btnText, setbtnText] = React.useState<string>('Show Password');
  React.useEffect(() => {
    console.log(
      'Once you have fixed this form and added the new functionality sign in with the email: enhance@email.com',
    );
  });


  function emailValidate(){
    var address = document.getElementById("email");
    validateEmail('');
    setEmail(address.value);
   }

  function isValidEmailAddress(address) {
    var emailformat = /.+@.+/
  if (email.match(emailformat)){
    return true
  }
    validateEmail("Enter valid mail");
    return(false)
  }

  function showhidePassword(){
    var x = document.getElementById("password");

    if (x.type === "password") {
      x.type = "text"
      setbtnText ("Hide Password");
    }
    else {
      x.type = "password";
      setbtnText ("Show Password");
    }
  }


  const buttonStyles: React.CSSProperties = {
    backgroundColor: 'green',
    padding: '10px 15px',
    borderRadius: '2px',
    fontSize: '16px',
    color: 'white',
  };

  const authToken = document.querySelector('head meta[name="csrf-token"]' as any).content;

  return (
    <div>
      <h1>🥈 Challenge 2</h1>
      <h3>1. Fix the email field.</h3>
      <h3>2. Validate the email is in the correct format (client side) on input blur.</h3>
      <h3>3. Implement the functionality to show the password.</h3>
      <h3>4. Login successfully using the correct password.</h3>
      <form method="POST" action="/login">
        <input type="hidden" name="authenticity_token" value={authToken} />
        <label htmlFor="">Email</label>
        <input name="email" id="email" type="text" value={email} onChange={() =>emailValidate()} onBlur={() => isValidEmailAddress(email)}/>
        <div style={{ color: 'red', margin: '10px 0' }}>{valEmail/* Email validation errors go here */}</div>
        <label htmlFor="">Password</label>
        <div style={{ display: 'flex', marginBottom: '20px' }}>
          <input name="password" id="password" type="password" />
          <button type="button" onClick={ () =>showhidePassword()}>{btnText}</button>
        </div>
        <button style={buttonStyles} disabled={!email}>
          Login
        </button>
      </form>
    </div>
  );
}
