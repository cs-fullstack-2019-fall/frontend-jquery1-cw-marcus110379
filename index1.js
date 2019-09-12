// $("#myElement").click(function() {
//     alert('my element was clicked')
// };
$("#myElement").click(function(e){
    alert('my element was clicked');

     $(e.target).css( "color", "blue" );
   // console.log(e.target);
   // e.target.classList.toggle("oneSizeFont");
});
$(".redText").addClass("firstOne");
$(".green").addClass("secondOne");
$(".orange").addClass("thirdOne");
