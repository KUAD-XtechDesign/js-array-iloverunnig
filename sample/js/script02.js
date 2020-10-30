$(function(){

  let students = ["田中","山田","松本","山本","沢田"]

  $("#button00").on("click",function(){
    console.log(students)
  })
  
  $("#button01").on("click",function( ){  
   let txt =""
    for(let i=0; i<students.length; i++ ){
      txt += students[1]
    }

    $("#content").text(txt);
  })





})