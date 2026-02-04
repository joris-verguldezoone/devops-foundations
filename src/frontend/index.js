document.addEventListener('DOMContentLoaded', () => {
  const signin = document.getElementById('signin');
  const signup = document.getElementById('signup');
  const toSignup = document.getElementById('toSignup');
  const toSignin = document.getElementById('toSignin');

  signin.classList.add('active');

  toSignup.addEventListener('click', () => {
    signin.classList.remove('active');
    signup.classList.add('active');
  });

  toSignin.addEventListener('click', () => {
    signup.classList.remove('active');
    signin.classList.add('active');
  });
});
