const loginContainer = document.getElementById("loginContainer");
const loggedInContainer = document.getElementById("loggedInContainer");

const lineLoginButton = document.getElementById("lineLoginButton");

const clientId = "2000134414"; // Replace with your Line channel's client ID
const clientSecret = '484dad8bec324be76525854cee859fc9';




lineLoginButton.addEventListener("click", () => {
  // Redirect 
  window.location.href = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${clientId}&redirect_uri=http://127.0.0.1:5500/pageme.html&state=6789abcde&scope=profile openid email&nonce=01234xyz`;
  loadstart()


});





function loadstart() {
  document.querySelector(".loader-container").classList.remove("d-none")
}
function loadend() {
  document.querySelector(".loader-container").classList.add("d-none")
}