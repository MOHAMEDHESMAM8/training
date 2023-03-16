$(document).ready(function(){

        
      $(".in2-part1 .text-content").click(function(){
          $(".in2-part1 .content").slideToggle("fast");
          $(".in2-part1 .text-content i").css({'transform' : 'rotate(180deg)'});
      });

      $(".in2-part2 .text-content").click(function(){
          $(".in2-part2 .content").slideToggle("fast");
          $(".in2-part2 .text-content i").css({'transform' : 'rotate(180deg)'});
      });



   
      

});
function toggleCommitee(){
  $(".branch-data .name").next().slideToggle("fast");
}