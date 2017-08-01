$(function() {

  var rangeMonth = $(".month input");
  var rangeText = $(".month p");

  rangeMonth.val("1");
  var num = rangeMonth.val();
  rangeText.text(num);


  rangeMonth.on("change", function(){
    num = $(".month input").val();
    rangeText.text(num);
  })

})
