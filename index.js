
  
 
 
(function (){
   'use strict';

 function cat(){
  $('#source').text('Cat Facts')
  let $xhr = $.getJSON("https://cat-fact.herokuapp.com/facts")
$xhr.done(function(data) {
  if ($xhr.status != 200){
      return;
  }  
  console.log(data);
   for (let i = 0; i < 4; i +=1) {
  $('h3').eq(i).text(data[i].text);
  }
})
 }

function dog(){
  $('#source').text('Dog Facts')
 let $xhr = $.getJSON("https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=4")
    $xhr.done(function(data) {
    if ($xhr.status != 200){
              return;
  }  
   console.log(data);
    for (let i = 0; i < 4; i +=1) {
  $('h3').eq(i).text(data[i].text);
   }
  })
} 
 cat();
 $('#cat').on('click', function() {
  cat();
});

$('#dog').on('click', function() {
  dog();
});
 }) ()