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

    // typing animation script
    var typed = new Typed(".typing-1",{
        strings: ["Student.", "Broadcaster.", "Designer."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2",{
        strings: ["Student.", "Broadcaster.", "Designer."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});


// Get references to the HTML elements you created earlier
const additionalContent = document.getElementById('additional-content');
const readMoreButton = document.getElementById('read-more-button');

// Set up a click event listener for the button
readMoreButton.addEventListener('click', function() {
  // Toggle the visibility of the additional content
  if (additionalContent.style.display === 'none') {
    additionalContent.style.display = 'block';
    readMoreButton.textContent = 'Read Less';
  } else {
    additionalContent.style.display = 'none';
    readMoreButton.textContent = 'Read More';
  }
});