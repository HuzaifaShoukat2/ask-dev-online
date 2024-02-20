function menuToggle() {
    const toggleMenu = document.querySelector(".menu");
    toggleMenu.classList.toggle("active");
  }
  
document.addEventListener("DOMContentLoaded", function () {
  const switchSignin = document.querySelector(".switchSignin");
  const switchSignUp = document.querySelector(".switchSignup");
  const switchSigIn = () => {
    document.querySelector(".signin-form").classList.remove("d-none");
    document.querySelector(".signin-form").classList.add("d-block");
    document.querySelector(".signup-form").classList.add("d-none");
  };
  const switchSignup = () => {
    document.querySelector(".signup-form").classList.remove("d-none");
    document.querySelector(".signup-form").classList.add("d-block");
    document.querySelector(".signin-form").classList.add("d-none");
  };
  switchSignUp && switchSignUp.addEventListener("click", switchSignup);
  switchSignin && switchSignin.addEventListener("click", switchSigIn);
});

  