$(document).ready(function () {
    $ (".clickable").click (function () {
        $(".initially-showing-1").toggle();
        $(".initially-hidden-1").toggle();
    });

    $ (".clickable-2").click (function () {
        $(".initially-showing-2").toggle();
        $(".initially-hidden-2").toggle();
    });

    $ (".clickable-3").click (function () {
        $(".initially-showing-3").toggle();
        $(".initially-hidden-3").toggle();
    });


    $("#hover-img1").hover(function () {
        $(".hidden1").toggle();
    
    });

    $("#hover-img2").hover(function () {
        $(".hidden2").toggle();
    });

    $("#hover-img3").hover(function () {
        $(".hidden3").toggle();
    });

    $("#hover-img4").hover(function () {
        $(".hidden4").toggle();
    });

    $("#hover-img5").hover(function () {
        $(".hidden5").toggle();
    });

    $("#hover-img6").hover(function () {
        $(".hidden6").toggle();
    });

    $("#hover-img7").hover(function () {
        $(".hidden7").toggle();
    });

    $("#hover-img8").hover(function () {
        $(".hidden8").toggle();
    });


    
});



function validate(){
    var nameInput = document.getElementById('nameInput').value;
    var emailInput = document.getElementById('emailInput').value;
    var messageInput = document.getElementById('messageInput').value;
      

    if(nameInput != '' && emailInput != '' && messageInput != '' && messageInput.length >10){
        swal({
            title: "Sent!",
            text: nameInput+" we have received your message. Thank you for reaching out to us",
            icon: "success",
            button: "OK!",
          });
       
       
        
    }else {
        return false;
    }
  


} 



