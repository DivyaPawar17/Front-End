const physics = /^(?=.*[0-9]).{2,}$/;
const chemistry = /^(?=.*[0-9]).{2,}$/;
const Maths = /^(?=.*[0-9]).{2,}$/;

$(document).ready(function () {
  $("span").hide();
  $("button").click(function () {
    //console.log("button click")
    var data1 = $("#x1").val();
      var data2 = $("#x2").val();
      var data3 = $("#x3").val();
    console.log(data1);
      console.log(data2);
      console.log(data3);
    var result1 = physics.test(data1);
      var result2 = chemistry.test(data2);
      var result3 = Maths.test(data3);
    console.log(result1);
      console.log(result2);
      console.log(result3);
    result1 ? "" : $("#x1").next().fadeIn(1000);
      result2 ? "" : $("#x2").next().fadeIn(1000);
      result3 ? "" : $("#x3").next().fadeIn(1000);
      
      result1 && result2&&result3 ? $("button").after("<p>Pass</p>") : "";


    
  });
});
