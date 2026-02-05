document.addEventListener('DOMContentLoaded', () => {
  const signin = document.getElementById('signin');
  const signup = document.getElementById('signup');
  const toSignup = document.getElementById('toSignup');
  const toSignin = document.getElementById('toSignin');

  const errorMsg = document.getElementById('error-msg')


  signin.classList.add('active');

  toSignup.addEventListener('click', () => {
    signin.classList.remove('active');
    signup.classList.add('active');
  });

  toSignin.addEventListener('click', () => {
    signup.classList.remove('active');
    signin.classList.add('active');
  });

  toSignup.addEventListener('click', () => {

    form.addEventListener('submit', (e) => {
    e.preventDefault(); 

      const email = form.elements['email'].value;
      const password = form.elements['password'].value;
      const confirmPassword = form.elements['confirm_password'].value;
      console.log(email, password, confirmPassword, "cc")
      if(password === confirmPassword){

        const formData = new FormData()
        formData.append('email', email)
        formData.append('password', password)
      
        console.log(email,password,confirmPassword)

        fetch("http://node-api/signup", {
          method:POST,
          body: formData
        })
      }else{
        errorMsg.innerHTML = "Confirmation de mot de passe invalide"
      }
    })
  })
});
