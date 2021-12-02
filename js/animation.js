$('#sign-up-form').fadeIn('slow');
$("#password").on({
    mouseenter: function(){
        $('#password').animate({padding:'30px',fontSize:'20px'});
    },
    mouseleave: function(){
        $('#password').animate({padding:'15px',fontSize:'16px'});
    },
  });
  
$("#userNameEmail").on({
    mouseenter: function(){
        $('#userNameEmail').animate({padding:'30px',fontSize:'20px'});
    },
    mouseleave: function(){
        $('#userNameEmail').animate({padding:'15px',fontSize:'16px'});
    },
  });
  $("#submitBtn").on({
    mouseenter: function(){
        $('#submitBtn').animate({padding:'20px',fontSize:'20px'});
    },
    mouseleave: function(){
        $('#submitBtn').animate({padding:'15px',fontSize:'16px'});
    },
  });