 document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
   var x=document.querySelectorAll('.chuyenslide ul li');
   var slide=document.querySelectorAll('.cacslide ul li');

   flag=1;
   var menu=document.querySelectorAll('div.menu ul.menu li.menu')
   window.onscroll = function() {myFunction()};
   function myFunction() {
    if (document.documentElement.scrollTop > 70&&flag==1) {
      console.log(456);
        document.getElementById("scrollmenu").classList.add("menuscroll");
       for (var i = 0; i < menu.length; i++) {
          menu[i].classList.add('menuli');
       }
       flag=2;
    } else if(document.documentElement.scrollTop < 70&&flag==2){
        document.getElementById("scrollmenu").classList.remove("menuscroll");
        for (var i = 0; i < menu.length; i++) {
          menu[i].classList.remove('menuli');}
        flag=1;
    }
};
// // end scrollmenu
   flag1=1; 
   var 
       den=document.querySelector('.den'),
       thongtinchinh=document.querySelector('.thongtinchinh');
   // window.onscroll = function() {myFunctionmot()};
    document.addEventListener("scroll", function(event) {
       myFunctionmot();
     },false);
   function myFunctionmot() {
    if (document.documentElement.scrollTop >582 &&flag1==1) {
      console.log('scrollroi');
      den.classList.add('denscroll');
      thongtinchinh.classList.add('thongtinchinhscroll');
       flag1=2;
    } else if(document.documentElement.scrollTop <582 &&flag1==2){
      den.classList.remove('denscroll');
      thongtinchinh.classList.remove('thongtinchinhscroll');
        flag1=1;
    }
}
  // end scrollhieuung
     var thoigian=setInterval(function(){
    var hienthi = document.querySelector('.cacslide ul li.active1');
    console.log(hienthi);
    for (var vitri = 0;hienthi=hienthi.previousElementSibling; vitri++) {};
      if(vitri<slide.length-1){for (var i = 0; i < slide.length; i++) {
        slide[i].classList.remove('active1');
        x[i].classList.remove('active');}
        slide[vitri+1].classList.add('active1');
        x[vitri+1].classList.add('active');}
      else{
        for (var i = 0; i < slide.length; i++) {
        slide[i].classList.remove('active1');
        x[i].classList.remove('active');}
        slide[0].classList.add('active1');
        x[0].classList.add('active');
      }
      
    },5000);
   for (var i = 0; i < x.length; i++) {
   	x[i].addEventListener("click", function(event){
      
   		for (var k = 0; k < x.length; k++) {
   			x[k].classList.remove('active');
   		};
   		this.classList.add('active');
      var nutkh=this;
      var i=0;
      for (i = 0; nutkh=nutkh.previousElementSibling; i++);
      for (var j = 0; j < slide.length; j++) {
        slide[j].classList.remove('active1');
        slide[i].classList.add('active1');
      };
   
   });
   }
   // end slide
   var about=document.getElementById('about');
    about.addEventListener("click", function(event) {
      window.scrollTo(0, 585);
     },false);
   var comment=document.getElementById('comment');
    comment.addEventListener("click", function(event) {
      window.scrollTo(0, 1250);
     },false);
       
     
  
  },false);