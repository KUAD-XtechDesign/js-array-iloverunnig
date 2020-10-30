$(function(){

  let students = ["田中","山田","松本","山本","沢田"]

  $("#button00").on("click",function(){
    console.log(students)
  })

  　$("#button01").on("click",function( ){  
    $("#content").text("最初のメンバーは" + students[0]+"/人数は" + students.length);
  })

  　$("#button02").on("click",function( ){  
    $("#content").text(students[2]);
  })
 


})