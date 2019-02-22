$(function(){
  $(".size-btn").on("click", function(e){
    e.preventDefault();
    $(this).toggleClass("btn-toggler");
    $(this).siblings().removeClass("btn-toggler");
  });

  $(document).ready(function(){
    $('.jsSlider').slick({
      prevArrow: $("#prev-slide"),
      nextArrow: $("#next-slide"),
      slidesToShow: 2,
      slidesToScroll: 2,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  });

  $(".hamburger__icon").on("click", function(){
    $("#hamburgerM").hasClass("hamburger__menu--active") ? $("#hamburgerM").fadeOut(): $("#hamburgerM").hide().fadeIn() ;
    
    $("#hamburgerM").toggleClass("hamburger__menu--active");
    $(".header__top").toggleClass("bgdark");
  });
  $(".hamburger__menuitem").on("click", function(){
    $("#hamburgerM").toggleClass("hamburger__menu--active");
  });

})
