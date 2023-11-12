// Aggiungi la logica per nascondere il banner dei cookie quando viene accettato
const cookieBanner = document.querySelector('.cookie-banner');
const cookieAcceptButton = document.querySelector('.cookie-accept');

cookieAcceptButton.addEventListener('click', () => {
    cookieBanner.style.display = 'none';
});




var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}