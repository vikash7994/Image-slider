

	$(document).ready(function(){
		var x = 0;
		$('.btn-next').click(function(){
        x= (x<=300)?(x+100):0;
      $('figure').css('left', -x+'%');
    
		});


     // for prev slide
     $('.btn-prev').click(function(){
        x= (x>=100)?(x-100):400;
      $('figure').css('left', -x+'%');
    });
	});
  document.addEventListener('DOMContentLoaded',init);
  function init(){
      let query = window.matchMedia("(max-width:768px)");
      if(query.matches){
          document.querySelector('div#slider figure img:last-child').style.visibility ="hidden";
      }
 

    }
