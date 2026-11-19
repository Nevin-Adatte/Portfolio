$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // close mobile menu when a navigation link is clicked
    $('.navbar .menu li a').click(function(){
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active");
    });

    // typing animation script
    var typed = new Typed(".typing-1",{
        strings: ["AI / ML Engineer.", "Assistant Professor.", "Computer Vision Researcher.", "Agentic AI Developer."],
        typeSpeed: 90,
        backSpeed: 50,
        loop: true
    });

    var typed = new Typed(".typing-2",{
        strings: ["AI Engineer.", "Assistant Professor.", "GATE Scholar.", "Researcher."],
        typeSpeed: 90,
        backSpeed: 50,
        loop: true
    });
});


// Get references to optional expandable content elements
const additionalContent = document.getElementById('additional-content');
const readMoreButton = document.getElementById('read-more-button');

// Set up a click event listener if the button exists
if (readMoreButton && additionalContent) {
  readMoreButton.addEventListener('click', function() {
    if (additionalContent.style.display === 'none') {
      additionalContent.style.display = 'block';
      readMoreButton.textContent = 'Read Less';
    } else {
      additionalContent.style.display = 'none';
      readMoreButton.textContent = 'Read More';
    }
  });
}
