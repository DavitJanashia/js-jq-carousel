//***************************************************************
//prova 2

$(document).ready(
  function (){

    var next = $('.fas.fa-angle-right');
    next.click(myNext);

    var prev = $('.fas.fa-angle-left');
    prev.click(myPrev);

    $(document).keydown(function() {
      var key = event.which;
      if (key == 39) {
        myNext();
      } else if (key == 37) {
        myPrev();
      }
    });
    // //***************************************************************
    // //bonus
    // var pallino = $('.fas.fa-circle');
    // pallino.click(
    //   function(){
    //     var pG = $('.fas.fa-circle');
    //     $(this).
    //   }
    // );





  }
);


// FUNCTIONS
function myNext(){
    var myActive = $('.my-img-box.active');
    var myFirstActive = $('.my-img-box.first');
    var myLastActive = $('.my-img-box.last.active');
    var myHasClass = $(".my-img-box.active").hasClass("active");
    var myHasClass2 = $(".my-img-box.active").hasClass('last');

    var pallinoBlu = $('.fas.fa-circle.active');
    var pF = $('.fas.fa-circle.first');
    var pLA = $('.fas.fa-circle.last.active');

    if(myHasClass == true && myHasClass2 != true){
      myActive.removeClass('active');
      myActive.next().addClass('active');

      pallinoBlu.removeClass('active');
      pallinoBlu.next().addClass('active');
    }
     else if(myHasClass2 == true){
      myLastActive.removeClass('active');
      myFirstActive.addClass('active');

      pLA.removeClass('active');
      pF.addClass('active');
    }
}

function myPrev(){
  var myActive = $('.my-img-box.active');
  var myFirstActive = $('.my-img-box.first.active');
  var myLast = $('.my-img-box.last');
  var myHasClass = $(".my-img-box.active").hasClass("active");
  var myHasClass1 = $(".my-img-box.active").hasClass('first');

  var pallinoBlu = $('.fas.fa-circle.active');
  var pFA = $('.fas.fa-circle.first.active');
  var pL = $('.fas.fa-circle.last');


  if(myHasClass == true && myHasClass1 != true){
    myActive.removeClass('active');
    myActive.prev().addClass('active');

    pallinoBlu.removeClass('active');
    pallinoBlu.prev().addClass('active');
  }
   else if(myHasClass1 == true){
    myFirstActive.removeClass('active');
    myLast.addClass('active');

    pFA.removeClass('active');
    pL.addClass('active');
  }
}
