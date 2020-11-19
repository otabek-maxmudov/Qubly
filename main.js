// ===== GOOGLE SIGN-IN ===== //
function onSuccess(googleUser) {
  console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
}
function onFailure(error) {
  console.log(error);
}
function renderButton() {
  gapi.signin2.render('my-signin2', {
    'scope': 'profile email',
    'width': 240,
    'height': 50,
    'longtitle': true,
    'theme': 'dark',
    'onsuccess': onSuccess,
    'onfailure': onFailure
  });
}

// SCROLL 

AOS.init();

AOS.init({
  disable: 'mobile',
  duration: 800,
  once: false,
  mirror: true,
})